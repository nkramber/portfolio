// The project entries of the cards (D-2, D-22, D-23). Each project is one JSON
// file in src/content/projects/. The schema fails the build on a missing field, an
// oversized field, or an unknown field, so a card never renders with a gap.
//
// PORTFOLIO_FIXTURES swaps the site entries for test entries, for test builds alone
// (D-103, D-112):
// - "1": the fixture cards of tests/fixtures/projects/. Playwright builds them into
//   dist-fixture/ for the responsive and the accessibility tests.
// - "invalid": an entry with a missing field, for `make content-selftest`.
// A test build loads no site entry, so the fixture page stays the same when a project
// joins the site. Each value keeps its own content cache (astro.config.mjs), so a
// site build never reuses a test entry.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const fixtureFolders: Record<string, string> = {
  '1': 'tests/fixtures/projects',
  invalid: 'tests/fixtures/projects-invalid',
};
const fixtureFolder = fixtureFolders[process.env.PORTFOLIO_FIXTURES ?? ''];

// A trimmed string with at least one character and at most `max` characters.
const text = (max: number) => z.string().trim().min(1).max(max);

const projects = defineCollection({
  loader: glob({
    base: '.',
    pattern: fixtureFolder ? `${fixtureFolder}/*.json` : 'src/content/projects/*.json',
    // The file name is the id, for example "deck-tome", so ids stay short and stable.
    generateId: ({ entry }) => entry.replace(/^.*\//, '').replace(/\.json$/, ''),
  }),
  schema: ({ image }) =>
    z.strictObject({
      title: text(40),
      // One sentence (D-22).
      pitch: text(140),
      // D-105.
      status: z.enum(['Live', 'In development']),
      tags: z.array(text(20)).min(1).max(6),
      // A note is a short label after the link, such as "Invite only" (D-24).
      links: z
        .array(z.strictObject({ label: text(40), href: z.url(), note: text(20).optional() }))
        .min(1)
        .max(3),
      highlights: z.array(text(160)).min(1).max(5),
      // A card with no screenshot shows the placeholder of D-106. The path is relative to the entry.
      screenshot: z.strictObject({ src: image(), alt: text(160) }).optional(),
      // The cards sort by this number, lowest first (D-23).
      order: z.number().int().positive(),
    }),
});

export const collections = { projects };
