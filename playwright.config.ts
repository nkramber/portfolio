import { defineConfig } from '@playwright/test';

// The browser checks of PR-4 (D-38). `make` builds dist/ first, and this
// config serves it with `astro preview` on a fixed local port.
export default defineConfig({
  testDir: 'tests',
  // The preview checks need a deployed preview, so playwright.preview.config.ts runs them.
  testIgnore: 'preview/**',
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
    // Astro 7.3 runs `astro preview` as a detached background server when it
    // detects an AI agent, and the command then exits at once, so Playwright
    // fails. This variable turns that detection off, and the server stays in
    // the foreground (astro/dist/cli/preview/index.js). CI detects no agent (D-70).
    env: { ASTRO_PREVIEW_BACKGROUND: '1' },
  },
});
