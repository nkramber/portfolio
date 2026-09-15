// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The canonical address of the site (D-41). Astro builds absolute URLs from it.
  site: 'https://natekramber.com',
  // A test build with PORTFOLIO_FIXTURES keeps its own content cache (D-103). A
  // build keeps its content store in `cacheDir` (astro/dist/content/paths.js). With
  // one shared cache, a later site build reused the fixture entries and put them
  // into dist/ (Session 16).
  cacheDir: process.env.PORTFOLIO_FIXTURES
    ? `./node_modules/.astro-fixtures-${process.env.PORTFOLIO_FIXTURES}`
    : './node_modules/.astro',
  build: {
    // Every stylesheet ships as a file and never as a style element, so the
    // CSP header of D-57 can permit styles with `style-src 'self'` alone (D-65).
    inlineStylesheets: 'never',
  },
});
