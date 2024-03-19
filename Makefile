.PHONY: proto dev

dev:
	@go run server/gateway.go

proto:
	@echo "Generating proto types ..."
	@npx buf generate
	@echo "Success"
