// Draws the share image of D-97 and the two PNG icons of D-96 into public/, and
// Astro copies each file into dist/ unchanged. The Chromium build of Playwright
// draws each image, so the site needs no image library. The PNG files stay in
// git, so /og.png keeps one address, and every machine serves the same bytes.
//
// Run `make images` after a change to the headline, the colors, the text face,
// or public/favicon.svg.
import { readFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

// The light scheme of the design tokens in src/layouts/Page.astro (D-91).
const background = '#fafaf8';
const text = '#151515';
const accent = '#1f4fd1';

// Each page loads its font and its icon from a data URL, so no server is necessary.
const textFace = readFileSync('src/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2').toString('base64');
const icon = readFileSync('public/favicon.svg').toString('base64');

// The name, the headline of D-29, and a rule in the accent. The "keep" spans hold
// the same word pairs as the headline in src/pages/index.astro.
const shareImage = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Atkinson Hyperlegible Next';
    font-weight: 200 800;
    src: url(data:font/woff2;base64,${textFace}) format('woff2');
  }
  body {
    margin: 0;
    height: 630px;
    box-sizing: border-box;
    padding: 72px 88px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    background: ${background};
    color: ${text};
    font-family: 'Atkinson Hyperlegible Next', sans-serif;
  }
  p { margin: 0; font-size: 36px; font-weight: 600; }
  h1 { margin: 0; max-width: 20ch; font-size: 80px; font-weight: 650; line-height: 1.05; letter-spacing: -0.02em; text-wrap: balance; }
  .keep { white-space: nowrap; }
  .rule { width: 112px; height: 10px; background: ${accent}; }
</style>
</head>
<body>
  <p>Nate Kramber</p>
  <h1>I design the systems. <span class="keep">AI agents</span> write the code. <span class="keep">I decide</span> what ships.</h1>
  <div class="rule"></div>
</body>
</html>`;

// The icon of public/favicon.svg at one size, on one page background. The touch
// icon gets the accent as its background, so its corners hold no transparent pixels.
function iconPage(size, pageBackground) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><style>body { margin: 0; background: ${pageBackground}; } img { display: block; }</style></head>
<body><img src="data:image/svg+xml;base64,${icon}" width="${size}" height="${size}" alt=""></body>
</html>`;
}

const icons = [
  { file: 'public/favicon-48.png', size: 48, pageBackground: 'transparent' },
  { file: 'public/apple-touch-icon.png', size: 180, pageBackground: accent },
];

const browser = await chromium.launch();
try {
  const share = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await share.setContent(shareImage);
  // A face that fails to load gives the fallback font with no error, so the load
  // must return the face. A failed load rejects, and the script stops.
  const faces = await share.evaluate(async () => (await document.fonts.load('650 80px "Atkinson Hyperlegible Next"')).length);
  if (faces === 0) throw new Error('make-images: the text face did not load');
  await share.screenshot({ path: 'public/og.png' });
  console.log('make-images: wrote public/og.png (1200 by 630)');

  for (const { file, size, pageBackground } of icons) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(iconPage(size, pageBackground));
    await page.screenshot({ path: file, omitBackground: pageBackground === 'transparent' });
    console.log(`make-images: wrote ${file} (${size} by ${size})`);
  }
} finally {
  await browser.close();
}
