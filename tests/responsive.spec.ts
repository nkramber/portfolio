import { readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

// The widths of the responsive-qa skill, in CSS pixels (T-1, G-1).
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560];

// How many CSS pixels the document is wider than the viewport. Zero means no sideways scroll.
async function sidewaysOverflow(page: Page): Promise<number> {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

for (const width of widths) {
  test(`no sideways scroll at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    // The screenshot comes first, so a failed run still keeps the picture.
    await page.screenshot({ path: testInfo.outputPath(`page-${width}.png`), fullPage: true });
    expect(await sidewaysOverflow(page)).toBe(0);
  });
}

test('the overflow check catches a planted wide element', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.setContent(readFileSync('tests/fixtures/wide-element.html', 'utf8'));
  expect(await sidewaysOverflow(page)).toBeGreaterThan(0);
});
