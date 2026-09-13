import { defineConfig } from '@playwright/test';

// The browser checks of PR-4 (D-38). `make` builds dist/ first, and this
// config serves it with `astro preview` on a fixed local port.
export default defineConfig({
  testDir: 'tests',
  outputDir: 'test-results',
  reporter: 'list',
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  use: {
    browserName: 'chromium',
    baseURL: 'http://127.0.0.1:4321',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
  },
});
