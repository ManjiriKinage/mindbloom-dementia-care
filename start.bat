@echo off
REM ==============================================================================
REM MindBloom — Windows 1-Click Startup Script (Command Prompt / Batch)
REM ==============================================================================

cd /d "%~dp0"
title MindBloom Cognitive Platform

echo ========================================================================
echo  [MindBloom] Starting Cognitive Platform on Windows...
echo ========================================================================

REM Find Python executable
where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set PYTHON_CMD=py -3
    goto :FOUND_PYTHON
)

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set PYTHON_CMD=python
    goto :FOUND_PYTHON
)

echo [-] Error: Python is not installed or not in your Windows PATH.
echo     Please download Python from https://www.python.org/downloads/
echo     (Make sure to check 'Add python.exe to PATH' during installation)
pause
exit /b 1

:FOUND_PYTHON
echo [+] Using: %PYTHON_CMD%

REM Setup virtual environment if missing
if not exist ".venv" (
    echo [*] Creating virtual environment (.venv)...
    %PYTHON_CMD% -m venv .venv
)

if exist ".venv\Scripts\activate.bat" (
    echo [*] Activating virtual environment...
    call .venv\Scripts\activate.bat
    set PYTHON_CMD=python
)

REM Check and install requirements
echo [*] Verifying dependencies from requirements.txt...
%PYTHON_CMD% -m pip install -q -r requirements.txt

REM Launch application
echo [*] Launching MindBloom...
%PYTHON_CMD% run.py %*

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [-] Application stopped with an error code: %ERRORLEVEL%
    pause
)
