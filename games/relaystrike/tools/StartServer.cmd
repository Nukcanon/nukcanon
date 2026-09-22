@echo off
cd /d "%~dp0"
RelayStrike.exe --headless -- --server --auto-start
pause
