package api

import (
	"context"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	gw_backend "gw_backend/src/_generate/gw_backend"
)

func RunGatewayServer(ctx context.Context, grpcServerEndpoint string) error {
	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}

	err := gw_backend.RegisterOrderServiceHandlerFromEndpoint(ctx, mux, grpcServerEndpoint, opts)
	if err != nil {
		return err
	}

	// Serve HTTP gateway
	return http.ListenAndServe(":8080", mux)
}
