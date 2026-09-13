# Decisions

Status: active register. Owner: Nate Kramber. Started 2026-09-12. Written in ASD-STE100.

This file records each owner decision. Each decision has an id (D-#). The numbers never change. A changed decision stays in this file, and its Effect column names the later decision. `.claude/rules/registers.md` holds the rules of this file.

How to read this file:

- The Decision column gives the answer.
- The Effect column gives what the decision changes, binds, or supersedes.
- A date in the Effect column marks a later revision.

## Project

| Id | Date | Topic | Decision | Effect |
|---|---|---|---|---|
| D-1 | 2026-09-12 | Reference repositories | Use decktome and What You Carry as the model for `CLAUDE.md`, skills, agents, rules, and the other docs. A separate Codex review after a code pull request is not a rule here. Follow decktome for review. | The rules that both repositories share apply here: a branch for each change, the owner merges, ask questions at once, push back with evidence, other repositories read-only, and a date on each external fact. |
| D-2 | 2026-09-12 | First projects | Deck Tome and What You Carry are the first projects. The project cards are reusable, so a new project such as terminal-rpg is easy to add. | One card component and one data entry for each project (G-2). The `add-project` skill holds the procedure. |
| D-3 | 2026-09-12 | Domain | The owner bought `natekramber.com`. GoDaddy is the registrar. | DNS starts at GoDaddy. The hosting question (OQ-2) reads this. |
| D-4 | 2026-09-12 | Site shape | A single-page layout on current design trends. A maximum focus on responsive layout, simple and readable code, and best practices. | Sets tenets T-1 and T-3. The roadmap questions set the details. |

## Repository and process

| Id | Date | Topic | Decision | Effect |
|---|---|---|---|---|
| D-5 | 2026-09-12 | Review | Gitar is the only reviewer. Every pull request waits for its review, documents alone included. When Gitar pauses automatic reviews and posts no review, comment `Gitar review` on the pull request. The owner states that the Gitar app covers every repository of the owner. | Hard rule 4 and the `gitar-review` skill. |
| D-6 | 2026-09-12 | Attribution | No AI attribution in any file, commit, pull request, branch name, or comment. | Tenet T-6 and hard rule 6. `.claude/settings.json` sets both attribution strings empty. Revised in part by D-26 on 2026-09-12: the site copy can describe the AI workflow. The rest stands. |
| D-7 | 2026-09-12 | Writing standard | ASD-STE100 for every doc, skill, agent, and rule file, with a checker. The words a visitor reads on the site are exempt. | Hard rule 5, the `ste-writing` skill, `scripts/ste-check.py`, and the `verify:docs` job. |
| D-8 | 2026-09-12 | Session handoff | The hybrid format: a "Resume here" block, then numbered session entries in six parts. The file keeps the ten newest entries, and the archive keeps the rest. | The `session-handoff` skill. |
| D-9 | 2026-09-12 | Agent file | `AGENTS.md` is a symlink to `CLAUDE.md`. | One source of truth. Edit `CLAUDE.md` alone. |
| D-10 | 2026-09-12 | Planning docs | The trimmed design template: status, thesis, tenets, guardrails, roadmap, and sequence in `docs/design.md`. Decisions in `docs/decisions.md`, questions in `docs/questions.md`. Lessons, findings, and a cost model join when an entry fills them. | The `design-doc-style` skill. |
| D-11 | 2026-09-12 | Git guards | Squash merge alone, automatic delete of a merged branch, and a `main` ruleset that requires a pull request and refuses a force push and a delete. Each required check joins the ruleset after its first run. The owner did not choose a pre-commit hook, a `where` script, commit prefixes, or a pull request template. | GitHub settings changed 2026-09-12. Ruleset `main`, id 23087504. `verify:docs` joined the ruleset as a required check on 2026-09-12, after the merge of PR #1. `verify:site` joined it on 2026-09-13 UTC, after the merge of PR #3. The four `verify:site-*` checks joined it on 2026-09-13 UTC, after the merge of PR #4. |
| D-12 | 2026-09-12 | Pull requests per session | One concern per pull request. No limit per session. | Hard rule 3. |
| D-13 | 2026-09-12 | Skills | `ste-writing`, `design-doc-style`, `gitar-review`, `add-project`, `responsive-qa`, and `session-handoff`. | `.claude/skills/`. |
| D-14 | 2026-09-12 | Agents | `project-researcher`, `responsive-auditor`, `accessibility-auditor`, and `copy-editor`. | `.claude/agents/`. |
| D-15 | 2026-09-12 | Rule style | Ranked tenets and numbered hard rules. The owner sets the order and the words of the tenets in the roadmap questions. | `CLAUDE.md`. OQ-1. D-39 sets the order. |
| D-16 | 2026-09-12 | Upkeep | Dependabot opens one grouped pull request for each ecosystem each month. Every action pins a commit SHA. One local command runs every check. A weekly workflow checks every outbound link. | `.github/dependabot.yml` and `make verify`. The link check arrives with the site, because the site holds the links. |
| D-17 | 2026-09-12 | Rule location | `CLAUDE.md` holds the tenets, the hard rules, and the read order. Rules for one area live in `.claude/rules/`, scoped by path. | `CLAUDE.md` lists each rule file. |
| D-18 | 2026-09-12 | License | MIT for the code. The site text, photos, and images stay all rights reserved. | `LICENSE` and the License section of `README.md`. |

## Site

| Id | Date | Topic | Decision | Effect |
|---|---|---|---|---|
| D-19 | 2026-09-12 | Site goal | Personal brand and projects. The site is for peers and the curious. It leads with who the owner is and what the owner makes, with no hard sell. | Sets the order of the page: hero, About, projects, and links. |
| D-20 | 2026-09-12 | Visitor action | Links to GitHub (`github.com/nkramber`) and LinkedIn (`linkedin.com/in/nate-kramber`). No other social profile, and no email on the page. | The hero and the links section. A profile URL is not personal data under hard rule 10. |
| D-21 | 2026-09-12 | Sections | Hero, About, Projects, and Links. The owner did not choose an experience timeline, a skills list, or a resume download. | The page structure in `docs/design.md`. |
| D-22 | 2026-09-12 | Card fields | Every card has a title, a one-line pitch, links, a status badge, stack tags, highlights, and one screenshot. The owner did not choose a year field. | The project schema (G-2). A missing field fails the build (D-30). |
| D-23 | 2026-09-12 | Card behavior | A card expands in place with a native disclosure element. An order number in each entry, set by the owner, sorts the cards. | No dialog, and no client JavaScript for the cards (D-33). |
| D-24 | 2026-09-12 | Deck Tome card | The card name is "Deck Tome", two words. The owner chose it over decktome D-556, which names the product "Decktome". The card links to `decktome.com` and the public repository, with an "Invite only" label. | D-2 stands. decktome D-310 keeps the app invite-only (read 2026-09-12). |
| D-25 | 2026-09-12 | What You Carry card | The public visibility of the repository is intended, and the card links to it. The card does not mention Steam or any release plan. | What You Carry D-106 still reads "Private until launch" (read 2026-09-12). The owner records the change in that repository. |
| D-26 | 2026-09-12 | AI workflow on the site | The site copy describes openly how the owner directs AI coding agents. | Revises D-6 in part: the no-attribution rule covers commits, pull requests, branch names, comments, and code. Tenet T-6 changes to match. |
| D-27 | 2026-09-12 | Visual direction | An editorial minimal layout: an oversized headline, whitespace, and one column of project rows. The color scheme follows the system setting, with no toggle. A sans for text and a monospace for tags, badges, and labels, both self-hosted. Subtle CSS motion that stops under reduced motion. | The page shell and the design tokens. |
| D-28 | 2026-09-12 | Voice and About | A plain and direct voice: short sentences, concrete verbs, first person, and no buzzwords. The owner writes the bio. The About section has no image. | The `copy-editor` agent applies the voice. OQ-3 tracks the bio. |
| D-29 | 2026-09-12 | Headline | Draft B: "I design the systems. AI agents write the code. I decide what ships." The second line: "Tools and games, built under strict rules and real review." | The hero. It applies D-26. |
| D-30 | 2026-09-12 | Stack | Astro 7 static output. A content collection with a schema holds the project entries, and the Astro image components serve the screenshots. | Astro 7 needs Node 22.12 or newer (read 2026-09-12). The stack pull request pins the Node version. D-44 pins Node 22.23.2. |
| D-31 | 2026-09-12 | CSS | Modern vanilla CSS with custom properties as design tokens, native nesting, container queries, and `:has()`. | No CSS dependency. |
| D-32 | 2026-09-12 | Browser support | Every essential feature is Baseline Widely available. A Baseline Newly available feature adds polish alone, with a fallback. A Baseline Limited feature stays out. | A guardrail in `docs/design.md`. |
| D-33 | 2026-09-12 | JavaScript | Zero client JavaScript by default. Each script needs its own decision that names its purpose. | A guardrail in `docs/design.md`. D-36 needs no script. |
| D-34 | 2026-09-12 | Hosting | Firebase Hosting (classic) in a new, dedicated Google Cloud project on the Spark plan, with no billing account. | Closes OQ-2. DNS stays at GoDaddy with a TXT record and an A record. M-2 checks the log link on Spark. |
| D-35 | 2026-09-12 | Deploy | Each merge to `main` deploys from GitHub Actions through Workload Identity Federation, with no key. Only `main` reaches production. A pull request gets a preview only if a keyless preview deploy works. | M-1 tests the keyless preview. If it fails, the owner decides. |
| D-36 | 2026-09-12 | Analytics | Visit counts come from the Hosting request logs in Cloud Logging. No script and no cookies. | Keeps D-33. M-2 checks the log link. |
| D-37 | 2026-09-12 | Performance budget | Core Web Vitals "good" (LCP 2.5 s, INP 200 ms, CLS 0.1, at the 75th percentile), Lighthouse 95 or more in every category on mobile, 0 KB of client JavaScript, and a first-load weight cap that the stack pull request sets. CI enforces the budget. | Tenet T-4. The web.dev thresholds were read 2026-09-12. D-48 sets the weight cap. |
| D-38 | 2026-09-12 | Site checks | Every pull request that changes the site passes four checks: Playwright responsive tests at every `responsive-qa` width, an axe scan with the cards closed and open, Lighthouse CI against D-37, and HTML validation with an internal link check. | Each check joins the `main` ruleset after its first green run (D-11). Revised in part by D-50 on 2026-09-12: a Lighthouse 13 script replaces Lighthouse CI. The other three checks stand. |
| D-39 | 2026-09-12 | Tenet order | Keep the draft order: T-1 Responsive first, T-2 Accessible, T-3 Simple and readable code, T-4 Fast, T-5 Document everything. T-6 stays absolute. | Closes OQ-1. |
| D-40 | 2026-09-12 | Launch | A placeholder page goes live as soon as the stack exists. No launch deadline. The cards launch with designed placeholder images, and real screenshots replace them later. | OQ-4 tracks the screenshots. |
| D-41 | 2026-09-12 | Defaults | Keep the defaults of the session: npm as the package manager, `natekramber.com` as the main address with `www` redirected to it, security headers in `firebase.json`, a social preview image and a meta description, a custom 404 page, the Wizards of the Coast fan content line when a screenshot shows card art, and a placeholder page with the headline and the two links. | PR-3, PR-5, PR-6, PR-8, and PR-10 in `docs/design.md`. |
| D-42 | 2026-09-12 | Fonts and accent color | The owner picks the fonts and the accent color from a rendered preview page: three font pairings and three accent colors, in light and dark, at phone and desktop widths. | PR-7. OQ-5 holds the pick. |
| D-43 | 2026-09-12 | Card order | Deck Tome is the first card, and What You Carry is the second. | The order numbers of PR-10 and PR-11. |
| D-44 | 2026-09-12 | Node version | Pin Node 22.23.2, the newest Node 22 LTS release, in `.nvmrc`. The owner chose it over Node 24 LTS. | PR-3. Astro 7.3.2 needs Node 22.12.0 or newer. Node 22 entered maintenance on 2025-10-21 and reaches its end of life on 2027-04-30, so a bump must come before that date (nodejs/Release schedule, read 2026-09-12). |
| D-45 | 2026-09-12 | Astro telemetry | Turn off the anonymous usage data of Astro for this repository. | The Makefile exports `ASTRO_TELEMETRY_DISABLED=1`, and CI runs every Astro command through `make`. Astro documents the variable at https://astro.build/telemetry/ (read 2026-09-12). The first local build and preview of PR-3 ran before this decision, with telemetry on. |
| D-46 | 2026-09-12 | HTML validator | `html-validate` (11.15.0 on 2026-09-12) checks the built HTML. It runs offline in JavaScript on Node 22, with no Java. | PR-4. The owner chose it over the Nu Html Checker, which needs Java 17. |
| D-47 | 2026-09-12 | Link checker | `linkinator` (8.1.0 on 2026-09-12) checks the internal links and the `#` anchors of the built site. | PR-4. PR-12 can use the same tool for the outbound links. |
| D-48 | 2026-09-12 | Page weight cap | The first mobile load stays at or under 300 KB (300,000 bytes), as the Lighthouse resource summary counts it. | Completes D-37. Chrome's docs advise a total under 1,600 KiB (read 2026-09-12). |
| D-49 | 2026-09-12 | Lighthouse runner | Keep Lighthouse CI (`@lhci/cli` 0.15.1) with the median of 3 runs. Its latest release came out on 2025-06-25, and it runs Lighthouse 12.6.1 while Lighthouse 13.4.1 is current (npm registry, read 2026-09-12). | PR-4. A later decision can move to Lighthouse 13 if Lighthouse CI falls further behind. Superseded by D-50 on 2026-09-12. |
| D-50 | 2026-09-12 | Lighthouse runner, revised | Remove Lighthouse CI. A short script runs Lighthouse 13.4.1 three times on mobile, takes the median, and checks the budget of D-37 and D-48. | Supersedes D-49. The install of Lighthouse CI 0.15.1 added 12 npm audit advisories (7 high), all from its own dependency tree. Lighthouse 13.4.1 alone audits with 0 advisories and supports Node 22.23.2 (npm registry and npm audit, read 2026-09-12). |
| D-51 | 2026-09-12 | Google Cloud project id | The project id of the site is `natekramber-prod`. | PR-5. A project id is global and permanent. If the id is taken, the owner picks another. Closes OQ-6. |
| D-52 | 2026-09-12 | Google account | The account that owns decktome-prod also owns `natekramber-prod`. PR-5 creates a gcloud configuration named `natekramber` for that account and project. | PR-5. The configuration keeps a command off decktome-prod and off every other project (decktome handoff, 2026-09-10). The account address stays out of the repository (hard rule 10). Closes OQ-7. |
