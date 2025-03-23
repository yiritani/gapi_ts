protoc:
	pnpm generate

protoc_google:
	pnpm generate_google

swagger:
	protoc --proto_path=proto \
	 --openapiv2_out=./app/backend/src/_generate \
	 --openapiv2_opt=allow_merge=true,merge_file_name=openapiv2  \
	 -I ./proto ./proto/*.proto

gen:
	make protoc
	make protoc_google
	make swagger
