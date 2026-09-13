// The performance budget of D-37 and D-48, checked with Lighthouse 13 (D-50).
//
// Usage: node scripts/lighthouse-budget.mjs <built directory>
//
// The script serves the directory on a free local port, runs Lighthouse on its
// default mobile settings, and takes the median of each value over the runs.
// It exits with code 1 when any median breaks lighthouse-budget.json.
// LIGHTHOUSE_RUNS overrides the run count, and CHROME_PATH names the browser.
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';

const budget = JSON.parse(readFileSync(new URL('../lighthouse-budget.json', import.meta.url), 'utf8'));

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

// A plain static server with no compression. Firebase Hosting compresses its
// responses, so the bytes measured here are a ceiling for the live site.
function serve(root) {
  const server = createServer((request, response) => {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = normalize(join(root, path));
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end('forbidden');
      return;
    }
    if (existsSync(file) && statSync(file).isDirectory()) {
      file = join(file, 'index.html');
    }
    if (!existsSync(file)) {
      response.writeHead(404).end('not found');
      return;
    }
    response.writeHead(200, { 'content-type': contentTypes[extname(file)] ?? 'application/octet-stream' });
    createReadStream(file).pipe(response);
  });
  return new Promise((done) => server.listen(0, '127.0.0.1', () => done(server)));
}

function categoryScore(lhr, id) {
  const score = lhr.categories[id]?.score;
  if (typeof score !== 'number') {
    throw new Error(`Lighthouse gave the ${id} category no score`);
  }
  return score;
}

function auditValue(lhr, id) {
  const value = lhr.audits[id]?.numericValue;
  if (typeof value !== 'number') {
    throw new Error(`Lighthouse gave the ${id} audit no numeric value`);
  }
  return value;
}

// Transfer bytes for one resource type of the resource-summary audit. A page
// with no script has no script row, so a missing script row means 0 bytes.
function transferBytes(lhr, resourceType) {
  const row = lhr.audits['resource-summary']?.details?.items?.find((item) => item.resourceType === resourceType);
  if (row) return row.transferSize;
  if (resourceType === 'script') return 0;
  throw new Error(`Lighthouse gave no ${resourceType} row in the resource-summary audit`);
}

function measure(lhr) {
  return {
    performance: categoryScore(lhr, 'performance'),
    accessibility: categoryScore(lhr, 'accessibility'),
    'best-practices': categoryScore(lhr, 'best-practices'),
    seo: categoryScore(lhr, 'seo'),
    scriptBytes: transferBytes(lhr, 'script'),
    totalBytes: transferBytes(lhr, 'total'),
    lcpMs: auditValue(lhr, 'largest-contentful-paint'),
    cls: auditValue(lhr, 'cumulative-layout-shift'),
    tbtMs: auditValue(lhr, 'total-blocking-time'),
  };
}

// The ids of the audits that failed inside one category, so a low score names its cause.
function failedAudits(lhr, categoryId) {
  return lhr.categories[categoryId].auditRefs
    .map((ref) => lhr.audits[ref.id])
    .filter((audit) => audit.score === 0)
    .map((audit) => audit.id);
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

const directory = process.argv[2];
if (!directory || !existsSync(directory)) {
  console.error(`usage: node scripts/lighthouse-budget.mjs <built directory> (got "${directory ?? ''}", which is absent)`);
  process.exit(1);
}
const runs = Number(process.env.LIGHTHOUSE_RUNS ?? budget.runs);
// With no run, every median is NaN, and NaN passes every limit. Refuse that case.
if (!Number.isInteger(runs) || runs < 1) {
  console.error(`lighthouse-budget: the run count must be a positive integer (got "${process.env.LIGHTHOUSE_RUNS ?? budget.runs}")`);
  process.exit(1);
}

const server = await serve(resolve(directory));
const url = `http://127.0.0.1:${server.address().port}/`;
// Playwright launches its Chromium with the sandbox off by default, and the
// browser tests of this repository run that way. With the sandbox on, Chrome
// never opened its debug port on the ubuntu-latest runner (ECONNREFUSED in CI
// run 34731663325). The page under test is our own build.
let chrome;
try {
  chrome = await chromeLauncher.launch({
    chromePath: process.env.CHROME_PATH,
    chromeFlags: ['--headless', '--no-sandbox'],
  });
} catch (error) {
  console.error(`lighthouse-budget: Chrome did not start from "${process.env.CHROME_PATH ?? 'the default path'}": ${error.message}`);
  server.close();
  process.exit(1);
}

const measurements = [];
let lastReport;
try {
  for (let run = 1; run <= runs; run++) {
    const result = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error' });
    if (!result) throw new Error('Lighthouse returned no result');
    if (result.lhr.runtimeError) throw new Error(`Lighthouse failed: ${result.lhr.runtimeError.message}`);
    measurements.push(measure(result.lhr));
    lastReport = result.lhr;
    console.log(`run ${run} of ${runs}: done`);
  }
} finally {
  await chrome.kill();
  server.close();
}

const failures = [];
console.log(`\n${'value'.padEnd(16)}${'median'.padStart(12)}${'budget'.padStart(12)}`);
for (const [name, floor] of Object.entries(budget.minimum)) {
  const value = median(measurements.map((m) => m[name]));
  console.log(`${name.padEnd(16)}${String(value).padStart(12)}${`>= ${floor}`.padStart(12)}`);
  if (value < floor) {
    failures.push(`${name}: ${value} is below ${floor}. Failed audits: ${failedAudits(lastReport, name).join(', ') || 'none at score 0'}`);
  }
}
for (const [name, ceiling] of Object.entries(budget.maximum)) {
  const value = median(measurements.map((m) => m[name]));
  console.log(`${name.padEnd(16)}${String(Math.round(value * 1000) / 1000).padStart(12)}${`<= ${ceiling}`.padStart(12)}`);
  if (value > ceiling) {
    failures.push(`${name}: ${value} is above ${ceiling}`);
  }
}

if (failures.length > 0) {
  console.error('\nlighthouse-budget: the budget failed');
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}
console.log('\nlighthouse-budget: every value is inside the budget');
