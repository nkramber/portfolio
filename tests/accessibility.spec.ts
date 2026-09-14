import { readFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// WCAG 2.2 level AA (T-2, G-8). An axe tag does not include the levels below
// it, so the scan names every level up to 2.2 AA.
const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// The page structure of PR-8 (G-8): one main landmark, one h1, headings in order,
// at most one footer, at the top level, and no content outside a landmark. axe tags
// these rules best-practice, so the WCAG scan never runs them (axe-core 4.13.0).
const structureRules = [
  'landmark-one-main',
  'page-has-heading-one',
  'heading-order',
  'landmark-unique',
  'landmark-contentinfo-is-top-level',
  'landmark-no-duplicate-contentinfo',
  'region',
];

// The id and the element count of each violation, so a failure names what broke.
async function violations(axe: AxeBuilder): Promise<string[]> {
  const results = await axe.analyze();
  return results.violations.map((violation) => `${violation.id} (${violation.nodes.length})`);
}

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} color scheme`, () => {
    test.use({ colorScheme });

    test('no WCAG violation with every card closed', async ({ page }) => {
      await page.goto('/');
      expect(await violations(new AxeBuilder({ page }).withTags(wcagTags))).toEqual([]);
    });

    test('no WCAG violation with every card open', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => {
        document.querySelectorAll('details').forEach((details) => {
          details.open = true;
        });
      });
      expect(await violations(new AxeBuilder({ page }).withTags(wcagTags))).toEqual([]);
    });

    // A missing address gets the 404 page, which holds no card (D-71). The status
    // and the title prove that the server sent our page, not a default error page.
    test('no WCAG violation on the 404 page', async ({ page }) => {
      const response = await page.goto('/no-such-page');
      expect(response?.status()).toBe(404);
      await expect(page).toHaveTitle(/Nate Kramber/);
      expect(await violations(new AxeBuilder({ page }).withTags(wcagTags))).toEqual([]);
    });
  });
}

// The color scheme does not change the structure, so one scheme is enough.
for (const path of ['/', '/no-such-page']) {
  test(`the page structure of ${path} passes`, async ({ page }) => {
    await page.goto(path);
    expect(await violations(new AxeBuilder({ page }).withRules(structureRules))).toEqual([]);
  });
}

test('the scan catches a planted image with no alt text', async ({ page }) => {
  await page.setContent(readFileSync('tests/fixtures/missing-alt.html', 'utf8'));
  const found = await violations(new AxeBuilder({ page }).withTags(wcagTags));
  expect(found.some((violation) => violation.startsWith('image-alt'))).toBe(true);
});

// The planted defects: text outside every landmark, no main landmark, and no h1.
// The structure scan must name each of the three rules.
test('the structure scan catches a planted page with no main landmark and no h1', async ({ page }) => {
  await page.setContent(readFileSync('tests/fixtures/no-landmarks.html', 'utf8'));
  const found = await violations(new AxeBuilder({ page }).withRules(structureRules));
  for (const rule of ['landmark-one-main', 'page-has-heading-one', 'region']) {
    expect(found.some((violation) => violation.startsWith(`${rule} `)), rule).toBe(true);
  }
});
