# natekramber.com: agent instructions

`AGENTS.md` is a symlink to this file (D-9). Edit `CLAUDE.md` alone.

## First action

Read `docs/session-handoff.md` before any other file and before any other tool call. It gives the state of the repository and the next action. Then read the rest of this file.

## Read order

1. `docs/session-handoff.md`: the state and the next action.
2. This file: the tenets, the hard rules, and the maps.
3. `docs/design.md`: the thesis, the guardrails, the roadmap, and the sequence.
4. `docs/decisions.md`: every owner decision, D-1 onward. Cite the D-# id when you apply one.
5. `docs/questions.md`: every open question, OQ-1 onward. File each new question there.
6. `docs/session-handoff-archive.md`: the sessions older than the ten in the handoff. Read it only when the handoff points to it.

## Project

This repository holds the portfolio site of Nate Kramber at `natekramber.com` (D-3). The site is one page with a maximum focus on responsive layout, simple and readable code, and best practices (D-4). Each project shows on a card. One card component and one data entry for each project make a new project easy to add (D-2). Deck Tome and What You Carry are the first two projects.

The repository is public. GoDaddy is the registrar of the domain (D-3). The stack is Astro 7 on Node 22.23.2, with vanilla CSS and zero client JavaScript (D-30 to D-33, D-44). Since 2026-09-14, Firebase Hosting serves the site from the dedicated Google Cloud project `natekramber-prod`, and pull request previews from `natekramber-preview` (D-34, D-35, D-51, D-56, D-86).

## Tenets

The tenets are the constitution of the site. When a tenet conflicts with speed or convenience, the tenet wins. When two tenets conflict, the earlier tenet wins. T-6 is absolute (D-15, D-39).

- **T-1. Responsive first.** Every layout works from a 320 px phone to a wide desktop screen, with touch, a mouse, or a keyboard. No layout scrolls sideways. A change that looks right at one width alone is not done.
- **T-2. Accessible.** The site meets WCAG 2.2 level AA. Every visitor can read and use every part of the site.
- **T-3. Simple and readable code.** Explicit over clever. A new reader understands a file from the file itself. Two concrete uses come before an abstraction.
- **T-4. Fast.** The site stays inside the performance budget of D-37 and D-48. Every dependency and every large asset must earn its bytes.
- **T-5. Document everything.** Continuity is a duty. Each session updates `docs/session-handoff.md`. The decisions, the questions, and the design change when the intent changes.
- **T-6. No attribution.** No commit, branch name, pull request, comment, or code names an agent, a harness, or a model as the source of work (D-6). The site copy can describe how the owner directs AI coding agents (D-26).

## Hard rules from the owner

1. **Write scope.** This repository permits writes. Treat every other repository as read-only (D-1). Read a project repository to describe it, and never change it.
2. **Every change starts on a branch.** Never commit to `main`, and never push to it. Push the branch, and open a pull request. The owner merges. The `main` ruleset refuses a direct push, a force push, and every merge method except squash (D-11).
3. **One concern for each pull request.** A session can open more than one pull request (D-12).
4. **Gitar reviews every pull request.** A pull request of documents alone waits for the review too. Load the `gitar-review` skill after each push. Gitar is the only review this repository asks for (D-5).
5. **Write docs in ASD-STE100.** Load the `ste-writing` skill before you write a `.md` file. The words a visitor reads on the site are exempt (D-7). Run `make ste-check` before you commit a `.md` file.
6. **No attribution.** Tenet T-6 applies. `.claude/settings.json` turns off the co-author trailer and the pull request footer (D-6).
7. **Ask questions when you think of them.** Use `AskUserQuestion` in small batches. Give the options, the tradeoffs, and a recommendation. Record each answer in `docs/decisions.md` with the next D-# id and the date.
8. **Never hesitate to ask or to push back.** When two owner statements conflict, quote both. When a request rests on a wrong premise, say so with the evidence. Silence is the mistake, not the question.
9. **Do the research.** Verify each external fact against a primary source, and record the date. Browser support, web standards, and the terms of each host change.
10. **Keep personal data out.** The repository is public. Write no email, phone number, or street address in a file, an issue, or a pull request. Only a decision can approve one.
11. **Make the handoff simple.** Before you end a session, load the `session-handoff` skill. Update `docs/session-handoff.md`.

## Skills

| Skill | Load it when |
|---|---|
| `ste-writing` | Before you write or edit any `.md` file. |
| `design-doc-style` | Before you edit `docs/design.md`. |
| `gitar-review` | After each push to a pull request. |
| `add-project` | When the owner names a new project for the site. |
| `responsive-qa` | Before you open a pull request that changes the site. |
| `session-handoff` | At the start and at the end of each session. |

## Agents

| Agent | Use it to |
|---|---|
| `project-researcher` | Read a project repository and draft its card entry. |
| `responsive-auditor` | Check the local build at every viewport width. |
| `accessibility-auditor` | Check the local build against WCAG 2.2 level AA. |
| `copy-editor` | Review the words a visitor reads. |

The two auditors use the browser tooling of PR-4: Playwright, axe, and the Chromium build that `make browsers` downloads.

## Rule files

Claude Code loads each file in `.claude/rules/` when the session reads a file that matches its `paths` list (D-17). Other tools do not read that directory. Read the rule file yourself when its paths apply.

| Rule file | Paths |
|---|---|
| `.claude/rules/docs.md` | Every `.md` file |
| `.claude/rules/registers.md` | `docs/decisions.md`, `docs/questions.md`, `docs/design.md` |
| `.claude/rules/github.md` | `.github/**` |
| `.claude/rules/site.md` | `src/**`, `public/**`, `astro.config.mjs`, `package.json` |

## File map

- `docs/design.md`: the design document, with the thesis, the guardrails, the roadmap, and the sequence.
- `docs/decisions.md`: every owner decision, with its date.
- `docs/questions.md`: every open question, and the decision that closed each one.
- `docs/session-handoff.md`: the resume point and the ten newest sessions.
- `docs/session-handoff-archive.md`: every older session, word for word.
- `src/pages/index.astro`: the home page, with the hero, the About section, and the project cards (D-21, D-136). The About section stays off the page until the bio exists (OQ-3, D-94). While the page shows cards, it preloads the mono face (D-111).
- `src/pages/404.astro`: the 404 page, with the words of D-74 (D-98).
- `src/layouts/Page.astro`: the head, the icon links, the design tokens, the base styles, and the motion of both pages (D-73, D-95).
- `public/`: the icon `favicon.svg` (D-96), and the three PNG files of `make images`. `scripts/make-images.mjs` draws the share image of D-97 and two icons.
- `src/content.config.ts`: the `projects` collection and its strict schema (D-22, D-105, D-133). Each project is one JSON file in `src/content/projects/`, for example `deck-tome.json` (D-113 to D-116). An entry can also name a logo and a screenshot, and each image file sits next to it (D-133, D-134).
- `src/components/ProjectCard.astro`: the one project card, with its own scoped styles (D-104, D-133).
- `src/fonts/`: the two Atkinson Hyperlegible WOFF2 files of D-91, each with its SIL Open Font License file.
- `astro.config.mjs`, `package.json`, `package-lock.json`, and `tsconfig.json`: the Astro project.
- `.nvmrc`: the pinned Node version (D-44).
- `tests/`: the Playwright tests of the responsive layout and of accessibility, and the fixtures with planted defects (D-38, D-72). `tests/fixtures/projects/` holds the fixture cards of D-103 with their logo file, and a fixture build loads those cards alone (D-112). `tests/fixtures/projects-invalid/` and `tests/fixtures/projects-unknown/` hold the two entries that the schema must refuse (D-103, D-133).
- `playwright.config.ts`: the Playwright setup. It serves `dist/` with `astro preview` on port 4321. It also builds the fixture cards alone into `dist-fixture/`, and serves that folder on port 4322 (D-103, D-112).
- `scripts/lighthouse-budget.mjs` and `lighthouse-budget.json`: the Lighthouse budget (D-48, D-50, D-60). `scripts/make-lighthouse-fixture.mjs` writes its planted defects.
- `.htmlvalidate.json`: the rules of `html-validate` (D-46).
- `.claude/settings.json`: the project settings of Claude Code. It turns off attribution (D-6).
- `scripts/ste-check.py`: the STE checker (D-7).
- `.github/workflows/verify.yml`: the checks on each pull request, `verify:docs`, `verify:site`, and the four `verify:site-*` jobs.
- `.github/workflows/preview.yml`: the preview deploy of each pull request, its comment, the `verify:site-preview` check, and the channel cleanup (D-59, D-66 to D-68).
- `.github/workflows/deploy.yml`: the live deploy of each push to `main`, in the environment `production` (D-63, D-84).
- `.github/workflows/links.yml`: the weekly check of every outbound link of the live site, and a run by hand (D-130 to D-132).
- `docs/deploy.md`: the one-time setup of Google Cloud, Firebase, the domain, and the request logs, with a run record for each part (D-79, D-82, D-87).
- `docs/analytics.md`: the visit count, the two saved Cloud Logging queries, and the limits of the number (D-36, D-139 to D-141). `scripts/visits.sh` holds the two filters that `make visits` runs.
- `firebase.json`: the Hosting config, with the headers of D-57, D-58, D-75, and D-77.
- `deploy/`: the npm project of the Firebase CLI alone (D-53).
- `scripts/check-preview-headers.mjs`, `playwright.preview.config.ts`, and `tests/preview/`: the header check and the console check of a deployed preview (D-59).
- `.github/dependabot.yml`: the monthly update of the pinned actions and the npm dependencies (D-16).
- `Makefile`: the local commands.
- `LICENSE`: the MIT license of the code. The site text and images are not under it (D-18).

## Commands

Every command is free. Only `make install`, `make browsers`, `make link-check`, and `make visits` use the network. Run each command from the repository root.

- `make install`: install the exact dependencies of `package-lock.json`.
- `make browsers`: download the Chromium build that Playwright and the Lighthouse budget use.
- `make dev`: start the local dev server with live reload.
- `make build`: build the static site into `dist/`.
- `make preview`: serve the built site on this machine.
- `make images`: draw the share image and the two PNG icons into `public/` with the Chromium build of Playwright (D-96, D-97). Run it after a change to the headline, the colors, the text face, or `public/favicon.svg`.
- `make no-script-check`: fail when a built HTML file holds a script element (G-5).
- `make no-inline-style-check`: fail when a built HTML file holds a style element or a style attribute (D-72). Its self-test then proves that the check can fail.
- `make test-responsive`: check both pages at each width of the `responsive-qa` skill for sideways scroll, and save a screenshot of each. It also checks a long word, text at 200 percent, and the text spacing of WCAG 1.4.12. It checks the growth of each fluid text size and the load of each font face too (D-111). Then it checks the hero motion under each motion setting, and the address of the share image and of each icon (D-95 to D-97). It checks the home page at each width with its cards (D-112). It checks the first screen of the home page and the link notes too (D-117, D-119). It also checks the fixture cards of D-103 at each width, the image of each card, and the page that holds no disclosure (D-133, D-134).
- `make test-a11y`: scan both pages with axe for WCAG 2.2 AA, in the light and the dark scheme. It also scans the page structure with the best-practice rules of PR-8, and proves that this scan can fail. Then it scans the fixture cards. It also checks the name of each card link, the name of each tag list, and the alt text of each card image (D-121, D-133).
- `make content-selftest`: build with two planted project entries, one with no pitch and one with a `highlights` field. It proves that the schema fails the build on each one (D-103, D-133).
- `make lighthouse`: check the Lighthouse budget over three runs, then prove that the budget fails on each planted defect.
- `make html-check`: validate the built HTML and check its internal links and anchors, then prove that both tools fail on planted defects.
- `make preview-check PREVIEW_URL=<address>`: compare the headers of a deployed preview with `firebase.json`, and check its console (D-59). Its self-test then proves that the header check can fail.
- `make link-check`: check every outbound link of the live site with `linkinator`, and skip `linkedin.com` (D-130 to D-132). Its self-test then proves that the check fails on a planted dead address. It needs the network.
- `make visits DAY=<YYYY-MM-DD>`: print the page requests of one UTC day, and the same count after the machine filter (D-139 to D-141). It reads the Hosting request log with the gcloud configuration `natekramber`, so it needs the network. No check calls it.
- `make site-checks`: run the four site checks.
- `make ste-check`: check every hand-written `.md` file against the STE rules.
- `make verify`: run every check that the verify workflow runs. Run it before each pull request.
- `make help`: list the targets.

CAUTION: the site needs Node 22.23.2 from `.nvmrc`. The default Node on this Mac is 20.17.0, and `nvm use` does not change a tool shell. Put `~/.nvm/versions/node/v22.23.2/bin` first on the `PATH` in each command that runs Node.

The Makefile sets `ASTRO_TELEMETRY_DISABLED=1`, so Astro sends no usage data (D-45). A direct `npm run` command does not set it, so use the `make` targets.

## Reference repositories

Treat all three as read-only (hard rule 1).

- `/Users/nate/Repos/decktome`: the model for these docs, the review rule, and the Gitar procedure. It is also the source of the Deck Tome card.
- `/Volumes/SSD-1TB/what-you-carry`: the model for the tenets, the registers, and the handoff entries. It is also the source of the What You Carry card.
- `/Users/nate/Repos/terminal-rpg`: a later project. It held no code on 2026-09-12, and the path does not exist on 2026-09-14. Ask the owner where the project lives before you read it.

CAUTION: `/Volumes/SSD-1TB` is an external drive. The path is absent when the owner disconnects the drive. Ask the owner to connect it. Do not guess a project fact.
