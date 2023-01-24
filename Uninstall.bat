@echo off
Title Uninstall
del images\logo16.png
del images\logo32.png
del images\logo48.png
del images\logo128.png
del background.js
del button.css
del manifest.json
del options.js
del options.html
del popup.html
del popup.js
cls
echo Uninstalled!!
echo Press any key to close this window.
pause>nul
del Uninstall.bat
exit