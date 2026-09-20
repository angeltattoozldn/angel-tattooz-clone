#!/bin/bash
TARGET=$1
if [ -z "$TARGET" ]; then
  echo "Usage: ./crawler-audit.sh <url>"
  exit 1
fi
echo "[INFO] Running bot accessibility audit against $TARGET"
for BOT in "Googlebot" "Bingbot" "Slurp" "DuckDuckBot" "Baiduspider"; do
  STATUS=$(curl -A "$BOT" -o /dev/null -sw "%{http_code}" -m 10 "$TARGET" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  [PASS] $BOT successfully crawled the page (HTTP 200)"
  else
    echo "  [FAIL] $BOT returned HTTP $STATUS"
  fi
done
