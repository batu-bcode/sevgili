#!/bin/bash

# Auto Git Push Script
# Dosya kaydedildikçe 10 saniyede bir değişiklikleri kontrol eder

while true; do
  # Eğer değişiklik varsa commit ve push
  if ! git diff --quiet || ! git diff --cached --quiet; then
    git add .
    git commit -m "Auto update $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "Changes pushed at $(date)"
  fi
  sleep 10
done
