package nnApp

import (
	"fmt"

	"github.com/multiformats/go-multiaddr"
)

const (
	success = 0
	failure = 1
)

type pebbleNoopLogger struct{}

func (p *pebbleNoopLogger) Infof(_ string, _ ...any)  {}
func (p *pebbleNoopLogger) Fatalf(_ string, _ ...any) {}

func getBootNodeAddresses(addrs []string) ([]multiaddr.Multiaddr, error) {

	var out []multiaddr.Multiaddr
	for _, addr := range addrs {

		addr, err := multiaddr.NewMultiaddr(addr)
		if err != nil {
			return nil, fmt.Errorf("could not parse multiaddress (addr: %s): %w", addr, err)
		}

		out = append(out, addr)
	}

	return out, nil
}
