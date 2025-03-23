protoc:
	pnpm generate

protoc_google:
	pnpm generate_google

proto_go:
	rm -f app/gw_backend/src/_generate/*.go
	rm -f app/gw_backend/src/_generate/doc/*.swagger.json
	protoc --proto_path=proto --go_out=app/gw_backend/src/_generate --go_opt=paths=source_relative \
	--go-grpc_out=app/gw_backend/src/_generate --go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=app/gw_backend/src/_generate --grpc-gateway_opt=paths=source_relative \
	--openapiv2_out=app/gw_backend/src/_generate/doc --openapiv2_opt=allow_merge=true,merge_file_name=gw_backend \
	proto/gw_backend/*.proto

swagger:
	protoc --proto_path=proto \
	 --openapiv2_out=./app/backend/src/_generate \
	 --openapiv2_opt=allow_merge=true,merge_file_name=openapiv2  \
	 -I ./proto ./proto/backend/*.proto

gen:
	make protoc
	make protoc_google
	make swagger
	make proto_go
