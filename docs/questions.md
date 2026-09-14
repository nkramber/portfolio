# Open questions

Status: active register. Owner: Nate Kramber. Started 2026-09-12. Written in ASD-STE100.

This file holds every open question for the owner. Each question has an id (OQ-#). The numbers never change. A closed question stays in this file with its date and the D-# id that closed it.

How to file a question:

- State the question plainly.
- Give the options and their tradeoffs.
- Give a recommendation and its reason.
- Name the work that the question blocks.
- Ask the owner with `AskUserQuestion` at once. Do not save a question for the end of a session.

## Register

1. **OQ-1. The tenets.** Set the order and the words of tenets T-1 to T-5 (D-15). Blocks the final text of `CLAUDE.md` and `docs/design.md`. Recommendation: the draft order, with responsive layout first. The owner named it the maximum focus (D-4). Resolved 2026-09-12: D-39, the draft order.
2. **OQ-2. Hosting.** Choose the host of `natekramber.com`, with the domain at GoDaddy (D-3). Blocks the deploy pull request. Recommendation: none yet. The session first verifies the current free terms of each host, with a date. Resolved 2026-09-12: D-34, Firebase Hosting on the Spark plan.
3. **OQ-3. The bio.** The owner writes the text of the About section (D-28). Blocks the About section pull request. Recommendation: two to four sentences in the plain and direct voice.
4. **OQ-4. The screenshots.** Real screenshots for the Deck Tome and What You Carry cards replace the placeholders (D-40). Blocks nothing at launch. Recommendation: the owner captures both, and the session resizes them.
5. **OQ-5. The fonts and the accent color.** The owner picks from the rendered preview page of PR-7 (D-42). Blocks the merge of PR-7. Recommendation: the session publishes the preview with three choices of each. Resolved 2026-09-14: D-91, Atkinson Hyperlegible Next and Mono with the accent Blueprint cobalt.
6. **OQ-6. The Google Cloud project id.** PR-5 needs the id of the new project (D-34). Blocks PR-5. Recommendation: `natekramber-prod`, after the pattern of decktome-prod. Resolved 2026-09-12: D-51.
7. **OQ-7. The Google account.** PR-5 needs the account that owns the project, and a gcloud configuration for it. Blocks PR-5. Recommendation: the account of decktome-prod. Resolved 2026-09-12: D-52.
