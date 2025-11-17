#!/usr/bin/env bash
set -e
# Перевірка що ми в гіті
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Помилка: не в git-репозиторії."
  exit 1
fi

git checkout main
git pull origin main
git checkout -b feature/ci-cd

git add Dockerfile index.html
git commit -m "add ci-cd files"
git push -u origin feature/ci-cd

echo "Гілка feature/ci-cd створена і запушена."
