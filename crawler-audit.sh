#!/bin/bash
DOMAIN="${1:-https://www.angeltattooz.co.uk}"

URLS=(
  "/"
  "/best-tattoo-cover-up-studio-london/"
  "/best-first-tattoo-studio-london-southgate/"
  "/tattoo-studio-potters-bar-hatfield/"
  "/tattoo-artists-welwyn-garden-city/"
  "/services/cover-up-tattoos/"
  "/services/first-tattoo-guide/"
  "/services/custom-tattoo-design/"
  "/services/black-gray-tattoos/"
  "/areas/cockfosters/"
  "/areas/barnet/"
  "/areas/southgate/"
  "/areas/enfield/"
  "/areas/potters-bar/"
  "/bookings/"
  "/llms.txt"
  "/robots.txt"
  "/sitemap.xml"
)

BOTS=(
  "Googlebot:Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  "Bingbot:Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
  "OAI-SearchBot:Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)"
  "PerplexityBot:Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)"
)

echo "========================================================"
echo "ANGEL TATTOOZ PRODUCTION AI CRAWLER AUDIT"
echo "Target Domain: $DOMAIN"
echo "Timestamp: $(date -u)"
echo "========================================================"

FAILED_COUNT=0
TOTAL_TESTS=0

for bot in "${BOTS[@]}"; do
  BOT_NAME="${bot%%:*}"
  BOT_UA="${bot#*:}"
  echo ""
  echo ">>> Testing User-Agent: $BOT_NAME"
  for url in "${URLS[@]}"; do
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    FULL_URL="$DOMAIN$url"
    HTTP_STATUS=$(curl -s -L -o /dev/null -w "%{http_code}" -A "$BOT_UA" "$FULL_URL")
    if [ "$HTTP_STATUS" -eq 200 ]; then
      echo "  [200 OK] $FULL_URL"
    else
      echo "  [$HTTP_STATUS FAILED] $FULL_URL"
      FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
  done
done

echo ""
echo "--------------------------------------------------------"
echo "Audit Complete: $((TOTAL_TESTS - FAILED_COUNT))/$TOTAL_TESTS Passed (200 OK)."
if [ "$FAILED_COUNT" -eq 0 ]; then
  echo "STATUS: 100% CRAWLER ACCESSIBLE. ZERO EDGE OR WAF BLOCKS."
  exit 0
else
  echo "WARNING: $FAILED_COUNT request(s) returned non-200 status codes."
  exit 1
fi
