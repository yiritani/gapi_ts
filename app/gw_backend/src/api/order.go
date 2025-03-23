package api

import (
	"context"
	"fmt"

	gw_backend "gw_backend/src/_generate/gw_backend"
)

func ListOrders(ctx context.Context, req *gw_backend.ListOrdersRequest) (*gw_backend.ListOrdersResponse, error) {
	fmt.Println("ListOrders gateway")
	sampleOrders := []*gw_backend.Order{
		{
			Id:   "1",
			Name: "Sample Order 1",
		},
		{
			Id:   "2",
			Name: "Sample Order 2",
		},
	}
	return &gw_backend.ListOrdersResponse{Orders: sampleOrders}, nil
}
