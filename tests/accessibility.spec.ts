import { readFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

// WCAG 2.2 level AA (T-2, G-8). An axe tag does not include the levels below
// it, so the scan names every level up to 2.2 AA.
const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// The id and the element count of each violation, so a failure names what broke.
async function violations(page: Page): Promise<string[]> {
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
  return results.violations.map((violation) => `${violation.id} (${violation.nodes.length})`);
}

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} color scheme`, () => {
    test.use({ colorScheme });

    test('no WCAG violation with every card closed', async ({ page }) => {
      await page.goto('/');
      expect(await violations(page)).toEqual([]);
    });

    test('no WCAG violation with every card open', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => {
        document.querySelectorAll('details').forEach((details) => {
          details.open = true;
        });
      });
      expect(await violations(page)).toEqual([]);
    });
  });
}

test('the scan catches a planted image with no alt text', async ({ page }) => {
  await page.setContent(readFileSync('tests/fixtures/missing-alt.html', 'utf8'));
  expect((await violations(page)).some((violation) => violation.startsWith('image-alt'))).toBe(true);
});
