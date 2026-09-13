// The header check of D-59. It fetches three responses of a deployed site
// and compares their headers with the header rules of a firebase.json file.
//
// Usage: node scripts/check-preview-headers.mjs <site URL> [firebase.json path]
//
// The self-test in the Makefile passes a planted firebase.json with one wrong
// value, and the check must then fail on that header (G-3).
import { readFileSync } from 'node:fs';

const [siteUrl, configPath = 'firebase.json'] = process.argv.slice(2);
if (!siteUrl) {
  console.error('usage: node scripts/check-preview-headers.mjs <site URL> [firebase.json path]');
  process.exit(1);
}
const rules = JSON.parse(readFileSync(configPath, 'utf8')).hosting.headers;

// firebase.json uses two kinds of source: "**", and one folder with "/**".
// Any other pattern stops the check, so the check never guesses how Firebase matches it.
function matches(source, path) {
  if (source === '**') return true;
  if (/^\/[\w-]+\/\*\*$/.test(source)) return path.startsWith(source.slice(0, -2));
  throw new Error(`check-preview-headers: no matcher for the source "${source}"`);
}

// Firebase applies the matching rules in order, and a later rule wins the same header (D-77).
function expectedHeaders(path) {
  const expected = new Map();
  for (const rule of rules) {
    if (!matches(rule.source, path)) continue;
    for (const { key, value } of rule.headers) expected.set(key.toLowerCase(), value);
  }
  return expected;
}

// Firebase overwrites HSTS on its own domains, so PR-6 checks HSTS on the live domain (D-59).
const host = new URL(siteUrl).hostname;
const firebaseDomain = host.endsWith('.web.app') || host.endsWith('.firebaseapp.com');

function fetchPath(path) {
  return fetch(new URL(path, siteUrl), { redirect: 'manual' });
}

const home = await fetchPath('/');
const stylesheet = (await home.text()).match(/href="(\/_astro\/[^"]+\.css)"/)?.[1];
if (!stylesheet) {
  console.error('check-preview-headers: the home page links no stylesheet in /_astro/');
  process.exit(1);
}

// The home page, its stylesheet, and a missing address, which gets the 404 page (D-64).
const checks = [
  { path: '/', status: 200, response: home },
  { path: stylesheet, status: 200, response: await fetchPath(stylesheet) },
  { path: '/no-such-page', status: 404, response: await fetchPath('/no-such-page') },
];

const failures = [];
for (const { path, status, response } of checks) {
  if (response.status !== status) {
    failures.push(`${path}: status ${response.status}, expected ${status}`);
  }
  for (const [key, value] of expectedHeaders(path)) {
    if (key === 'strict-transport-security' && firebaseDomain) {
      console.log(`${path}: ${key} skipped, because Firebase overwrites it on ${host}`);
      continue;
    }
    const actual = response.headers.get(key);
    if (actual === value) {
      console.log(`${path}: ${key} ok`);
    } else {
      failures.push(`${path}: ${key} is "${actual}", expected "${value}"`);
    }
  }
}

if (failures.length > 0) {
  console.error(`\ncheck-preview-headers: the headers of ${host} differ from ${configPath}`);
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}
console.log(`\ncheck-preview-headers: every header of ${configPath} matches on ${host}`);
