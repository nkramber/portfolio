import { readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

// The widths of the responsive-qa skill, in CSS pixels (T-1, G-1).
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560];

// The home page, and the 404 page that the server sends for a missing address (D-71).
const pages = [
  { name: 'home', path: '/', status: 200 },
  { name: '404', path: '/no-such-page', status: 404 },
];

// How many CSS pixels the document is wider than the viewport. Zero means no sideways scroll.
async function sidewaysOverflow(page: Page): Promise<number> {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

for (const { name, path, status } of pages) {
  for (const width of widths) {
    test(`${name} page: no sideways scroll at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(path);
      // The screenshot comes first, so a failed run still keeps the picture.
      await page.screenshot({ path: testInfo.outputPath(`${name}-${width}.png`), fullPage: true });
      // The status and the title prove that the server sent our page, not a default error page.
      expect(response?.status()).toBe(status);
      await expect(page).toHaveTitle(/Nate Kramber/);
      expect(await sidewaysOverflow(page)).toBe(0);
    });
  }
}

test('the overflow check catches a planted wide element', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.setContent(readFileSync('tests/fixtures/wide-element.html', 'utf8'));
  expect(await sidewaysOverflow(page)).toBeGreaterThan(0);
});

// How many CSS pixels the widest element inside the main landmark holds beyond its
// own box. Zero means that no word runs into the padding or out of its box.
async function textOverflow(page: Page): Promise<number> {
  return page.evaluate(() =>
    Math.max(0, ...[...document.querySelectorAll('main *')].map((el) => el.scrollWidth - el.clientWidth)),
  );
}

// A word with no break opportunity must break inside its box (G-1): in the headline,
// and in a link, whose inline-block box does not narrow on its own.
test('a very long word stays inside its box at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  const word = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
  await page.locator('h1').evaluate((h1, text) => {
    h1.textContent = text;
  }, word);
  await page.locator('.links a').first().evaluate((link, text) => {
    link.textContent = text;
  }, word);
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// WCAG 2.4.11: Tab brings each link fully into view with its focus ring, even in a
// short landscape window.
test('the focus ring of each link stays on screen in a 568 by 320 window', async ({ page }) => {
  await page.setViewportSize({ width: 568, height: 320 });
  await page.goto('/');
  const links = await page.locator('main a').count();
  for (let i = 0; i < links; i++) {
    await page.keyboard.press('Tab');
    const ring = await page.evaluate(() => {
      const focused = document.activeElement as HTMLElement;
      const box = focused.getBoundingClientRect();
      const style = getComputedStyle(focused);
      const reach = parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset);
      return { top: box.top - reach, bottom: box.bottom + reach, viewport: window.innerHeight };
    });
    expect(ring.top).toBeGreaterThanOrEqual(0);
    expect(ring.bottom).toBeLessThanOrEqual(ring.viewport);
  }
});

// WCAG 1.4.4: text at 200 percent keeps all content at the smallest width.
test('text at 200 percent stays inside its boxes at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// WCAG 1.4.12: the page keeps all content with the text spacing of the standard.
test('the text spacing of WCAG 1.4.12 keeps every word inside its box at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  await page.addStyleTag({
    content:
      '* { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } p { margin-bottom: 2em !important; }',
  });
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// WCAG 1.4.4 accepts any text scaling mechanism of the browser. Firefox on Android
// zooms to 400 percent, and desktop Chromium and Firefox to 500 percent. So a fluid
// size still doubles at 400 percent when its largest value is at most 2 times its
// smallest (https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). On a
// phone, pinch zoom scales the whole page and doubles every size.
test('each fluid text size grows at most 2 times from 320px to 2560px', async ({ page }) => {
  const selectors = ['.name', 'h1', '.lede', '.links a'];
  const sizes: Record<number, number[]> = {};
  for (const width of [320, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    sizes[width] = await Promise.all(
      selectors.map((selector) =>
        page.locator(selector).first().evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
      ),
    );
  }
  selectors.forEach((selector, i) => {
    expect(sizes[2560][i] / sizes[320][i], selector).toBeLessThanOrEqual(2);
  });
});

// The text face downloads once, from the file that the page preloads (D-92). A
// preload with another address or another CORS mode fetches the font twice.
test('the text face loads once, from the preloaded file', async ({ page }) => {
  const fontRequests: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'font') fontRequests.push(new URL(request.url()).pathname);
  });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const preload = await page.locator('link[rel="preload"][as="font"]').getAttribute('href');
  expect(await page.evaluate(() => document.fonts.check('1rem "Atkinson Hyperlegible Next"'))).toBe(true);
  expect(fontRequests).toEqual([preload]);
});
