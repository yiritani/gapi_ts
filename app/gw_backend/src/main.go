package main

import (
	"context"
	"fmt"
	"log"
	"net"

	api "gw_backend/src/api"
	gapi "gw_backend/src/gapi"
)

func main() {
	// Start gRPC server
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := gapi.NewGapiServer()
	
	go func() {
		fmt.Println("Starting gRPC server on port 50051")
		if err := grpcServer.Serve(lis); err != nil {
			log.Fatalf("failed to serve gRPC: %v", err)
		}
	}()

	// Start HTTP gateway
	fmt.Println("Starting HTTP gateway on port 8080")
	if err := api.RunGatewayServer(context.Background(), "localhost:50051"); err != nil {
		log.Fatalf("failed to serve gateway: %v", err)
	}
}
