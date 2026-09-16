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

    // A card shows every fact at once, so the page has one state (D-133).
    test('no WCAG violation on the home page', async ({ page }) => {
      await page.goto('/');
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

// The fixture cards of D-103, which Playwright serves from dist-fixture/ on port
// 4322: the WCAG scan in both schemes (G-8), and the structure scan. One fixture
// card holds a screenshot, and the other holds a logo (D-133).
const fixturePage = 'http://127.0.0.1:4322/';

for (const colorScheme of ['light', 'dark'] as const) {
  test(`no WCAG violation on the fixture cards in the ${colorScheme} scheme`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto(fixturePage);
    expect(await page.locator('.card').count()).toBe(2);
    expect(await violations(new AxeBuilder({ page }).withTags(wcagTags))).toEqual([]);
  });
}

test('the page structure of the fixture cards passes', async ({ page }) => {
  await page.goto(fixturePage);
  expect(await violations(new AxeBuilder({ page }).withRules(structureRules))).toEqual([]);
});

// D-121 and D-122: each card link names its card for a screen reader, as
// "<label> (<title>)". Two cards can then share a visible label, such as "Source on
// GitHub", and a list of the links on the page still tells them apart (WCAG 2.4.9).
// The exact match also catches a stray space before the hidden text.
test('each card link names its card', async ({ page }) => {
  await page.goto(fixturePage);
  const cards = await page.locator('.card').all();
  expect(cards).toHaveLength(2);
  for (const card of cards) {
    const title = await card.locator('h3').textContent();
    const links = await card.locator('.card-links a').all();
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      // The first text node of the link is its visible label, before the hidden title.
      const label = await link.evaluate((a) => a.firstChild?.textContent?.trim());
      await expect(link).toHaveAccessibleName(`${label} (${title})`);
    }
  }
});

// A note such as "Invite only" describes its link (D-24), so a screen reader user who
// tabs from link to link still hears it.
test('each link note describes its link', async ({ page }) => {
  await page.goto(fixturePage);
  const notes = page.locator('.card-links .note');
  const count = await notes.count();
  expect(count).toBeGreaterThan(0);
  for (let index = 0; index < count; index++) {
    const note = notes.nth(index);
    const text = (await note.textContent()) ?? '';
    await expect(note.locator('xpath=preceding-sibling::a')).toHaveAccessibleDescription(text.trim());
  }
});

// The tag list of each card carries its own name, so a screen reader says what the
// list holds (WCAG 1.3.1). The status of a card names itself the same way (D-107).
test('each card names its tag list', async ({ page }) => {
  await page.goto(fixturePage);
  const lists = page.locator('.card .tags');
  const count = await lists.count();
  expect(count).toBeGreaterThan(0);
  for (let index = 0; index < count; index++) {
    await expect(lists.nth(index)).toHaveAccessibleName('Tags');
  }
});

// Each image of a card carries the right alt text: a screenshot describes itself
// (D-22), and a logo is decoration beside the title, so its alt is empty (D-133,
// WCAG 1.1.1).
test('each card image has the right alt text', async ({ page }) => {
  await page.goto(fixturePage);
  const images = await page.locator('.card img').all();
  expect(images.length).toBeGreaterThan(0);
  for (const image of images) {
    const className = (await image.getAttribute('class')) ?? '';
    const alt = await image.getAttribute('alt');
    if (className.includes('logo')) {
      expect(alt, 'a logo is decoration').toBe('');
    } else {
      expect((alt ?? '').length, 'a screenshot describes itself').toBeGreaterThan(0);
    }
  }
});
