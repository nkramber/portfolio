// Writes the planted defects for `make lighthouse-selftest`, one fixture site
// for each defect, so each failure has one cause:
// - heavy-script/: a page that loads a heavy script. The script breaks the
//   zero-script budget (D-33) and the 300 KB weight cap (D-48).
// - bad-llms-txt/: a clean page with an llms.txt that Lighthouse 13 rejects.
//   The llms-txt audit fails, so the agentic-browsing score falls below its
//   floor (D-60).
import { randomBytes } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.argv[2];
if (!outputDirectory) {
  console.error('usage: node scripts/make-lighthouse-fixture.mjs <output directory>');
  process.exit(1);
}

function page(title, body) {
  return (
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    `<title>${title}</title></head>` +
    `<body><main><h1>Fixture</h1>${body}</main></body></html>\n`
  );
}

// Random bytes do not compress, so the script stays heavy even if a server
// compresses it. The bytes sit in a comment, so the script does nothing.
const weight = randomBytes(350_000).toString('base64');
const heavyScript = join(outputDirectory, 'heavy-script');
mkdirSync(heavyScript, { recursive: true });
writeFileSync(join(heavyScript, 'heavy.js'), `// ${weight}\n`);
writeFileSync(join(heavyScript, 'index.html'), page('Fixture: a heavy script', '<script src="heavy.js"></script>'));

// The llms-txt audit of Lighthouse 13 wants a "# " heading, a Markdown link,
// and at least 50 characters. This file has none of the three. A missing
// llms.txt does not fail the audit: Lighthouse marks a 404 as not applicable.
const badLlmsTxt = join(outputDirectory, 'bad-llms-txt');
mkdirSync(badLlmsTxt, { recursive: true });
writeFileSync(join(badLlmsTxt, 'llms.txt'), 'not a valid llms.txt\n');
writeFileSync(join(badLlmsTxt, 'index.html'), page('Fixture: a bad llms.txt', ''));

console.log(`wrote the heavy-script and bad-llms-txt fixtures to ${outputDirectory}`);
