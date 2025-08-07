@echo off
cd /d "C:\Users\nandh\Desktop\IMP\projs\practice\notes"
git add .
git diff --cached --quiet || git commit -m "auto-commit at %DATE% %TIME%"
git push origin main