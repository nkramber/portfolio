# natekramber.com

This repository holds the source of the portfolio site of Nate Kramber. The site is one page, and each project shows on a reusable card.

`docs/session-handoff.md` gives the current state, and `docs/design.md` gives the plan.

## Set up

1. Install Node 22.23.2, the version in `.nvmrc`, and Python 3.
2. Run `make install` to install the exact dependencies.
3. Run `make browsers` to download the Chromium build of the checks.
4. Run `make verify` to build the site and run every check.

## Work in this repository

- Read `CLAUDE.md` first. It holds the tenets, the rules, and the read order.
- Run `make verify` before you open a pull request.
- The owner merges every pull request.

## License

The MIT license in `LICENSE` covers the source code. It does not cover the text, photos, screenshots, or logos of the site. Those stay © 2026 Nate Kramber, all rights reserved.
