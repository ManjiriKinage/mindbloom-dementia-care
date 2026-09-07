#!/usr/bin/env python3
"""
MindBloom — Universal Cross-Platform Launcher
Runs seamlessly on Windows, macOS, Linux, Raspberry Pi, Docker, and Cloud VMs.

Usage:
    python run.py                 # Standard launch (Flask on http://127.0.0.1:5000)
    python run.py --open-browser  # Launch and automatically open browser
    python run.py --port 5001     # Use custom port
    python run.py --fastapi       # Run using FastAPI instead of Flask
    python run.py --install       # Install/verify dependencies before running
"""

import sys
import os
import socket
import argparse
import subprocess
import webbrowser
import threading
import time
from pathlib import Path

# Minimum Python requirement
MIN_PYTHON = (3, 8)
ROOT_DIR = Path(__file__).resolve().parent

def check_python_version():
    """Ensure Python version satisfies minimum requirements."""
    if sys.version_info < MIN_PYTHON:
        print(f"[-] Error: Python {MIN_PYTHON[0]}.{MIN_PYTHON[1]}+ is required.")
        print(f"    Current version: {sys.version.split()[0]}")
        sys.exit(1)

def is_port_in_use(port: int, host: str = "127.0.0.1") -> bool:
    """Check if a TCP port is currently open / in use."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex((host, port)) == 0

def find_available_port(start_port: int, max_attempts: int = 10) -> int:
    """Find the next available port if the starting port is busy."""
    port = start_port
    while is_port_in_use(port) and port < start_port + max_attempts:
        port += 1
    return port

def verify_and_install_dependencies():
    """Check if required packages are installed, and install if missing."""
    req_file = ROOT_DIR / "requirements.txt"
    if not req_file.exists():
        return

    try:
        import flask
        import flask_cors
    except ImportError:
        print("[!] Required dependencies not found. Installing from requirements.txt...")
        cmd = [sys.executable, "-m", "pip", "install", "-r", str(req_file)]
        res = subprocess.call(cmd)
        if res != 0:
            print("[-] Warning: Automatic pip install encountered issues. Please run:")
            print(f"    {sys.executable} -m pip install -r requirements.txt")

def open_browser_delayed(url: str, delay: float = 1.2):
    """Open web browser after server starts."""
    def _open():
        time.sleep(delay)
        try:
            webbrowser.open(url)
        except Exception:
            pass
    threading.Thread(target=_open, daemon=True).start()

def main():
    check_python_version()

    parser = argparse.ArgumentParser(
        description="MindBloom — Cross-Platform Cognitive Care Platform Launcher"
    )
    parser.add_argument("--host", default=os.environ.get("HOST", "0.0.0.0"), help="Host IP to bind to (default: 0.0.0.0)")
    parser.add_argument("--port", "-p", type=int, default=int(os.environ.get("PORT", 5000)), help="Port to run on (default: 5000)")
    parser.add_argument("--fastapi", action="store_true", help="Run FastAPI backend instead of Flask")
    parser.add_argument("--open-browser", "-b", action="store_true", help="Automatically open web browser on start")
    parser.add_argument("--install", "-i", action="store_true", help="Install requirements before launching")
    parser.add_argument("--no-debug", dest="debug", action="store_false", default=True, help="Disable Flask debug reload")
    args = parser.parse_args()

    if args.install:
        verify_and_install_dependencies()
    else:
        # Quick import test
        try:
            import flask
        except ImportError:
            verify_and_install_dependencies()

    selected_port = args.port
    if is_port_in_use(selected_port):
        # On macOS, port 5000 is often taken by AirPlay Receiver
        alt_port = find_available_port(selected_port + 1)
        print(f"[!] Notice: Port {selected_port} is already in use.")
        print(f"[*] Automatically switching to available port: {alt_port}")
        selected_port = alt_port

    display_host = "127.0.0.1" if args.host == "0.0.0.0" else args.host
    url = f"http://{display_host}:{selected_port}"

    print("=" * 70)
    print(" 🧠 MindBloom — Multilingual Cognitive Care Platform")
    print(f" 💻 Platform:   {sys.platform} | Python {sys.version.split()[0]}")
    print(f" 🌐 Access URL: {url}")
    print(f" 🔗 Localhost:  http://localhost:{selected_port}")
    print(" 🛑 Press Ctrl+C to stop the server")
    print("=" * 70)

    if args.open_browser:
        open_browser_delayed(url)

    os.environ["PORT"] = str(selected_port)
    os.environ["HOST"] = str(args.host)

    if args.fastapi:
        try:
            import uvicorn
            from backend.main import app as fastapi_app
            uvicorn.run(fastapi_app, host=args.host, port=selected_port)
        except ImportError:
            print("[-] FastAPI or Uvicorn not installed. Running Flask backend instead...")
            from app import app as flask_app
            flask_app.run(host=args.host, port=selected_port, debug=args.debug)
    else:
        from app import app as flask_app
        flask_app.run(host=args.host, port=selected_port, debug=args.debug)

if __name__ == "__main__":
    main()
