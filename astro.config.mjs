// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The canonical address of the site (D-41). Astro builds absolute URLs from it.
  site: 'https://natekramber.com',
  build: {
    // Every stylesheet ships as a file and never as a style element, so the
    // CSP header of D-57 can permit styles with `style-src 'self'` alone (D-65).
    inlineStylesheets: 'never',
  },
});
