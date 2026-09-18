---
name: ste-writing
description: Write and review text in ASD-STE100 Simplified Technical English. Load before you write or edit any .md, skill, agent, or rule file in this repo. The words a visitor reads on the site are exempt.
---

# STE writing skill

Use this skill before you write text in this repo. The owner requires ASD-STE100 for every doc, skill, agent, and rule file (D-7). The words a visitor reads on `natekramber.com` are exempt. The `copy-editor` agent reviews those words in the voice of the site.

Source: ASD-STE100 Issue 9, dated 2025-01-15, is the current issue. The session read that fact at https://www.asd-ste100.org/ on 2026-09-12, and the site offers a free official copy on request. The rule list below comes from the Issue 8 summary (2021-04-30) of the reference repositories. Check a rule against Issue 9 before you cite its number in a dispute. This skill does not copy the dictionary.

## Procedure

1. Write the text.
2. Check each sentence against the checklist below.
3. Correct each sentence that fails.
4. Run `make ste-check`, and correct each finding.
5. Read the text again as a reader who does not know the subject.

## Checklist (the rules that fail most often)

- Max 20 words in a procedural sentence. Max 25 words in a descriptive sentence (5.1, 6.3).
- One instruction in each sentence (5.2).
- Instructions in the imperative: "Load the file." Not "The file should be loaded." (5.3).
- Active voice in procedures. Active voice as much as possible in descriptions (3.6).
- No "-ing" verb forms. "Sync the data", not "Syncing the data". The rules permit an "-ing" word only in a technical name (3.5).
- No helping verbs for complex tenses: "we did", not "we have been doing" (3.4).
- Tenses allowed: infinitive, imperative, simple present, simple past, past participle as adjective, future (3.2).
- No semicolons (8.1).
- No contractions (4.2).
- Max three words in a noun cluster. Write longer names in full, then use hyphens or a short name (2.1, 2.2).
- Use "the", "a", or "this" before a noun (2.3).
- One term for each concept. Do not use synonyms for variety (1.11, 9.4).
- Each paragraph: one topic, max six sentences (6.5, 6.6).
- Use vertical lists for complex content (4.3).
- Start a safety note with the risk word: WARNING or CAUTION (7.1).
- Notes give information, not instructions (5.5).
- American English spelling (1.14).
- No phrasal verbs: "remove", not "take out" (9.3).
- Do not use a technical name as a verb (1.7). Write "make a backup", not "backup the data".

## The 53 rules in short form

### Section 1: Words

- 1.1 Use only approved dictionary words, technical names, and technical verbs.
- 1.2 Use approved words only as the part of speech given.
- 1.3 Use approved words only with their approved meaning.
- 1.4 Use only approved forms of verbs and adjectives.
- 1.5 You can use words that fit a technical name category.
- 1.6 Use an unapproved word only when it is a technical name or part of one.
- 1.7 Do not use technical names as verbs.
- 1.8 Use technical names that agree with approved nomenclature.
- 1.9 Select technical names that are short and easy to understand.
- 1.10 Do not use slang or jargon as technical names.
- 1.11 Do not use different technical names for the same item.
- 1.12 You can use verbs that fit a technical verb category.
- 1.13 Do not use technical verbs as nouns.
- 1.14 Use American English spelling, unless an official directive says otherwise.

### Section 2: Noun clusters

- 2.1 Write noun clusters of max three words.
- 2.2 Write a long technical name in full, then give a short name or use hyphens.
- 2.3 Use an article or a demonstrative adjective before a noun.

### Section 3: Verbs

- 3.1 Use only verb forms given in the dictionary.
- 3.2 Make only: infinitive, imperative, simple present, simple past, past participle as adjective, future.
- 3.3 Use the past participle only as an adjective.
- 3.4 Do not use helping verbs to make complex verb structures.
- 3.5 Use the "-ing" form only as a technical name or in a technical name.
- 3.6 Use the active voice in procedures. Use it as much as possible in descriptions.
- 3.7 Use an approved verb to describe an action, not a noun.

### Section 4: Sentences

- 4.1 Write short and clear sentences.
- 4.2 Do not omit words or use contractions to make sentences shorter.
- 4.3 Use a vertical list for complex text.
- 4.4 Use connecting words to connect sentences with related topics.

### Section 5: Procedures

- 5.1 Max 20 words in each sentence.
- 5.2 One instruction in each sentence, unless actions occur at the same time.
- 5.3 Write instructions in the imperative.
- 5.4 Divide a descriptive statement from the command with a comma.
- 5.5 Write notes only to give information, not instructions.

### Section 6: Descriptions

- 6.1 Give information gradually.
- 6.2 Use key words and phrases to organize the text.
- 6.3 Max 25 words in each sentence.
- 6.4 Use paragraphs to show related information.
- 6.5 Each paragraph has only one topic.
- 6.6 No paragraph has more than six sentences.

### Section 7: Safety instructions

- 7.1 Use a word such as "WARNING" or "CAUTION" to identify the risk level.
- 7.2 Start a safety instruction with a clear command or condition.
- 7.3 Give an explanation that shows the risk or the possible result.

### Section 8: Punctuation and word count

- 8.1 Use all standard punctuation except the semicolon.
- 8.2 Use hyphens to connect closely related words.
- 8.3 Use parentheses for references, item identifiers, step identifiers, abbreviations, and singular or plural forms.
- 8.4 In a vertical list, a colon counts as the end of a sentence.
- 8.5 Text in parentheses counts as one word.
- 8.6 Count each number, unit, abbreviation, identifier, quoted text, and title as one word.
- 8.7 A hyphenated word counts as one word.

### Section 9: Writing practices

- 9.1 Use a different construction when a word-for-word replacement is not enough.
- 9.2 Use each approved word correctly.
- 9.3 Do not make phrasal verbs.
- 9.4 Use a consistent style for terminology and wording.

## Technical names in this project

The rules permit these names as written (rule 1.5):

- The site and the owner: natekramber.com, Nate Kramber, the owner.
- The projects: Deck Tome, What You Carry, terminal-rpg.
- Tools and services: GitHub, GitHub Actions, Dependabot, Gitar, `gitar-bot`, GoDaddy, Claude Code, Codex, Python, Make, Node.js, npm.
- Hosting and deploy: Google Cloud, Firebase Hosting, Spark plan, preview channel, Cloud Logging, Workload Identity Federation.
- Web standards and tools: HTML, CSS, JavaScript, SVG, WCAG, Baseline, Astro, axe, Playwright, Lighthouse, Core Web Vitals, html-validate, linkinator, chrome-launcher, "Chrome for Testing".
- Web terms: viewport, viewport width, breakpoint, layout, section, project card, component, touch target, focus indicator, reduced motion, sideways scroll, performance budget.
- Process terms: tenet, hard rule, guardrail, session handoff, decision register, questions register, rule file, ruleset, squash merge, required check, pull request.
- The standard itself: ASD-STE100, STE.
- Code identifiers in backticks.

## Glossary

Use one term for each concept (1.11, 9.4). Add a row for each term the owner sets, with the refused words.

| Term | Use it for | Do not use |
|---|---|---|
| visitor | a person who reads the site | user, viewer, reader |
| owner | Nate Kramber in process text | the user, the maintainer |
| project card | the card of one project | tile, project box |
| site | all of `natekramber.com` | page, when the text means the whole site |
| section | one part of the page | block, region |
| viewport width | the width of the browser window | screen size, device width |
| pull request | a GitHub pull request. "PR-#" is a roadmap id alone | PR in prose, MR |
| the Gitar review | the review of `gitar-bot` | the bot review, the automatic check |

These process terms come from the pull request rules (D-147 to D-163):

| Term | Use it for | Do not use |
|---|---|---|
| session | one run of a harness, bound to one pull request (D-147) | conversation, chat |
| clean session | a new top-level session that holds no work of another pull request | fresh context, new chat |
| context compaction | the harness step that replaces the conversation with a summary | compaction alone |
| session-start set | the files and the command output that each session reads first (D-159) | read order, when the text means these bytes |
| matrix | the documentation impact list in the pull request body (D-148) | checklist, table, when the text means this list |
| metadata set | the two handoff files, which do not move the effective head (D-163) | the docs files |
| effective head | the newest commit outside the metadata set (D-163) | the tip, the real head |
| hand-over point | the end of the work of a session on its pull request | handoff, which names `docs/session-handoff.md` |

## The checker

`scripts/ste-check.py` is a port of the decktome checker (D-7). `make ste-check` runs it on every hand-written `.md` file, and the `verify:docs` job runs the same target on each pull request. It prints one line for each finding: the file, the line, the rule, and the text. It exits with code 1 on any finding.

| Rule | What the checker flags |
|---|---|
| 3.2/3.4 | A modal verb: should, would, could, might, may, shall, ought. Also has, have, or had before a past participle |
| 3.5 | An -ing form at the start of a sentence, or after a helper word or a preposition |
| 3.6 | Passive voice: a form of "be", then a past participle, with max two adverbs between them |
| 4.2 | A contraction |
| 5.1 | More than 20 words in a sentence of a numbered list item |
| 6.3 | More than 25 words in any other sentence |
| 6.6 | More than six sentences in one paragraph |
| 8.1 | A semicolon |
| MD 1 | An HTML comment across two lines or more. The checker removes a comment, so a long one hides prose from every rule |
| REF 1 | A citation of a `D-`, `OQ-`, `F-`, `G-`, `T-`, `L-`, `M-`, or `PR-` id that no register holds |
| REF 2 | A path of this repository in backticks that no file and no folder holds |
| REF 3 | A citation of a superseded decision that names no decision which superseded it |
| HANDOFF 1 | A session number that the handoff and its archive hold two times |
| HANDOFF 2 | A session entry out of order. The two files hold one list, newest first (D-8) |
| HANDOFF 3 | More than ten entries in `docs/session-handoff.md` (D-8) |

The checker skips `AGENTS.md`, because it is a symlink to `CLAUDE.md`. It also skips `docs/session-handoff-archive.md`, because a dated record is history.

`make context-budget` holds the byte caps of the session-start set (D-159). The checker does not repeat them.

The reference rules read the registers of the repository (D-164):

- `docs/decisions.md` defines each `D-` id, and `docs/questions.md` defines each `OQ-` id.
- `docs/design.md` defines each `G-`, `T-`, `F-`, `L-`, `M-`, and `PR-` id, and `docs/roadmaps/` defines an id of a completed phase.
- A path in backticks is a path of this repository in two cases. Its first part names a top-level folder, or it is a bare name with a file type that this repository writes by hand.
- A file type of the built site is prose, for example `robots.txt`. Write it in backticks with no risk.
- A path resolves from the root, from the folder of the file, or from the folder above it. It also resolves as the one file of the checkout that ends with that name.
- A line that names a `PR-#` id marks each path of that entry, because G-3 permits a planned file.
- A line that names another repository cites the ids and the paths of that repository. The rules read no id and no path of such a line.
- A dated record keeps the text of its day, so the rules skip the two handoff files and `docs/roadmaps/`.
- Write a name that is not a path of this repository without backticks, for example a branch name.
- The rule of a superseded decision reads each file except `docs/decisions.md`, where the Effect column records the change.
- `make ste-check` runs the self-test of these rules too, so each rule proves that it can fail (G-3).

The verb rules are heuristics. A past participle is a word from a list of irregular forms, or a word that ends in "ed". A participle in `ALLOW_STATE` names a state, so "is merged" passes and "is required" fails. Rewrite a failed sentence with the actor as the subject: "the build needs the file". The words "can", "must", and "will" pass, because the standard approves them.

An -ing word in `ING_ALLOW` is a noun or a technical name, for example "nothing", "heading", or "hosting". Add a word to a list only when the word is a noun or a technical name in this repo.

CAUTION: the checker reads "is read-only" as passive voice, because "read" is an irregular participle. Write "treat the repository as read-only".

## Markdown notes

- The checker skips tables, fenced code blocks, headings, and front matter. Keep the text in a table cell short.
- Text in backticks counts as one word. So does text in double quotes or in parentheses (8.5, 8.6).
- A numbered list item counts as a procedural step under any heading, so its limit is 20 words.
- A bullet list item is one unit. Rule 6.3 applies, so its limit is 25 words.
- Keep each HTML comment on one line. A comment across two lines or more is a finding (MD 1).
- The checker counts the dash of a list item as a word of its first sentence.
- A line that starts with bold text starts a new paragraph.
- A sentence can wrap to the next line. The checker joins the lines of a paragraph before it counts.
- The plain-English paragraphs of the design doc are descriptive text. Rule 6.3 applies.
