package nnApp

import (
	"context"
	"os"
	"os/signal"
	"path/filepath"

	"github.com/cockroachdb/pebble"
	"github.com/rs/zerolog"

	"github.com/blocklessnetwork/b7s/config"
	"github.com/blocklessnetwork/b7s/fstore"
	"github.com/blocklessnetwork/b7s/host"
	"github.com/blocklessnetwork/b7s/models/blockless"
	"github.com/blocklessnetwork/b7s/node"
	"github.com/blocklessnetwork/b7s/peerstore"
	"github.com/blocklessnetwork/b7s/store"
)

// App defines the basic structure of an "nnApp"
type App struct {
	Name        string `json:"name"` // Name of the app
	B7sConfig   config.Config
	PeerDb      *pebble.DB
	FunctionsDb *pebble.DB

	logger zerolog.Logger
}

// NewApp creates a new App instance with the provided name, and initializes flags.
func NewApp(name string) (*App, error) {
	a := &App{
		Name: name,
	}

	// Parse configuration flags
	a.B7sConfig = parseFlags()

	// Configure zerolog with desired level (optional)
	a.logger = zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.DebugLevel)

	// Workspace path
	workspace, err := filepath.Abs(a.B7sConfig.Workspace)
	if err != nil {
		return nil, err
	}
	a.B7sConfig.Workspace = workspace

	// Open the pebble peer database.
	pdb, err := pebble.Open(a.B7sConfig.PeerDatabasePath, &pebble.Options{Logger: &pebbleNoopLogger{}})
	if err != nil {
		return nil, err
	}
	a.PeerDb = pdb

	// Open the pebble function database.
	fdb, err := pebble.Open(a.B7sConfig.FunctionDatabasePath, &pebble.Options{Logger: &pebbleNoopLogger{}})
	if err != nil {
		return nil, err
	}
	a.FunctionsDb = fdb

	return a, nil
}

// Run allows the app to perform its specific functionality
func (a *App) Run() int {
	a.logger.Info().Msg("nnApp starting")
	a.logger.Info().Msg("nnApp node starting")

	// Signal catching for clean shutdown.
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt)

	// Create a new store.
	// Get the list of dial back peers.
	peerstore := peerstore.New(store.New(a.PeerDb))
	peers, err := peerstore.Peers()
	if err != nil {
		a.logger.Error().Err(err).Msg("could not get list of dial-back peers")
		return failure
	}

	// Get the list of boot nodes addresses.
	bootNodeAddrs, err := getBootNodeAddresses(a.B7sConfig.BootNodes)
	if err != nil {
		a.logger.Error().Err(err).Msg("could not get boot node addresses")
		return failure
	}

	// Create libp2p host.
	host, err := host.New(a.logger, a.B7sConfig.Host.Address, a.B7sConfig.Host.Port,
		host.WithPrivateKey(a.B7sConfig.Host.PrivateKey),
		host.WithBootNodes(bootNodeAddrs),
		host.WithDialBackPeers(peers),
		host.WithDialBackAddress(a.B7sConfig.Host.DialBackAddress),
		host.WithDialBackPort(a.B7sConfig.Host.DialBackPort),
		host.WithDialBackWebsocketPort(a.B7sConfig.Host.DialBackWebsocketPort),
		host.WithWebsocket(a.B7sConfig.Host.Websocket),
		host.WithWebsocketPort(a.B7sConfig.Host.WebsocketPort),
	)
	if err != nil {
		a.logger.Error().Err(err).Str("key", a.B7sConfig.Host.PrivateKey).Msg("could not create host")
		return failure
	}
	defer host.Close()

	a.logger.Info().
		Str("id", host.ID().String()).
		Strs("addresses", host.Addresses()).
		Int("boot_nodes", len(bootNodeAddrs)).
		Int("dial_back_peers", len(peers)).
		Msg("created host")

	// Set node options.
	opts := []node.Option{
		node.WithRole(blockless.HeadNode),
		node.WithConcurrency(a.B7sConfig.Concurrency),
		node.WithAttributeLoading(a.B7sConfig.LoadAttributes),
	}

	fstore := fstore.New(a.logger, store.New(a.FunctionsDb), a.B7sConfig.Workspace)

	// If we have topics specified, use those.
	if len(a.B7sConfig.Topics) > 0 {
		opts = append(opts, node.WithTopics(a.B7sConfig.Topics))
	}

	// Instantiate node.
	node, err := node.New(a.logger, host, peerstore, fstore, opts...)
	if err != nil {
		a.logger.Error().Err(err).Msg("could not create node")
		return failure
	}

	// Create the main context.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	done := make(chan struct{})
	failed := make(chan struct{})

	// Start node main loop in a separate goroutine.
	go func() {
		a.logger.Info().Msg("Blockless Node starting")

		err := node.Run(ctx)
		if err != nil {
			a.logger.Error().Err(err).Msg("Blockless Node failed")
			close(failed)
		} else {
			close(done)
		}

		a.logger.Info().Msg("Blockless Node stopped")
	}()

	select {
	case <-sig:
		a.logger.Info().Msg("Blockless Node stopping")
	case <-done:
		a.logger.Info().Msg("Blockless Node done")
	case <-failed:
		a.logger.Info().Msg("Blockless Node aborted")
		return failure
	}

	// If we receive a second interrupt signal, exit immediately.
	go func() {
		<-sig
		a.logger.Warn().Msg("forcing exit")
		os.Exit(1)
	}()

	return success
}
