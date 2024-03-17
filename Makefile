.PHONY: proto dev

dev:
	@go run server/gateway.go

proto:
	@echo "Generating proto types ..."
	@protoc --go_out=. --go-grpc_out=. --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative ./gateway/proto/server.proto;
	@protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./gateway/proto/server.proto;
	@echo "Success"