# Phase 3: Project cards

Status: complete. This file holds the entries of Phase 3, moved word for word from `docs/design.md` on 2026-09-16 (D-155). The roadmap section of `docs/design.md` keeps the phase heading, the phase gate, and a link to this file.

## PR-9: Project schema and card component

Status: merged as #18, `1bced52`, on 2026-09-15 UTC. Gitar approved it with no finding, and D-103 to D-110 answer its design questions. D-112 changes its fixture build in PR-10.

Scope:

- A content collection `projects` in `src/content.config.ts`, with one JSON file for each project in `src/content/projects/` (D-2).
- A strict schema with the fields of D-22. An unknown field fails the build.
  - A title of 40 characters or less, and a pitch of 140 characters or less.
  - Up to 3 links, each with an optional note such as "Invite only" (D-24).
  - A status of D-105, up to 6 stack tags, and up to 5 highlights.
  - An optional screenshot with alt text, and an order number (D-23).
- One card component, `src/components/ProjectCard.astro`, with its own scoped styles (D-104). The title, the pitch, the status, the tags, and the links always show, and a "Highlights" disclosure opens the rest (D-107, G-5).
- A status badge beside the title (D-109), and stack tags in hairline outlines (D-108).
- A CSS panel with the project name, 36rem wide at most, for a card with no screenshot (D-40, D-106, D-110).
- A Projects section on the home page, sorted by order, that stays off the page while the collection has no entry. PR-10 adds the first entry.
- Two fixture entries in `tests/fixtures/projects/`, built into `dist-fixture/` for the responsive and the accessibility tests alone (D-103). They hold the longest title and the most tags that the schema allows. Each fixture build keeps its own content cache, so the site build never reuses a fixture entry. Revised in part by D-112 on 2026-09-14: a fixture build loads the fixture entries alone.
- `make content-selftest`: a planted entry with no pitch must fail the build (G-3).

Out of scope:

- Real project entries. PR-10 and PR-11 hold them.
- A height animation on open. It needs a Limited feature (G-6).

Exit tests:

- `make content-selftest` passes: the build fails on the planted entry with no pitch.
- The card opens and closes with a mouse, a touch, and the keyboard (D-23). The fixture page holds no script and no inline style (G-5, D-72).
- The fixture cards show no sideways scroll and no clipped text at every width, closed and open (G-1).
- The axe scan passes on the fixture cards, closed and open, in both schemes (G-8).
- `dist/` holds no fixture entry, and a responsive test checks it.

Gate: the owner merges PR-9.

> *In plain English:* the page has no project cards today. This change builds the one card that every project uses, and tests it with made-up projects that never reach the live site. A new project then needs only its facts and an image (G-2).

## PR-10: Deck Tome card

Status: merged as #19, `0f983bb`, on 2026-09-15 UTC. Gitar approved the last head with no finding, and D-111 to D-120 answer its design questions. The owner approved the words of the card (D-113 to D-116) and skipped the phone check (D-120). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: one project entry through the `add-project` skill (D-2, D-24).

- The name is "Deck Tome", and the order number puts the card first (D-24, D-43).
- The links go to `decktome.com` and the public repository, with the "Invite only" label (D-24, D-116).
- The pitch, the three highlights, and the three stack tags of D-113 to D-115. One highlight describes how the owner directs AI coding agents (D-26).
- The card shows the placeholder image until OQ-4 closes (D-40).
- When a screenshot shows card art, the card carries the fan content line of Wizards of the Coast. The session verifies the current text of that policy first (D-41).
- The first card makes the page longer. So the Links section of D-21 returns at the end of the page, with the line of D-101 (D-102).
- The home page preloads the mono face of the card (D-111).
- A fixture build loads the fixture cards alone, and the home page tests open every card (D-112).
- While the home page shows cards, the hero leaves room for the Projects heading on the first screen (D-117).
- The footer heading takes the body size and the muted color, and the footer adds no space above its line (D-118).
- In every card, a note that moves under its link stays close to that link (D-119).

Exit tests:

- The owner approves the pitch and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- The font test finds two font preloads on the home page and one on the 404 page, and one request for each face (D-111).
- The home page shows no sideways scroll and no clipped text at each width with every card open (G-1, D-112).
- The Projects heading shows on the first screen at five screen sizes, and the 404 hero keeps the full height (D-117).
- The footer heading is smaller than a card title, and the footer adds no space above its line (D-118).
- At 320 px with 200 percent text, each note sits near its own link, not midway to the next link (D-119).
- Every site check passes.

Gate: the owner merges PR-10.

> *In plain English:* the page lists no projects today. This change adds Deck Tome, the live project, as the first card. The profile links return to the end of the page.

## PR-11: What You Carry card

Status: merged as #22, `c272a86`, on 2026-09-16 UTC. Gitar approved the last head with no finding, and D-121 to D-129 answer its design questions. The owner approved the words of the card (D-123 to D-126) and skipped the hand checks (D-129). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: one project entry through the `add-project` skill (D-2, D-25).

- The order number puts the card second (D-43).
- The card links to the public repository with the label "Source on GitHub" and no note, like the Deck Tome card (D-25, D-116).
- The card does not mention Steam or any release plan (D-25).
- The status badge shows that the game is in development, and the card shows the placeholder image until OQ-4 closes (D-40).
- The pitch, the two highlights, and the three stack tags of D-123 to D-126. No highlight describes the AI coding agents.
- Each card link holds the project name as hidden text, so two cards can share the visible label "Source on GitHub" (D-121, D-122). This change applies to every card (G-2).

Out of scope:

- A badge that keeps "In development" whole at 200 percent text on a 320 px screen (D-127).
- A hero rule that shows the Projects heading on the first screen of a landscape phone (D-128).

Exit tests:

- The owner approves the pitch and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- The name of each fixture card link reads "<label> (<title>)", with no extra space (D-121, D-122).
- Every site check passes.

Gate: the owner merges PR-11.

> *In plain English:* the page shows one project after PR-10. This change adds the game as the second card. It says nothing about release plans that the owner did not announce. Each card link also gives a screen reader the name of its project.

## PR-17: Card shape, images, and the page end

Status: merged as #24, `eb1dccf`, on 2026-09-16 UTC. Gitar approved it with no finding, and D-133 to D-138 answer its design questions. The responsive audit and the accessibility audit found no defect that the owner did not accept. After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope: the card component, the project schema, and the end of the home page.

- A card loses its highlights and its disclosure. It shows the title, the pitch, the status, the tags, the links, an optional logo, and an optional screenshot (D-133).
- The schema loses the `highlights` field. It gains an optional `logo` beside the optional `screenshot` (D-133).
- A card with no image shows no image, and the placeholder panel leaves the site (D-134).
- No card describes the AI coding agents, so the Deck Tome highlights leave the site (D-135).
- The Links section at the end of the home page leaves the site, with its heading and its line (D-136).
- The page keeps at least 4rem of space below the last card (D-137).
- A card draws each screenshot in a 16 by 10 frame, and a taller image shows its top (D-138).
- The fixture cards, the responsive tests, and the accessibility tests follow the new card.

Out of scope:

- The logo files and the screenshot files. OQ-8 and OQ-4 hold them.

Exit tests:

- The build fails on an entry that holds a `highlights` field (G-3, D-103).
- Each card shows every fact with no click, and the built page holds no `details` element.
- The home page holds no footer, and the hero keeps both profile links.
- The page keeps at least 4rem below the last card at each width (D-137).
- Every site check passes, and the first load stays inside the cap of D-48.

Gate: the owner merges PR-17.

> *In plain English:* a card hides most of its words behind a click today, and the page repeats the profile links at its end. This change shows each project in one block, with room for a logo and a picture, and it ends the page after the projects.
