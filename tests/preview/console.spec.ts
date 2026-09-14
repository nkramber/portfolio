import { expect, test, type Page } from '@playwright/test';

// The console check of D-59. It loads the deployed preview, where the headers of
// firebase.json apply, and fails on any console error, such as a style that the CSP blocks.

type ConsoleError = { text: string; url: string };

function collectErrors(page: Page): ConsoleError[] {
  const errors: ConsoleError[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push({ text: message.text(), url: message.location().url });
  });
  page.on('pageerror', (error) => errors.push({ text: error.message, url: page.url() }));
  return errors;
}

// The home page, and the 404 page that a missing address gets with the status 404 (D-64).
const pages = [
  { path: '/', status: 200 },
  { path: '/no-such-page', status: 404 },
];

for (const { path, status } of pages) {
  test(`no console error on ${path}`, async ({ page }) => {
    const errors = collectErrors(page);
    const response = await page.goto(path, { waitUntil: 'load' });
    expect(response?.status()).toBe(status);
    // Chrome logs a console error for each response with the status 404, the page itself
    // included. The 404 page has that status by design (D-64), so the check drops that one
    // message for the page itself. A CSP error, or a 404 of any other file, still fails it (D-80).
    const unexpected = errors.filter(
      (error) => !(status === 404 && error.url === page.url() && error.text.includes('status of 404')),
    );
    expect(unexpected).toEqual([]);
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
