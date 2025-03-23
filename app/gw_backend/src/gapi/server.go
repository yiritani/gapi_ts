package gapi

import (
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	gw_backend "gw_backend/src/_generate/gw_backend"
)

func NewGapiServer() *grpc.Server {
	grpcServer := grpc.NewServer()

	gw_backend.RegisterOrderServiceServer(grpcServer, &OrderServer{})

	reflection.Register(grpcServer)
	return grpcServer
}
