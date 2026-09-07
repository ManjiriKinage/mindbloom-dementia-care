#!/usr/bin/env bash
# ==============================================================================
# MindBloom — Linux / macOS / Unix 1-Click Startup Script
# ==============================================================================

set -e

# Change to script directory regardless of where it is invoked from
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "========================================================================"
echo " 🧠 Starting MindBloom Platform (Linux / macOS / WSL)"
echo "========================================================================"

# Detect available Python 3 command
if command -v python3 &>/dev/null; then
    PYTHON_CMD="python3"
elif command -v python &>/dev/null; then
    PYTHON_CMD="python"
else
    echo "[-] Error: Python 3 is not installed or not in your PATH."
    echo "    Please install Python 3.8 or higher from https://python.org"
    exit 1
fi

echo "[+] Detected Python: $($PYTHON_CMD --version)"

# Create virtual environment if not already present
if [ ! -d ".venv" ]; then
    echo "[*] Creating virtual environment (.venv)..."
    $PYTHON_CMD -m venv .venv || {
        echo "[!] Notice: venv module not found. Proceeding with system python..."
    }
fi

# Activate virtual environment if available
if [ -f ".venv/bin/activate" ]; then
    echo "[*] Activating virtual environment..."
    source .venv/bin/activate
    PYTHON_CMD="python"
fi

# Install / update dependencies
echo "[*] Verifying dependencies from requirements.txt..."
$PYTHON_CMD -m pip install -q -r requirements.txt || {
    echo "[!] Pip install failed. Attempting to run with available packages..."
}

# Run the universal launcher with automatic port conflict handling
echo "[*] Launching server..."
exec $PYTHON_CMD run.py "$@"
