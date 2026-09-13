# Every target is free. Only `install` calls the network.
.DEFAULT_GOAL := help
.PHONY: help install dev build preview no-script-check ste-check verify

# Astro sends anonymous usage data unless this variable is set (D-45). Every
# target below runs with it, and so do the CI jobs, because they call make.
export ASTRO_TELEMETRY_DISABLED := 1

# Every hand-written Markdown file, tracked or new. AGENTS.md is a symlink to
# CLAUDE.md, and the archive holds dated history, so the check skips both.
# The wildcard drops a tracked file that the working tree deleted.
STE_FILES := $(wildcard $(shell git ls-files --cached --others --exclude-standard -- '*.md' ':!:AGENTS.md' ':!:docs/session-handoff-archive.md'))

help: ## List the targets
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-16s %s\n", $$1, $$2}'

install: ## Install the exact dependencies of package-lock.json
	@npm ci

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

ste-check: ## Check every hand-written .md file against the STE rules (D-7)
	@python3 scripts/ste-check.py $(STE_FILES)

verify: ste-check build no-script-check ## Run every check that the verify workflow runs
	@echo "verify: every check passed"
