# natekramber.com design

Status: **draft 1.** The owner approves draft 1 with the merge of PR-2. No site pull request starts before that merge. Written 2026-09-12 in ASD-STE100.

Draft 1 applies the roadmap answers D-19 to D-43. It supersedes draft 0, which held Phase 0 alone.

2026-09-12 correction pass: PR-4 follows D-46 to D-50. A Lighthouse 13 script replaces Lighthouse CI, and the fixtures plant a heavy script and a duplicate id.
2026-09-12 correction pass (Session 5): PR-1 to PR-4 read merged, and PR-5 names the project and the account of D-51 and D-52.
2026-09-12 correction pass (Session 6): PR-5 and M-1 follow D-53, D-54, D-56 to D-59, D-62, and D-66 to D-68. PR-6 follows D-63. PR-14 applies D-60, and PR-15 applies D-57, D-64, and D-65. The external facts add the research of PR-5.
2026-09-13 correction pass (Session 6): PR-14 no longer waits for a move of the repository (D-69).
2026-09-13 correction pass (Session 6): PR-16 keeps the preview server of the checks in the foreground (D-70), and it comes before PR-14.
2026-09-13 correction pass (Session 7): PR-14 and PR-16 read merged, and PR-15 follows D-71 to D-74.
2026-09-14 correction pass (Sessions 8 and 9): PR-15 and PR-5 read merged, PR-5 follows D-75 to D-81, and M-1 passed (D-80). The external facts add the research of PR-5 and the result of the setup run. The gate of PR-5 marks its ruleset order refuted, because the check joined the ruleset before the merge (D-81).
2026-09-14 correction pass (Session 10): PR-6 follows D-82 to D-85. The session creates the environment and the custom domains, and the owner makes two DNS visits. The external facts add the research of PR-6.
2026-09-14 correction pass (Session 11): PR-6 reads merged, and D-86 records the second DNS visit.
2026-09-14 correction pass (Session 12): M-2 passed (D-88), with the log link of D-87. PR-13 no longer waits for M-2, and the external facts add the research of M-2.
2026-09-14 correction pass (Session 13): PR-7 follows D-89 to D-92, and D-91 closes OQ-5. The external facts add the research of PR-7.
2026-09-14 correction pass (Session 14): PR-7 reads merged, and the Phase 1 gate reads passed. Section 6 closes OQ-5, and D-93 sets how the owner gets a preview address.
2026-09-14 correction pass (Session 15): PR-8 follows D-94 to D-102. The external facts add the research of PR-8.
2026-09-14 correction pass (Session 16): PR-8 reads merged, and the Phase 2 gate reads passed.
2026-09-14 correction pass (Session 17): PR-9 reads merged. PR-10 follows D-111 to D-119, and D-112 changes the fixture build of PR-9. The external facts add the research of PR-10.
2026-09-14 correction pass (Session 18): PR-10 reads merged. The external facts add the `GROUPED` certificates of both custom domains.
2026-09-15 correction pass (Session 19): PR-11 follows D-121 to D-128. D-121 and D-122 add the project name to the screen reader name of each card link, and D-128 limits D-117 to portrait screens. The external facts add the research of PR-11.
2026-09-16 correction pass (Session 20): PR-11 reads merged, and PR-12 follows D-130 to D-132. The external facts add the research of PR-12.
2026-09-16 correction pass (Session 21): PR-12 reads merged, and PR-17 follows D-133 to D-138. PR-17 removes the highlights, the disclosure, and the Links section.
2026-09-16 correction pass (Session 22): PR-17 reads merged, and the Phase 3 gate reads passed. The external facts add the image research of PR-17.
2026-09-16 correction pass (Session 23): PR-13 follows D-139 to D-141. D-141 adds a command to its scope. The external facts add the log research of PR-13.
2026-09-16 correction pass (Session 24): PR-13 reads merged. M-3 holds the result of the two audits and of Lighthouse on the live site. PR-18 follows D-142 to D-145.
2026-09-16 correction pass (Session 25): PR-18 reads merged. M-3 holds the hand check of the owner. D-146 supersedes D-18, and the code license is GPL-3.0.
2026-09-16 correction pass (Session 26): PR-19 follows D-147 to D-152, and G-12 joins the guardrails. From PR-19 on, a status reads "complete in #N" before the merge, and no later pull request changes it to "merged" (D-147). The external facts add the hook research of PR-19.
2026-09-16 correction pass (Session 28): PR-20 follows D-153 to D-159. The external facts move to `docs/external-facts.md` (D-156), and the entries of Phases 0 to 3 move to `docs/roadmaps/` (D-155).
2026-09-16 correction pass (Session 29): PR-21 follows D-160.
2026-09-18 correction pass (Session 31): PR-23 follows D-165 and D-166. The external facts add the link research of PR-23.

Owner decisions live in `docs/decisions.md` (D-#), and `make decisions-index` lists them (D-157). Open questions live in `docs/questions.md` (OQ-#). The `design-doc-style` skill holds the template of this file (D-10).

## External facts

`docs/external-facts.md` holds each external fact of the roadmap, with its source and the date the session read it (D-156). Read it when a task depends on a version, a service term, a browser feature, or a standard.

## 1. Thesis

The site shows the work of Nate Kramber on one page at `natekramber.com` (D-3, D-4). It is for peers and the curious, and it makes no hard sell (D-19). A visitor on any screen reads the headline and a short bio, opens each card in place, and follows a link out (D-20 to D-23). The site ships no client JavaScript, and it follows the system color scheme (D-27, D-33).

The plan puts the checks and a live placeholder first, then the design, then the page, then the cards. A live placeholder finds the domain, certificate, and deploy problems early, while nothing depends on them (D-40). The checks come before the page, so every page change passes them from its first commit (G-3, D-38). Each card comes from one component and one data entry, so a new project costs one entry and its images (D-2).

## 2. Tenets

`CLAUDE.md` quotes the tenets in full, and this file cites their ids. The order is T-1 Responsive first, T-2 Accessible, T-3 Simple and readable code, T-4 Fast, T-5 Document everything, and T-6 No attribution (D-39).

## 3. Guardrails

Every pull request keeps each guardrail. Only an owner decision changes a guardrail.

1. **G-1. No sideways scroll.** No layout scrolls sideways at any width from 320 CSS pixels up (T-1).
2. **G-2. One card for every project.** Every project card comes from one component and one data entry. No project gets its own layout code (D-2).
3. **G-3. A new check passes on its own pull request.** A pull request that creates a check passes that check. A planned check names the pull request that creates it.
4. **G-4. Pinned actions.** Every GitHub Action pins a commit SHA, with its tag in a comment (D-16).
5. **G-5. Zero client JavaScript.** The built site ships no script, unless a decision names the script and its purpose (D-33).
6. **G-6. Baseline Widely available.** Every essential feature is Baseline Widely available. A Newly available feature adds polish alone, with a fallback (D-32).
7. **G-7. The budget holds.** Every site pull request stays inside the performance budget of D-37, and CI enforces it.
8. **G-8. WCAG 2.2 level AA.** The axe scan passes on each page and on the fixture cards (T-2, D-38, D-133).
9. **G-9. No deploy key.** Every deploy authenticates through Workload Identity Federation. No service account key lives in the repository or in its secrets (D-35).
10. **G-10. Only `main` deploys.** Only a merge to `main` reaches production (D-35).
11. **G-11. Every card fact has a source.** Each fact on a card comes from its repository or from the owner. The site copy invents no metric (hard rule 9).
12. **G-12. One pull request, one session.** Each pull request starts in a new clean session and holds its own documents and handoff. No pull request records the merge of an earlier pull request (D-147).

## 4. Roadmap

Each entry has an id (PR-# or M-#), a status, a scope, exit tests, and a gate. It ends with a plain-English paragraph. An M-# entry is a measurement: it changes no site code, and its result goes into `docs/decisions.md`. When the gate of a phase passes, its entries move word for word to `docs/roadmaps/phase-<n>.md`. This section then keeps the phase gate and a link (D-155).

### Phase 0: Foundation

`docs/roadmaps/phase-0.md` holds the entries of this phase: PR-1 and PR-2 (D-155).

### Phase 1: Stack, checks, and first deploy

Phase gate: `natekramber.com` serves the placeholder page over HTTPS, each merge to `main` deploys it, and every site check is a required check. Passed 2026-09-14: PR-6 put the page on the domain (D-86), and M-2 closed the phase (D-88).

`docs/roadmaps/phase-1.md` holds the entries of this phase: PR-3, PR-4, PR-14, PR-15, PR-16, PR-5, M-1, PR-6, and M-2 (D-155).

### Phase 2: The page

Phase gate: the page shell passes every site check, and the owner approves it on a preview address or on a phone. Passed 2026-09-14: every site check passed on #17, and the owner merged it after the phone check (D-102).

`docs/roadmaps/phase-2.md` holds the entries of this phase: PR-7 and PR-8 (D-155).

### Phase 3: Project cards

Phase gate: both cards pass every site check, and the owner approves the text of each card. Passed 2026-09-16: the owner approved each card and merged PR-11 (#22). PR-17 then changed the shape of every card (D-133).

`docs/roadmaps/phase-3.md` holds the entries of this phase: PR-9, PR-10, PR-11, and PR-17 (D-155).

### Phase 4: Launch and upkeep

Phase gate: the owner signs off M-3. That sign-off is the launch.

#### PR-12: Weekly outbound link check

Status: merged as #23, `3ca291e`, on 2026-09-16 UTC. Gitar approved it with no finding. After the merge, run 35064260365 of `links.yml` started by hand. It read 13 links of the live site, each one at 200, and its self-test failed on the planted dead link.

Scope: a scheduled workflow checks every outbound link of the live site once a week, and the owner can start it by hand (D-16, D-131).

- `.github/workflows/links.yml`: the job `links:outbound` at 09:17 UTC each Monday, and a run by hand.
- `make link-check`: linkinator crawls `https://natekramber.com` and follows each link that it finds.
- The check skips every `linkedin.com` address, and a comment gives the reason (D-130).
- A dead link fails the run. The workflow opens no issue, and it needs no write permission (D-132).
- `make link-selftest`: a planted page with one dead address proves that the check can fail (G-3).

Out of scope:

- The internal links of the build. `make html-check` keeps them (D-47).
- The outbound links of the documents. The check reads the site alone.

Exit tests:

- `make link-check` passes on the live site.
- The self-test fails on the planted dead address, and its output names that address (G-3).

Gate: the owner merges PR-12.

> *In plain English:* a project can move or go offline without notice. This check finds a dead link within a week, so no visitor finds it first.

#### PR-13: Visit counts

Status: merged as #26, `f656d84`, on 2026-09-16 UTC. Gitar found one bug, the fix `2bef180` closed it, and Gitar approved that head. D-139 to D-141 answer its design questions.

Scope: `docs/analytics.md` with a saved Cloud Logging query that counts page views and referrers from the Hosting request logs (D-36). D-141 adds `make visits` and `scripts/visits.sh`, which widens the scope past the documents.

Exit tests:

- The query returns the visits of one known day.
- The site still ships no script and sets no cookie (G-5).

Gate: the owner merges PR-13.

> *In plain English:* the owner cannot see visit counts today. This change gives a saved query over the host's own logs. The page stays free of trackers and cookies.

#### M-3: Launch audit

Status: in progress. The two agent audits ran on 2026-09-16 against `main` at `f656d84`, and every live file matched `dist/` byte for byte. Neither report holds a defect of high severity or of medium severity, and the accessibility audit found no WCAG 2.2 level AA failure. Lighthouse on `https://natekramber.com` read 1 in every category, 55,240 total bytes, an LCP of 1,224 ms, a CLS of 0, and a TBT of 0. PR-18 (#27) fixed the two findings that the owner chose to fix. The hand check of the owner is open.

Scope: run the `responsive-auditor` agent, the `accessibility-auditor` agent, and Lighthouse against `https://natekramber.com`. The owner checks the site on a real phone and a real desktop.

Exit tests:

- Each agent report holds no defect of high severity.
- Lighthouse on the live site meets the budget of D-37.
- The owner records the phones and the browsers of the hand check.

Hand check, on `https://natekramber.com`. The two agent audits of 2026-09-16 gave the items that no script can prove.

1. Open the site in Safari on the iPhone, in portrait. Make sure that the hero fits with the toolbar shown.
2. Scroll until the toolbar hides. Make sure that the hero still fits.
3. Hold the phone in landscape. Make sure that no text sits under the Dynamic Island or the home indicator.
4. Touch each of the five links with a thumb. Make sure that each link opens on the first touch.
5. Set the largest text size in the iOS display settings. Load the site again.
6. Make sure that no text clips and that nothing scrolls sideways.
7. Set Reduce Motion to on in iOS. Load the site again. Make sure that the headline does not move.
8. Start VoiceOver on the iPhone. Move through both project cards.
9. Make sure that each tag list announces as a list, with its item count (D-143).
10. Make sure that VoiceOver reads each source link with its project name (D-122). Stop VoiceOver.
11. Zoom the page with two fingers, then pan. Make sure that no content stays out of reach.
12. On the Mac in Safari 26, push Tab five times. Make sure that a focus ring shows on each link.
13. Start VoiceOver on the Mac, and open the rotor. Make sure that the link list and the three lists read correctly.
14. Set Reduce Motion to on in macOS. Load the site again. Make sure that the headline does not move.
15. Zoom Safari to 400 percent. Make sure that nothing scrolls sideways and that no text disappears.
16. Open the site in Firefox, in the light scheme and in the dark scheme. Make sure that the layout matches Safari.
17. Tell the session the phone model, the iOS version, each browser version, and each defect.

Gate: the owner signs off, and the result goes into `docs/decisions.md`.

> *In plain English:* the automatic checks run on a local build. This audit checks the real site on real devices before the owner calls it done.

#### PR-18: The audit fixes of M-3

Status: merged as #27, `def59ef`, on 2026-09-16 UTC. Gitar approved it with no finding, and D-142 to D-145 answer its design questions. After the deploy, `make preview-check` passed on `https://natekramber.com`, and the live files matched `dist/` byte for byte.

Scope: the tag outline of the card, the list role of each `ul`, and the `html-validate` rule that the role needs (D-142, D-143).

Exit tests:

- The tag outline holds 3:1 against the page in the light scheme and in the dark scheme.
- Each `ul` of the site carries `role="list"`, and `make verify` passes.
- The `no-redundant-role` rule still fails on a redundant role that is not `list`.

Gate: the owner merges PR-18.

> *In plain English:* the launch audit found a faint outline that does a real job, and a list that Safari can strip of its meaning. This change fixes both. Neither fix moves the layout, and every site check still passes.

#### PR-19: One pull request, one session

Status: complete in #32. `verify:pr-lifecycle` passed on its first run and joined the `main` ruleset on 2026-09-16 (D-149).

Scope:

- The `one-pr-one-session` skill: the session binding, the stop condition, the start gate, the documentation gate, the Gitar rounds, and the completion gate (D-147, D-152).
- Hard rules 3 and 11 of `CLAUDE.md` name the skill path. The `session-handoff` and `design-doc-style` skills record no merge (D-147).
- `scripts/pr-lifecycle-check.py`, `make pr-template`, `make pr-check`, and the job `verify:pr-lifecycle` (D-148, D-151).
- The ruleset change of D-149 after the first green run of that job.
- `scripts/session-bind-hook.py` as a PreToolUse hook in `.claude/settings.json` (D-150).
- `scripts/skill-check.py` and `make lifecycle-check` in `make verify` and in `verify:docs`.

Out of scope:

- The site. No file of `src/` or `public/` changes.
- The `gitar-review` skill. It already asks for an answer to each finding before the merge (D-152).

Enforcement:

| Invariant | Kind | How |
|---|---|---|
| The body binds one branch, one pull request, one role, and a base commit | Machine | `verify:pr-lifecycle` |
| Each document category has a specific entry, and no entry defers work | Machine | `verify:pr-lifecycle` |
| Each `Changed` entry matches the diff, and each changed category says `Changed` | Machine | `verify:pr-lifecycle` |
| The pull request changes `docs/session-handoff.md` | Machine | `verify:pr-lifecycle` |
| No branch or title names a record of an earlier merge | Machine | `verify:pr-lifecycle` |
| The skill is valid, `CLAUDE.md` names it, and the hook is in the settings | Machine | `make lifecycle-check` in `verify:docs` |
| A Claude Code session pushes to one branch alone | Machine, local | The hook of D-150 |
| The session holds no work of another pull request, a fork, or a summary | Agent | The stop condition of the skill |
| Each reason is true, and the handoff describes only this pull request | Agent | The documentation gate of the skill |
| The session stops at the end and offers no next pull request | Agent | The completion gate of the skill |
| A new session starts for each pull request, and each merge waits for a current review | Owner | The owner starts each session and merges |
| The history of a fork, a summary, or another tool | Not observable | No harness exposes it, and CI sees no conversation |

This repository has no separate implementation head. Gitar reviews the newest head, and the handoff names "the commit that holds this entry". So a commit of the handoff alone gets its own review, and it never hides a code change (D-5).

Exit tests:

- `make lifecycle-check` passes, and each self-test fails on its planted defect (G-3).
- `verify:pr-lifecycle` passes on this pull request, and it runs again after an edit of the body.
- `make verify` passes.

Gate: the owner merges PR-19. The next pull request starts in a new clean session.

> *In plain English:* today one session can open many pull requests, and a later pull request writes down the merge of an earlier one. This change gives each pull request one fresh session and all of its own documents. It changes no page of the site, so no visitor sees a difference.

#### PR-20: Session-start context size

Status: complete in #35.

Scope:

- `make resume` prints the header, "Resume here", and the newest entry of the handoff. It is the first action of each session (D-154).
- The entries of Phases 0 to 3 move word for word to `docs/roadmaps/` (D-155).
- The external facts move word for word to `docs/external-facts.md` (D-156).
- `make decisions-index` lists each decision. The read order reads the index, then single rows of the register (D-157).
- After a pause of more than one hour, a new session continues the pull request (D-158).
- `make context-budget` checks the byte caps of the session-start set in `make verify` and in `verify:docs` (D-159).
- The read order of `CLAUDE.md`, three skills, the paths of the register rule file, and the categories of `scripts/pr-lifecycle-check.py` follow these changes.

Out of scope:

- A shorter `CLAUDE.md`, a short Gitar status command, and bounded reads of test logs. They wait for the measurement of the next sessions (D-153).
- The global plugins, skills, and servers, and the reasoning effort. The owner keeps them outside this repository (D-153).
- The site. No file of `src/` or `public/` changes.

Exit tests:

- Each non-blank line of the old `docs/design.md` is in the new design files.
- `make decisions-index` lists each row of the register, and its self-test fails on each planted defect (G-3).
- `make context-budget` passes, and its self-test fails on each planted oversize part (G-3).
- The session-start set holds 30 percent or less of its bytes before this change.
- An evaluator with the new read order names the same next action, blockers, and decisions as an evaluator with the old read order.
- `make verify` passes.

Gate: the owner merges PR-20.

> *In plain English:* each session reads about 238 kilobytes of history before it starts, and the model gets that text again at each step. This change reads only the current part at the start. Every word stays in a file, and a new check keeps the start set small.

#### PR-21: The Gitar push wait

Status: complete in #36.

Scope:

- The `gitar-review` skill waits three minutes or more after each push, before a `Gitar review` comment (D-160).
- After that wait, the skill asks for a manual review only when no automatic review started (D-160).
- Command E of the skill holds the wait and the Gitar check of the head.

Out of scope:

- The copies of the skill in the reference repositories. The owner changes them, because this repository writes to no other repository (D-1).
- The site. No file of `src/` or `public/` changes.

Exit tests:

- Each step reference of the skill procedure names the correct step.
- Command E reads the Gitar check of a real pull request head.
- `make verify` passes.

Gate: the owner merges PR-21.

> *In plain English:* a session can ask for a review before the automatic review starts, and two reviews then run. This change makes each session wait three minutes first. The site does not change.

#### PR-22: The skill port and the reference rules

Status: complete in #37.

Scope:

- The `gitar-review` skill gets the metadata set and the effective head (D-163). It also gets the scope of a finding, the severity table, the push-back table, and the attribution test (D-161).
- The `one-pr-one-session` skill gets the compaction rule, the deferral phrases, the refusal result, and the enforcement table (D-161). It also gets the prompt for the next pull request (D-162).
- The `ste-writing` skill gets the glossary table and the rules of the checker (D-161, D-164).
- `scripts/ste-check.py` gets the rules MD 1, REF 1 to REF 3, and HANDOFF 1 to HANDOFF 3, with a self-test (D-164).

Out of scope:

- A `pr-review` skill. Gitar is the only reviewer of this repository (D-5, D-161).
- The byte caps of the session-start set. `make context-budget` keeps them (D-159).
- The site. No file of `src/` or `public/` changes.

Exit tests:

- `make ste-check` gives no finding, and its self-test proves that each new rule can fail.
- `make lifecycle-check` passes with the new size cap of the bound skill.
- `make verify` passes.

Gate: the owner merges PR-22.

> *In plain English:* the game repository of the owner improved the shared rules for agents. This change brings those improvements here, and it adds a check that each cited decision and each file path in the documents is real. The site does not change.

#### PR-23: The new tab for each outbound link

Status: complete in #38.

Scope:

- `src/pages/index.astro`: each hero link gets `target="_blank"` and `rel="noopener"` (D-166).
- `src/components/ProjectCard.astro`: each card link gets the same two attributes. One rule covers every card, because the schema keeps each card link an absolute address (G-2).
- The site gives no notice of the new tab, in text or in an icon (D-165).
- `scripts/link-target-check.py` and `make link-target-check`: the rules TARGET 1 to TARGET 3 read each HTML file of the build.
- A self-test of the same script proves that each of the three rules can fail (G-3).
- `.github/workflows/verify.yml`: the job `verify:site` runs the new check.

Out of scope:

- The internal link of the 404 page. It stays in the same tab (D-166).
- A notice of the new tab. D-165 refuses the visible words, the icon, and the hidden text.
- The layout, the tokens, and the words of the page. No CSS rule changes.

Exit tests:

- `make link-target-check` gives no finding on the build, and its self-test finds each planted defect.
- `make test-responsive` and `make test-a11y` pass, so the new attributes break no layout and no name.
- `make verify` passes.

Gate: the owner merges PR-23.

> *In plain English:* today a link to GitHub or to a project takes over the tab, and the visitor leaves the site. This change opens each link that leaves the site in a new tab, so the site stays open behind it. A new check reads the built pages, so a later link cannot miss the rule.

### Later

These items have no id yet. Each one gets an entry when it starts.

- Real screenshots for both cards (OQ-4).
- The terminal-rpg card, through the `add-project` skill, when the project has something to show (D-2).

## 5. Sequence

One owner runs the sequence in strict order. A step starts only when the gate of the step before it holds.

1. PR-1, the repository foundation. Gate: the merge, then `verify:docs` becomes a required check.
2. PR-2, roadmap draft 1. Gate: the merge approves draft 1.
3. PR-3, the Astro scaffold and the placeholder page. Gate: `verify:site` becomes a required check.
4. PR-4, the site checks. Gate: each check becomes a required check.
5. PR-16, the foreground preview server for the checks (D-70).
6. PR-14, agentic browsing in the Lighthouse budget.
7. PR-15, the stylesheet file and the placeholder 404 page (D-65).
8. PR-5, the Google Cloud projects, the Hosting configuration, and previews. Gate: M-1 has a result.
9. M-1, the keyless preview deploy. It runs on the pull request of PR-5.
10. PR-6, the deploy on merge and the domain. Gate: the placeholder page is live.
11. M-2, the request logs on the Spark plan. Gate: the result is in `docs/decisions.md`.
12. PR-7, the design tokens, the fonts, and the accent color. Gate: OQ-5 closes.
13. PR-8, the page shell. Gate: the owner approves it on a preview address.
14. PR-9, the project schema and the card component.
15. PR-10, the Deck Tome card. Gate: the owner approves the card text.
16. PR-11, the What You Carry card. Gate: the owner approves the card text.
17. PR-12, the weekly outbound link check.
18. PR-17, the card shape, the images, and the page end. Gate: the owner merges it.
19. PR-13, the visit counts. It runs only when M-2 passes.
20. M-3, the launch audit. Gate: the owner signs off.
21. PR-18, the audit fixes of M-3. Gate: the owner merges it.
22. PR-19, one pull request, one session. Gate: the owner merges it.
23. PR-20, the session-start context size. Gate: the owner merges it.
24. PR-21, the Gitar push wait. Gate: the owner merges it.
25. PR-22, the skill port and the reference rules. Gate: the owner merges it.
26. PR-23, the new tab for each outbound link. Gate: the owner merges it.

## 6. Open questions

`docs/questions.md` holds the register. OQ-3 blocks the About text of PR-8. OQ-4 blocks nothing at launch. OQ-5 closed with D-91 on 2026-09-14.
