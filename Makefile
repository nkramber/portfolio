# Every target is free, and none calls the network.
.DEFAULT_GOAL := help
.PHONY: help ste-check verify

# Every hand-written Markdown file, tracked or new. AGENTS.md is a symlink to
# CLAUDE.md, and the archive holds dated history, so the check skips both.
# The wildcard drops a tracked file that the working tree deleted.
STE_FILES := $(wildcard $(shell git ls-files --cached --others --exclude-standard -- '*.md' ':!:AGENTS.md' ':!:docs/session-handoff-archive.md'))

help: ## List the targets
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-10s %s\n", $$1, $$2}'

ste-check: ## Check every hand-written .md file against the STE rules (D-7)
	@python3 scripts/ste-check.py $(STE_FILES)

verify: ste-check ## Run every check that the verify workflow runs
	@echo "verify: every check passed"
