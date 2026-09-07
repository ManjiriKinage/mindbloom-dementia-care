<#
.SYNOPSIS
    MindBloom — Windows PowerShell 1-Click Startup Script
.DESCRIPTION
    Sets up virtual environment, installs dependencies if needed, and starts MindBloom.
#>

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

Write-Host "========================================================================" -ForegroundColor Cyan
Write-Host " 🧠 [MindBloom] Starting Cognitive Platform (PowerShell)" -ForegroundColor Green
Write-Host "========================================================================" -ForegroundColor Cyan

# Detect Python
$PythonCmd = $null
if (Get-Command "py" -ErrorAction SilentlyContinue) {
    $PythonCmd = "py -3"
} elseif (Get-Command "python" -ErrorAction SilentlyContinue) {
    $PythonCmd = "python"
} elseif (Get-Command "python3" -ErrorAction SilentlyContinue) {
    $PythonCmd = "python3"
} else {
    Write-Host "[-] Error: Python is not detected in your PATH." -ForegroundColor Red
    Write-Host "    Download from: https://www.python.org/downloads/" -ForegroundColor Yellow
    Exit 1
}

Write-Host "[+] Detected Python runtime." -ForegroundColor Gray

# Create venv if needed
if (-not (Test-Path ".venv")) {
    Write-Host "[*] Creating virtual environment (.venv)..." -ForegroundColor Yellow
    Invoke-Expression "$PythonCmd -m venv .venv"
}

# Activate venv if exists
if (Test-Path ".venv\Scripts\Activate.ps1") {
    Write-Host "[*] Activating virtual environment..." -ForegroundColor Yellow
    & ".venv\Scripts\Activate.ps1"
    $PythonCmd = "python"
}

# Verify dependencies
Write-Host "[*] Verifying requirements.txt..." -ForegroundColor Gray
Invoke-Expression "$PythonCmd -m pip install -q -r requirements.txt"

# Run MindBloom
Write-Host "[*] Launching application..." -ForegroundColor Green
Invoke-Expression "$PythonCmd run.py $($args -join ' ')"
