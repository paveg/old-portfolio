.PHONY: help docker.build docker.run

APP_NAME := portfolio
VERSION_TAG ?= latest
BUILD_NODE_VERSION := 10.15.3
ifeq ($(shell ls -a | grep .node-version), .node-version)
	BUILD_NODE_VERSION := $(shell cat .node-version)
endif
IMAGE_NAME := $(APP_NAME):$(VERSION_TAG)

.DEFAULT_GOAL := help

help: ## Show options
	@grep -E '^[a-zA-Z_-{\.}]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

docker.build: ## Execute docker build portfolio image
	docker build --build-arg NODE_VERSION=$(BUILD_NODE_VERSION) -t $(IMAGE_NAME) .

docker.run: ## Execute docker run portfolio
	docker run -p 8080:80 -it --rm --name $(APP_NAME) $(IMAGE_NAME)
