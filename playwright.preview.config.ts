import { defineConfig } from '@playwright/test';

// The console check of D-59 on a deployed preview. It starts no local server,
// so the headers of firebase.json apply. PREVIEW_URL names the preview address.
if (!process.env.PREVIEW_URL) {
  throw new Error('playwright.preview.config.ts: set PREVIEW_URL to the preview address');
}

export default defineConfig({
  testDir: 'tests/preview',
  outputDir: 'test-results/preview',
  reporter: 'list',
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  use: {
    browserName: 'chromium',
    baseURL: process.env.PREVIEW_URL,
  },
});
