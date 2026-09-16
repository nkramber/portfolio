# Analytics

The site ships no script and sets no cookie (D-33, G-5). The request log of Firebase Hosting is the only record of a visit (D-36). M-2 linked that log to Cloud Logging on 2026-09-14 (D-87, D-88).

This file gives the count method, the two saved queries, and the limits of the number.

## What the count means

The log holds one entry for each request that the site answered. It names the address, the status, the referrer, the agent, and the country. It cannot name a person.

The count comes in two numbers (D-139):

- **Page requests.** Each 200 answer for a page address. The count drops the assets: the CSS files, the font files, and the images.
- **After the machine filter.** The same requests, less each agent that names itself a machine.

The machine filter drops four groups:

- The checks of this repository. `make link-check` sends the agent `node`, and `make lighthouse` sends `HeadlessChrome`.
- The checks of the host, with the agent `Google-Firebase`.
- The plain tools `curl` and `Go-http-client`.
- Each agent that names itself a bot, a crawler, a spider, a scanner, or a checker.

CAUTION: neither number counts people. A bot that copies a browser agent stays in both numbers. Read the second number as an upper bound, not as a visitor count.

The day of a count is a UTC day, because the log stamps each entry in UTC.

## The command

```sh
make visits DAY=2026-09-15
```

The output gives the two numbers:

```text
2026-09-15 (UTC)
  page requests             155
  after the machine filter  125
```

The command reads the cloud project, so it needs the network and the gcloud configuration `natekramber`. No check calls it. `scripts/visits.sh` holds the two filters, and `make visits` passes the day to it.

## The saved queries

The project `natekramber-prod` holds the same two filters as saved queries (D-140). Open the Logs Explorer of that project, and select "Saved queries".

| Query id | Title |
|---|---|
| `visits-page-requests` | Visits: page requests |
| `visits-after-machine-filter` | Visits: page requests after the machine filter |

A saved query holds no time range. Select the day in the time range control of the Logs Explorer.

Both queries have the visibility `SHARED`, so each member of the project can read them. The session created them at 13:42 UTC on 2026-09-16 with the Logging API:

```sh
TOKEN=$(gcloud --configuration=natekramber auth print-access-token)
PARENT=https://logging.googleapis.com/v2/projects/natekramber-prod/locations/global/savedQueries
curl -X POST -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: natekramber-prod" \
  -H "Content-Type: application/json" "$PARENT?savedQueryId=visits-page-requests" --data @body.json
```

A change to a filter in `scripts/visits.sh` needs the same change in the saved query. A PATCH call to the resource name of the query makes that change.

## The filters

The page filter selects each 200 answer for a page address:

```text
logName="projects/natekramber-prod/logs/firebasehosting.googleapis.com%2Fwebrequests"
httpRequest.status=200
httpRequest.requestUrl!~"/_astro/"
httpRequest.requestUrl!~"[.](png|svg|woff2|ico|txt|xml|json|webmanifest)($|[?])"
```

The filter names the assets that the count drops. It does not name the pages, so it needs no edit when the site gains a page.

The machine filter adds six lines:

```text
httpRequest.userAgent!="node"
httpRequest.userAgent!="Google-Firebase"
httpRequest.userAgent!~"HeadlessChrome"
httpRequest.userAgent!~"^curl/"
httpRequest.userAgent!~"^Go-http-client"
httpRequest.userAgent!~"(?i)(bot|crawler|spider|scanner|checker|siteradar)"
```

Cloud Logging reads `=~` and `!~` as RE2 patterns, and `(?i)` makes a pattern ignore letter case.

## What the log showed on 2026-09-15

The session read one full day to design the filters. The day gave these numbers:

| Layer | Requests |
|---|---|
| Every entry | 901 |
| A 404 answer | 580 |
| A 200 answer for a page address | 155 |
| Of those, a self-declared machine | 30 |
| Of those, one agent of 2019 with a false referrer | 35 |

Two facts come out of that day:

- Most traffic is a scan. The 404 answers went to addresses such as `/wp-admin/install.php`, `/.env`, and `/.git/HEAD`. The site is static, so each scan got a 404 and found nothing.
- No referrer is real yet. Each referrer named this same site, or a spam address. A real inbound link shows as a different address.

## Limits

- The `_Default` log bucket keeps 30 days. A count of an older day reads 0.
- The free allotment of Cloud Logging is 50 GiB for each project each month, and the default retention costs nothing. Source: https://cloud.google.com/products/observability/pricing, read 2026-09-16. The site writes about 900 entries each day, so the use stays far below the allotment.
- The project has no billing account, so Google can charge nothing.
- The log holds the full IP address of each request for 30 days (D-88). Do not copy an IP address into this repository (hard rule 10).
