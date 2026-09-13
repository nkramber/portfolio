import { expect, test, type Page } from '@playwright/test';

// The console check of D-59. It loads the deployed preview, where the headers of
// firebase.json apply, and fails on any console error, such as a style that the CSP blocks.

function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

for (const path of ['/', '/no-such-page']) {
  test(`no console error on ${path}`, async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto(path, { waitUntil: 'load' });
    expect(errors).toEqual([]);
  });
}

// The planted defect: an inline style element, which the CSP of D-57 blocks.
// The check must see the error that the browser logs for it.
test('the console check catches a style that the CSP blocks', async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto('/', { waitUntil: 'load' });
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = 'body { outline: 1px solid red; }';
    document.head.append(style);
  });
  await expect.poll(() => errors.length).toBeGreaterThan(0);
});
