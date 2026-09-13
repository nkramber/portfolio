// Writes the planted defect for `make lighthouse-selftest`: a page that loads
// a heavy script. The script breaks the zero-script budget (D-33) and the
// 300 KB weight cap (D-48), so scripts/lighthouse-budget.mjs must fail on it.
import { randomBytes } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.argv[2];
if (!outputDirectory) {
  console.error('usage: node scripts/make-lighthouse-fixture.mjs <output directory>');
  process.exit(1);
}

// Random bytes do not compress, so the script stays heavy even if a server
// compresses it. The bytes sit in a comment, so the script does nothing.
const weight = randomBytes(350_000).toString('base64');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'heavy.js'), `// ${weight}\n`);
writeFileSync(
  join(outputDirectory, 'index.html'),
  '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<title>Fixture: a heavy script</title></head>' +
    '<body><main><h1>Fixture</h1><script src="heavy.js"></script></main></body></html>\n',
);
console.log(`wrote the heavy script fixture to ${outputDirectory}`);
