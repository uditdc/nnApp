package nnApp

import (
	"github.com/blocklessnetwork/b7s/config"
	"github.com/blocklessnetwork/b7s/node"
	"github.com/spf13/pflag"
)

func parseFlags() config.Config {
	const (
		defaultAPIPort      = "8080"
		defaultPort         = 0
		defaultWsPort       = 45321
		defaultAddress      = "0.0.0.0"
		defaultWorkspaceDir = "workspace"
		defaultPeerDB       = "peer-db"
		defaultFunctionDB   = "function-db"
		defaultConcurrency  = uint(node.DefaultConcurrency)
		defaultUseWebsocket = true
		defaultRole         = "head"
	)

	var cfg config.Config

	pflag.StringVarP(&cfg.Log.Level, "log-level", "l", "info", "log level to use")

	// Node configuration.
	pflag.StringVarP(&cfg.Role, "role", "r", defaultRole, "role this note will have in the Blockless protocol (head or worker)")
	pflag.StringVar(&cfg.PeerDB, "peer-db", defaultPeerDB, "path to the database used for persisting peer data")
	pflag.StringVar(&cfg.FunctionDB, "function-db", defaultFunctionDB, "path to the database used for persisting function data")
	pflag.UintVarP(&cfg.Concurrency, "concurrency", "c", defaultConcurrency, "maximum number of requests node will process in parallel")
	pflag.StringVar(&cfg.Head.RestAPI, "rest-api", defaultAPIPort, "address where the web server will listen on")
	pflag.StringVar(&cfg.Workspace, "workspace", "./workspace", "directory that the node can use for file storage")
	pflag.StringVar(&cfg.Worker.RuntimePath, "runtime-path", "", "runtime path (used by the worker node)")
	pflag.StringVar(&cfg.Worker.RuntimeCLI, "runtime-cli", "", "runtime path (used by the worker node)")
	pflag.BoolVar(&cfg.LoadAttributes, "attributes", false, "node should try to load its attribute data from IPFS")
	pflag.StringSliceVar(&cfg.Topics, "topic", nil, "topics node should subscribe to")

	// Host configuration.
	pflag.StringVar(&cfg.Connectivity.PrivateKey, "private-key", "", "private key that the b7s host will use")
	pflag.StringVarP(&cfg.Connectivity.Address, "address", "a", defaultAddress, "address that the b7s host will use")
	pflag.UintVarP(&cfg.Connectivity.Port, "port", "p", defaultPort, "port that the b7s host will use")
	pflag.StringSliceVar(&cfg.BootNodes, "boot-nodes", nil, "list of addresses that this node will connect to on startup, in multiaddr format")

	// For external IPs.
	pflag.StringVarP(&cfg.Connectivity.DialbackAddress, "dialback-address", "", defaultAddress, "external address that the b7s host will advertise")
	pflag.UintVarP(&cfg.Connectivity.DialbackPort, "dialback-port", "", defaultPort, "external port that the b7s host will advertise")

	// Websocket connection.
	pflag.UintVarP(&cfg.Connectivity.WebsocketDialbackPort, "websocket-dialback-port", "", defaultPort, "external port that the b7s host will advertise for websocket connections")
	pflag.BoolVarP(&cfg.Connectivity.Websocket, "websocket", "w", defaultUseWebsocket, "should the node use websocket protocol for communication")
	pflag.UintVar(&cfg.Connectivity.WebsocketPort, "websocket-port", defaultWsPort, "port to use for websocket connections")

	// Limit configuration.
	pflag.Float64Var(&cfg.Worker.CPUPercentageLimit, "cpu-percentage-limit", 1.0, "amount of CPU time allowed for Blockless Functions in the 0-1 range, 1 being unlimited")
	pflag.Int64Var(&cfg.Worker.MemoryLimitKB, "memory-limit", 0, "memory limit (kB) for Blockless Functions")

	pflag.CommandLine.SortFlags = false

	pflag.Parse()

	return cfg
}
