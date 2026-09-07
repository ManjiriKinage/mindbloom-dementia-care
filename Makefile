# MindBloom Makefile for Linux / macOS / Unix

.PHONY: help install run dev fastapi docker docker-down clean

PYTHON ?= python3

help:
	@echo "MindBloom Commands:"
	@echo "  make install     - Install Python dependencies"
	@echo "  make run         - Run the web application (Flask on port 5000)"
	@echo "  make dev         - Run with auto-reloading and browser launch"
	@echo "  make fastapi     - Run with FastAPI backend"
	@echo "  make docker      - Build and run with Docker Compose"
	@echo "  make docker-down - Stop Docker containers"
	@echo "  make clean       - Remove cache and build artifacts"

install:
	$(PYTHON) -m pip install -r requirements.txt

run:
	$(PYTHON) run.py

dev:
	$(PYTHON) run.py --open-browser

fastapi:
	$(PYTHON) run.py --fastapi

docker:
	docker compose up --build

docker-down:
	docker compose down

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
