package gateway

import (
	"context"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	pb "github.com/uditdc/nnApp/gateway/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/reflection"

	"github.com/blocklessnetwork/b7s/models/execute"
	"github.com/blocklessnetwork/b7s/node"
)

type gatewayServer struct {
	pb.UnimplementedGatewayServer
	Node *node.Node
}

// Server represents the gRPC server.
type Server struct {
	server *grpc.Server
	gatewayServer
	httpServer *http.Server
}

// NewServer creates a new gRPC server instance.
func NewServer(n *node.Node) *Server {
	s := &Server{
		server: grpc.NewServer(),
		gatewayServer: gatewayServer{
			Node: n,
		},
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
func (s *Server) Start(grpcAddr, gatewayAddr string) error {
	reflection.Register(s.server)

	listener, err := net.Listen("tcp", grpcAddr)
	if err != nil {
		return err
	}

	go func() {
		log.Printf("Starting gRPC server on %s", grpcAddr)
		if err := s.server.Serve(listener); err != nil {
			log.Fatalf("Failed to serve gRPC server: %v", err)
		}
	}()

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}
	if err := pb.RegisterGatewayHandlerFromEndpoint(ctx, mux, grpcAddr, opts); err != nil {
		log.Fatalf("Failed to register gateway: %v", err)
	}

	s.httpServer = &http.Server{
		Addr:    gatewayAddr,
		Handler: mux,
	}

	log.Printf("Starting Gateway server on %s", gatewayAddr)
	return s.httpServer.ListenAndServe()
}

// Stop stops the gRPC server.
func (s *Server) Stop() {
	s.server.GracefulStop()
	if s.httpServer != nil {
		s.httpServer.Shutdown(context.Background())
	}
}

// === gatewayServer implementation

func (s gatewayServer) Install(ctx context.Context, in *pb.InstallRequest) (*pb.InstallResponse, error) {
	log.Printf("InstallRequest: %v, %v", in.GetCid(), in.GetUri())
	return &pb.InstallResponse{}, nil
}

func (s gatewayServer) Invoke(ctx context.Context, in *pb.InvokeRequest) (*pb.InvokeResponse, error) {
	log.Printf("InvokeRequest: %v, %v, %v", in.GetFunctionId(), in.GetCallData(), in.GetMethod())

	// Only run if the function exists

	// Invoke Node Request
	code, id, result, _, err := s.Node.ExecuteFunction(ctx, execute.Request{
		FunctionID: in.GetFunctionId(),
		Method:     in.GetMethod(),
		Config: execute.Config{
			NodeCount: 1,
		},
	}, node.DefaultTopic)

	if err != nil {
		log.Printf("node failed to execute function: " + in.GetFunctionId())
		return nil, err
	}

	var res execute.Result
	for k := range result {
		res = result[k]
		break
	}

	return &pb.InvokeResponse{
		Code:      string(code),
		RequestId: id,
		Result:    res.Result.Stdout,
		Usage:     &pb.InvokeUsage{},
	}, nil
}
