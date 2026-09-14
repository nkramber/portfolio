# Every target is free. Only `install` and `browsers` use the network.
.DEFAULT_GOAL := help
.PHONY: help install browsers dev build preview no-script-check no-inline-style-check \
	no-inline-style-selftest ste-check test-responsive test-a11y lighthouse lighthouse-selftest \
	html-check html-selftest preview-check site-checks verify

# Astro sends anonymous usage data unless this variable is set (D-45). Every
# target below runs with it, and so do the CI jobs, because they call make.
export ASTRO_TELEMETRY_DISABLED := 1

# Every hand-written Markdown file, tracked or new. AGENTS.md is a symlink to
# CLAUDE.md, and the archive holds dated history, so the check skips both.
# The wildcard drops a tracked file that the working tree deleted.
STE_FILES := $(wildcard $(shell git ls-files --cached --others --exclude-standard -- '*.md' ':!:AGENTS.md' ':!:docs/session-handoff-archive.md'))

# The Chromium build of Playwright. The Lighthouse budget runs the same
# browser, so one download serves both. Make reads it only in a target that uses it.
CHROME_PATH = $(shell node -e "console.log(require('@playwright/test').chromium.executablePath())")

# Links to other sites belong to the weekly check (PR-12). linkinator serves a
# local directory at 127.0.0.1 and matches this pattern against that address,
# not against the path it prints. So the pattern skips every URL off that server.
EXTERNAL_LINKS := ^(?!https?://(localhost|127\.0\.0\.1|\[::1\]))

# The CSP header of D-57 permits styles from files alone (`style-src 'self'`),
# so a browser blocks every style element and every style attribute. This
# pattern finds both, in any letter case (D-72).
INLINE_STYLE := <style|(^|[[:space:]])style[[:space:]]*=

help: ## List the targets
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-20s %s\n", $$1, $$2}'

install: ## Install the exact dependencies of package-lock.json
	@npm ci

browsers: ## Download the Chromium build that Playwright and the Lighthouse budget use
	@npx playwright install chromium

dev: ## Start the local dev server with live reload
	@npm run dev

build: ## Build the static site into dist/
	@npm run build

preview: ## Serve the built site from dist/ on this machine
	@npm run preview

# The page ships no client JavaScript (D-33, G-5). A build with no dist/
# directory fails here, so the check never passes on nothing.
no-script-check: ## Fail when a built HTML file holds a script element (G-5)
	@test -d dist || { echo "no-script-check: dist/ is absent, run make build first"; exit 1; }
	@if grep -rIl --include='*.html' '<script' dist; then \
		echo "no-script-check: the files above hold a script element (G-5, D-33)"; exit 1; \
	else \
		echo "no-script-check: no script element in dist/"; \
	fi

no-inline-style-check: ## Fail when a built HTML file holds a style element or a style attribute (D-57, D-72)
	@test -d dist || { echo "no-inline-style-check: dist/ is absent, run make build first"; exit 1; }
	@if grep -rIilE --include='*.html' '$(INLINE_STYLE)' dist; then \
		echo "no-inline-style-check: the files above hold inline style, which the CSP of D-57 blocks"; exit 1; \
	else \
		echo "no-inline-style-check: no style element and no style attribute in dist/"; \
	fi
	@$(MAKE) --no-print-directory no-inline-style-selftest

# The planted defects: one fixture with a style element, and one with a style
# attribute. The check must list both files, so a pattern that misses one fails.
no-inline-style-selftest: ## Prove that the inline style check finds each planted defect
	@found=$$(grep -rIilE --include='*.html' '$(INLINE_STYLE)' tests/fixtures/inline-style | sort | tr '\n' ' '); \
	if [ "$$found" = "tests/fixtures/inline-style/style-attribute.html tests/fixtures/inline-style/style-element.html " ]; then \
		echo "no-inline-style-selftest: the check found the planted style element and style attribute"; \
	else \
		echo "no-inline-style-selftest: the check found \"$$found\", not both planted fixtures"; exit 1; \
	fi

test-responsive: ## Check both pages at each responsive-qa width for sideways scroll, with screenshots, then the text, zoom, and font checks (G-1, D-92)
	@npx playwright test tests/responsive.spec.ts

test-a11y: ## Scan both pages with axe for WCAG 2.2 AA, in light and dark (G-8)
	@npx playwright test tests/accessibility.spec.ts

lighthouse: ## Hold the budget of D-37 and D-48 with Lighthouse 13, then prove it can fail (D-50, D-60)
	@test -d dist || { echo "lighthouse: dist/ is absent, run make build first"; exit 1; }
	@CHROME_PATH="$(CHROME_PATH)" node scripts/lighthouse-budget.mjs dist
	@$(MAKE) --no-print-directory lighthouse-selftest

# The planted defects, one fixture site for each: a page with a heavy script,
# and a bad llms.txt. The budget must fail on each, and its output must name the
# broken value, so a crash never counts as a pass.
lighthouse-selftest: ## Prove that the Lighthouse budget fails on each planted defect
	@rm -rf test-results/lighthouse-fixture
	@node scripts/make-lighthouse-fixture.mjs test-results/lighthouse-fixture
	@out=$$(LIGHTHOUSE_RUNS=0 node scripts/lighthouse-budget.mjs test-results/lighthouse-fixture/heavy-script 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -q 'run count'; then \
		echo "lighthouse-selftest: the budget refused a run count of 0, as it must"; \
	else \
		echo "$$out"; echo "lighthouse-selftest: the budget accepted a run count of 0"; exit 1; \
	fi
	@out=$$(CHROME_PATH="$(CHROME_PATH)" LIGHTHOUSE_RUNS=1 node scripts/lighthouse-budget.mjs test-results/lighthouse-fixture/heavy-script 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -qE 'totalBytes: [0-9.]+ is above'; then \
		echo "lighthouse-selftest: the budget failed on the planted heavy script, as it must"; \
	else \
		echo "$$out"; echo "lighthouse-selftest: the budget did not fail on the weight cap"; exit 1; \
	fi
	@out=$$(CHROME_PATH="$(CHROME_PATH)" LIGHTHOUSE_RUNS=1 node scripts/lighthouse-budget.mjs test-results/lighthouse-fixture/bad-llms-txt 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -qE 'agentic-browsing: [0-9.]+ is below [0-9.]+\. Failed audits: .*llms-txt'; then \
		echo "lighthouse-selftest: the budget failed on the planted bad llms.txt, as it must"; \
	else \
		echo "$$out"; echo "lighthouse-selftest: the budget did not fail on the agentic-browsing floor"; exit 1; \
	fi

# linkinator starts at every built HTML file, so it also reads the 404 page,
# which no other page links to (D-71). With --server-root, each location is a
# glob inside that directory (linkinator 8.1.0, build/src/options.js).
html-check: ## Validate the built HTML and check its internal links and anchors (D-46, D-47)
	@test -d dist || { echo "html-check: dist/ is absent, run make build first"; exit 1; }
	@npx html-validate dist
	@npx linkinator '**/*.html' --server-root dist --check-fragments --skip '$(EXTERNAL_LINKS)'
	@$(MAKE) --no-print-directory html-selftest

# The planted defects: a duplicate id and a link to a missing anchor. Each tool
# must fail, and its output must name the defect, so a crash never counts as a pass.
html-selftest: ## Prove that the HTML and link checks fail on planted defects
	@out=$$(npx html-validate tests/fixtures/invalid 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -q 'no-dup-id'; then \
		echo "html-selftest: html-validate caught the planted duplicate id"; \
	else \
		echo "$$out"; echo "html-selftest: html-validate missed the planted duplicate id"; exit 1; \
	fi
	@out=$$(npx linkinator tests/fixtures/invalid --check-fragments --skip '$(EXTERNAL_LINKS)' 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -q 'missing'; then \
		echo "html-selftest: linkinator caught the planted broken anchor"; \
	else \
		echo "$$out"; echo "html-selftest: linkinator missed the planted broken anchor"; exit 1; \
	fi

# The preview checks of D-59 need a deployed preview channel and its address:
# make preview-check PREVIEW_URL=<the preview address>. The planted firebase.json
# expects a wrong value, so the header check must fail on that header (G-3).
preview-check: ## Compare the headers of a deployed preview with firebase.json, and check its console (D-59)
	@test -n "$(PREVIEW_URL)" || { echo "preview-check: set PREVIEW_URL to the preview address"; exit 1; }
	@node scripts/check-preview-headers.mjs "$(PREVIEW_URL)"
	@PREVIEW_URL="$(PREVIEW_URL)" npx playwright test --config playwright.preview.config.ts
	@out=$$(node scripts/check-preview-headers.mjs "$(PREVIEW_URL)" tests/fixtures/firebase-wrong-header.json 2>&1); rc=$$?; \
	if [ $$rc -ne 0 ] && echo "$$out" | grep -q 'x-content-type-options is'; then \
		echo "preview-check: the header check caught the planted wrong header"; \
	else \
		echo "$$out"; echo "preview-check: the header check missed the planted wrong header"; exit 1; \
	fi

site-checks: test-responsive test-a11y lighthouse html-check ## Run the four site checks of D-38 on the built site

ste-check: ## Check every hand-written .md file against the STE rules (D-7)
	@python3 scripts/ste-check.py $(STE_FILES)

verify: ste-check build no-script-check no-inline-style-check site-checks ## Run every check that the verify workflow runs
	@echo "verify: every check passed"
