#!/bin/sh
# Count the page requests of one day in the Hosting request log (D-36, D-139).
#
# The site ships no script and sets no cookie (D-33, G-5), so the log of the
# host is the only record of a visit. M-2 linked that log to Cloud Logging
# (D-87, D-88). This script prints two numbers for one day:
#
#   page requests             every 200 answer for a page address
#   after the machine filter  the same, less each self-declared machine
#
# Neither number counts people. A bot that copies a browser agent stays in
# both. Read the second number as an upper bound (D-139).
set -eu

DAY=${1:-}
if [ -z "$DAY" ]; then
	echo "visits: give a day as YYYY-MM-DD" >&2
	exit 1
fi

# The log keeps 30 days in the _Default bucket, so an older day reads 0.
PROJECT=natekramber-prod
CONFIG=natekramber
LIMIT=10000

DAY_RANGE="timestamp>=\"${DAY}T00:00:00Z\" AND timestamp<=\"${DAY}T23:59:59.999999999Z\""

# A page address is every address that is not an asset. The pattern needs no
# edit when the site gains a page.
PAGES='logName="projects/natekramber-prod/logs/firebasehosting.googleapis.com%2Fwebrequests"
httpRequest.status=200
httpRequest.requestUrl!~"/_astro/"
httpRequest.requestUrl!~"[.](png|svg|woff2|ico|txt|xml|json|webmanifest)($|[?])"'

# Each agent that names itself a machine: the checks of this repository
# (`node` from link-check, `HeadlessChrome` from Lighthouse), the checks of the
# host (`Google-Firebase`), and each self-declared bot.
MACHINES='httpRequest.userAgent!="node"
httpRequest.userAgent!="Google-Firebase"
httpRequest.userAgent!~"HeadlessChrome"
httpRequest.userAgent!~"^curl/"
httpRequest.userAgent!~"^Go-http-client"
httpRequest.userAgent!~"(?i)(bot|crawler|spider|scanner|checker|siteradar)"'

count() {
	n=$(gcloud --configuration="$CONFIG" logging read "$1" \
		--project "$PROJECT" --limit "$LIMIT" --format='value(insertId)' | wc -l)
	n=$(echo "$n" | tr -d ' ')
	if [ "$n" -ge "$LIMIT" ]; then
		echo "visits: the read hit the limit of $LIMIT, so the count is short" >&2
		exit 1
	fi
	echo "$n"
}

raw=$(count "$PAGES
$DAY_RANGE")
filtered=$(count "$PAGES
$MACHINES
$DAY_RANGE")

echo "$DAY (UTC)"
echo "  page requests             $raw"
echo "  after the machine filter  $filtered"
