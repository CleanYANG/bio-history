#!/usr/bin/env bash

set -euo pipefail

WINDOWS_NODE="/mnt/c/Program Files/nodejs/node.exe"

if grep -qi microsoft /proc/version 2>/dev/null && [ -x "$WINDOWS_NODE" ]; then
  PROJECT_DIR="$(pwd)"
  NEXT_BIN_WINDOWS="$(wslpath -w "$PROJECT_DIR/node_modules/next/dist/bin/next")"
  exec "$WINDOWS_NODE" "$NEXT_BIN_WINDOWS" "$@"
fi

exec ./node_modules/.bin/next "$@"
