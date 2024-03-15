package gateway

import (
	"context"
	"log"
	"net"

	pb "github.com/uditdc/nnApp/gateway/proto"
	"google.golang.org/grpc"
)

type gatewayServer struct {
	pb.UnimplementedGatewayServer
}

// Server represents the gRPC server.
type Server struct {
	server *grpc.Server
	gatewayServer
}

// NewServer creates a new gRPC server instance.
func NewServer() *Server {
	s := &Server{
		server:        grpc.NewServer(),
		gatewayServer: gatewayServer{},
	}

	// Register the gatewayServer implementation with the gRPC server
	pb.RegisterGatewayServer(s.server, s.gatewayServer)

	return s
}

// RegisterService registers a gRPC service with the server.
func (s *Server) RegisterService(serviceDesc *grpc.ServiceDesc, serviceImpl interface{}) {
	s.server.RegisterService(serviceDesc, serviceImpl)
}

// Start starts the gRPC server and listens on the provided address.
func (s *Server) Start(addr string) error {
	listener, err := net.Listen("tcp", addr)
	if err != nil {
		return err
	}

	return s.server.Serve(listener)
}

// Stop stops the gRPC server.
func (s *Server) Stop() {
	s.server.GracefulStop()
}

// === gatewayServer implementation

func (s gatewayServer) Install(ctx context.Context, in *pb.InstallRequest) (*pb.InstallResponse, error) {
	log.Printf("InstallRequest: %v, %v", in.GetCid(), in.GetUri())
	return &pb.InstallResponse{}, nil
}

func (s gatewayServer) Invoke(ctx context.Context, in *pb.InvokeRequest) (*pb.InvokeResponse, error) {
	log.Printf("InvokeRequest: %v, %v, %v", in.GetFunctionId(), in.GetCallData(), in.GetMethod())
	return &pb.InvokeResponse{Message: "Hello " + in.GetFunctionId() + " " + in.GetCallData() + " " + in.GetMethod()}, nil
}
