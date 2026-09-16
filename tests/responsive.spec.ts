import { readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

// The widths of the responsive-qa skill, in CSS pixels (T-1, G-1).
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560];

// The home page, and the 404 page that the server sends for a missing address (D-71).
const pages = [
  { name: 'home', path: '/', status: 200 },
  { name: '404', path: '/no-such-page', status: 404 },
];

// The fixture cards of D-103: the longest title, links, and tags that the schema
// allows, one card with a screenshot, and one with no image (D-134). Playwright
// builds them into dist-fixture/ and serves that folder on port 4322.
const fixturePage = 'http://127.0.0.1:4322/';

// How many CSS pixels the document is wider than the viewport. Zero means no sideways scroll.
async function sidewaysOverflow(page: Page): Promise<number> {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

for (const { name, path, status } of pages) {
  for (const width of widths) {
    test(`${name} page: no sideways scroll at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(path);
      // The screenshot comes first, so a failed run still keeps the picture.
      await page.screenshot({ path: testInfo.outputPath(`${name}-${width}.png`), fullPage: true });
      // The status and the title prove that the server sent our page, not a default error page.
      expect(response?.status()).toBe(status);
      await expect(page).toHaveTitle(/Nate Kramber/);
      expect(await sidewaysOverflow(page)).toBe(0);
    });
  }
}

test('the overflow check catches a planted wide element', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.setContent(readFileSync('tests/fixtures/wide-element.html', 'utf8'));
  expect(await sidewaysOverflow(page)).toBeGreaterThan(0);
});

// How many CSS pixels the widest element of the page holds beyond its own box.
// Zero means that no word runs into the padding or out of its box. Text for screen
// readers alone clips itself to 1 pixel on purpose, so the check skips it.
async function textOverflow(page: Page): Promise<number> {
  return page.evaluate(() =>
    Math.max(
      0,
      ...[...document.querySelectorAll('body *:not(.visually-hidden)')].map((el) => el.scrollWidth - el.clientWidth),
    ),
  );
}

// WCAG 1.4.4 and 1.4.12. A style tag can apply after `addStyleTag` returns, and a
// check that measures too early passes on the default text. So each helper waits
// until the computed style shows the change.
const textSpacing =
  '* { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } p { margin-bottom: 2em !important; }';

async function enlargeText(page: Page): Promise<void> {
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).fontSize)).toBe('32px');
}

async function applyTextSpacing(page: Page): Promise<void> {
  await page.addStyleTag({ content: textSpacing });
  await expect
    .poll(() => page.evaluate(() => getComputedStyle(document.querySelector('p') as Element).letterSpacing))
    .not.toBe('normal');
}

// A word with no break opportunity must break inside its box (G-1): in the headline,
// and in a link, whose inline-block box does not narrow on its own.
test('a very long word stays inside its box at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  const word = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
  await page.locator('h1').evaluate((h1, text) => {
    h1.textContent = text;
  }, word);
  await page.locator('.links a').first().evaluate((link, text) => {
    link.textContent = text;
  }, word);
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// WCAG 2.4.11: Tab brings each link fully into view with its focus ring, even in a
// short landscape window.
for (const address of ['/', fixturePage]) {
  test(`the focus ring of each control stays on screen in a 568 by 320 window on ${address}`, async ({ page }) => {
    await page.setViewportSize({ width: 568, height: 320 });
    await page.goto(address);
    const controls = await page.locator('a').count();
    for (let i = 0; i < controls; i++) {
      await page.keyboard.press('Tab');
      const ring = await page.evaluate(() => {
        const focused = document.activeElement as HTMLElement;
        const box = focused.getBoundingClientRect();
        const style = getComputedStyle(focused);
        const reach = parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset);
        return { top: box.top - reach, bottom: box.bottom + reach, viewport: window.innerHeight };
      });
      expect(ring.top).toBeGreaterThanOrEqual(0);
      expect(ring.bottom).toBeLessThanOrEqual(ring.viewport);
    }
  });
}

// WCAG 1.4.4: text at 200 percent keeps all content at the smallest width. A card
// shows every fact at once, so the page has one state (D-133).
test('text at 200 percent stays inside its boxes at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  await enlargeText(page);
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// WCAG 1.4.12: the page keeps all content with the text spacing of the standard.
test('the text spacing of WCAG 1.4.12 keeps every word inside its box at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');
  await applyTextSpacing(page);
  expect(await textOverflow(page)).toBe(0);
  expect(await sidewaysOverflow(page)).toBe(0);
});

// D-112: the fixture build holds the fixture cards alone, so the cards of the site
// get their width check on the home page. A card shows every fact at once (D-133).
for (const width of widths) {
  test(`home page: no sideways scroll and no clipped text at ${width}px, with the cards`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(await page.locator('.card').count()).toBeGreaterThan(0);
    await page.screenshot({ path: testInfo.outputPath(`home-cards-${width}.png`), fullPage: true });
    expect(await sidewaysOverflow(page)).toBe(0);
    expect(await textOverflow(page)).toBe(0);
  });
}

// WCAG 1.4.4 accepts any text scaling mechanism of the browser. Firefox on Android
// zooms to 400 percent, and desktop Chromium and Firefox to 500 percent. So a fluid
// size still doubles at 400 percent when its largest value is at most 2 times its
// smallest (https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). On a
// phone, pinch zoom scales the whole page and doubles every size.
test('each fluid text size grows at most 2 times from 320px to 2560px', async ({ page }) => {
  const selectors = ['.name', 'h1', '.lede', '.links a', '.card h3'];
  const sizes: Record<number, number[]> = {};
  for (const width of [320, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    sizes[width] = await Promise.all(
      selectors.map((selector) =>
        page.locator(selector).first().evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
      ),
    );
  }
  selectors.forEach((selector, i) => {
    expect(sizes[2560][i] / sizes[320][i], selector).toBeLessThanOrEqual(2);
  });
});

// Each face downloads once, from the file that the page preloads (D-92). A preload
// with another address or another CORS mode fetches the font twice. The home page
// also preloads the mono face of its cards, and the 404 page shows no mono text, so
// it preloads the text face alone (D-111).
test('each face loads once, from its preloaded file', async ({ page }) => {
  const fontRequests: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'font') fontRequests.push(new URL(request.url()).pathname);
  });
  const fontPreloads = () =>
    page.locator('link[rel="preload"][as="font"]').evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));

  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const preloads = await fontPreloads();
  expect(preloads).toHaveLength(2);
  for (const face of ['Atkinson Hyperlegible Next', 'Atkinson Hyperlegible Mono']) {
    expect(await page.evaluate((family) => document.fonts.check(`1rem "${family}"`), face), face).toBe(true);
  }
  expect([...fontRequests].sort()).toEqual([...preloads].sort());

  await page.goto('/no-such-page');
  expect(await fontPreloads()).toHaveLength(1);
});

// D-95: the hero rises into place when the system allows motion, and it holds still
// under reduced motion (WCAG 2.3.3). Every set of keyframes changes `translate` alone,
// never the opacity, so text shows from the first frame.
test('the hero moves only when the system allows motion, and nothing fades', async ({ page }) => {
  for (const reducedMotion of ['no-preference', 'reduce'] as const) {
    await page.emulateMedia({ reducedMotion });
    await page.goto('/');
    const animationName = await page.locator('.hero').evaluate((hero) => getComputedStyle(hero).animationName);
    expect(animationName, `prefers-reduced-motion: ${reducedMotion}`).toBe(reducedMotion === 'reduce' ? 'none' : 'rise');
  }
  const animatedProperties = await page.evaluate(() =>
    [...document.styleSheets]
      .flatMap((sheet) => [...sheet.cssRules])
      .filter((rule) => rule instanceof CSSKeyframesRule)
      .flatMap((keyframes) => [...(keyframes as CSSKeyframesRule).cssRules])
      .flatMap((frame) => [...(frame as CSSKeyframeRule).style]),
  );
  expect([...new Set(animatedProperties)]).toEqual(['translate']);
});

// The hero of the 404 page fills the window. At the first frame of the rise, the
// offset must not make the page taller than the window, or a classic scrollbar
// flashes and the text jumps sideways (D-95). The test holds that frame still.
test('the first frame of the hero rise adds no scroll to the 404 page', async ({ page }) => {
  for (const size of [{ width: 1440, height: 900 }, { width: 390, height: 664 }]) {
    await page.setViewportSize(size);
    await page.goto('/no-such-page');
    const overflow = await page.evaluate(() => {
      const rise = [...document.styleSheets]
        .flatMap((sheet) => [...sheet.cssRules])
        .find((rule) => rule instanceof CSSKeyframesRule && rule.name === 'rise') as CSSKeyframesRule;
      const hero = document.querySelector('.hero') as HTMLElement;
      hero.style.animation = 'none';
      hero.style.translate = (rise.cssRules[0] as CSSKeyframeRule).style.translate;
      return document.documentElement.scrollHeight - document.documentElement.clientHeight;
    });
    expect(overflow, `${size.width} by ${size.height}`).toBe(0);
  }
});

// The share card of D-97 and the icons of D-96: each address in the head serves its
// file. Bytes 16 to 23 of a PNG file hold its width and its height.
test('the share image and the icons serve from the addresses in the head', async ({ page }) => {
  await page.goto('/');
  const shareImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  const response = await page.request.get(new URL(shareImage ?? '').pathname);
  expect(response.status()).toBe(200);
  const png = await response.body();
  const width = await page.locator('meta[property="og:image:width"]').getAttribute('content');
  const height = await page.locator('meta[property="og:image:height"]').getAttribute('content');
  expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([Number(width), Number(height)]);

  const icons = await page
    .locator('link[rel="icon"], link[rel="apple-touch-icon"]')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));
  expect(icons).toHaveLength(3);
  for (const icon of icons) {
    expect((await page.request.get(icon)).status(), icon).toBe(200);
  }
});

// D-103: the production build in dist/ holds no fixture card. A stale content cache
// once put the fixture entries into dist/ (Session 16), and this test catches that.
test('the production home page shows no fixture card', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('[aria-labelledby^="project-fixture-"]').count()).toBe(0);
});

for (const width of widths) {
  test(`fixture cards: no sideways scroll and no clipped text at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(fixturePage);
    expect(await page.locator('.card').count()).toBe(2);
    // The screenshot loads lazily, so the test scrolls to it and waits, and the saved
    // picture shows the image, not an empty box.
    await page.locator('.shot').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0));
    await page.screenshot({ path: testInfo.outputPath(`fixture-${width}.png`), fullPage: true });
    expect(await sidewaysOverflow(page)).toBe(0);
    expect(await textOverflow(page)).toBe(0);
  });
}

// WCAG 1.4.4 and 1.4.12 on the fixture cards at the smallest width.
test('the fixture cards keep every word inside its box at 320px with larger text and spacing', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto(fixturePage);
  await enlargeText(page);
  expect(await textOverflow(page), 'text at 200 percent').toBe(0);
  expect(await sidewaysOverflow(page), 'text at 200 percent').toBe(0);
  await applyTextSpacing(page);
  expect(await textOverflow(page), 'text at 200 percent with the 1.4.12 spacing').toBe(0);
  expect(await sidewaysOverflow(page), 'text at 200 percent with the 1.4.12 spacing').toBe(0);
});

// D-119: a note that moves under its link sits close to that link, at most half as
// far from it as from the next link. The check measures the text of each link,
// without its padding.
test('each link note stays with its own link at 320px with text at 200 percent', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto(fixturePage);
  await enlargeText(page);
  const gaps = await page.locator('.card-links .note').evaluateAll((notes) =>
    notes.flatMap((note) => {
      const textBox = (link: Element) => {
        const box = link.getBoundingClientRect();
        const style = getComputedStyle(link);
        return { top: box.top + parseFloat(style.paddingTop), bottom: box.bottom - parseFloat(style.paddingBottom) };
      };
      const item = note.parentElement as HTMLElement;
      const own = textBox(item.querySelector('a') as Element);
      const nextLink = item.nextElementSibling?.querySelector('a');
      const noteBox = note.getBoundingClientRect();
      // A note beside its link, or a note of the last link, has no gap to compare.
      if (noteBox.top < own.bottom || !nextLink) return [];
      return [{ above: noteBox.top - own.bottom, below: textBox(nextLink).top - noteBox.bottom }];
    }),
  );
  expect(gaps.length).toBeGreaterThan(0);
  for (const { above, below } of gaps) {
    expect(above).toBeLessThanOrEqual(below / 2);
  }
});

// D-117: with cards below it, the hero leaves room for the Projects heading on the
// first screen. The 404 page has no cards, so its hero keeps the full height.
test('the Projects heading shows on the first screen, and the 404 hero keeps the full height', async ({ page }) => {
  const sizes = [
    { width: 375, height: 667 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
    { width: 2560, height: 1440 },
  ];
  for (const size of sizes) {
    await page.setViewportSize(size);
    await page.goto('/');
    const bottom = await page.locator('#projects-heading').evaluate((heading) => heading.getBoundingClientRect().bottom);
    expect(bottom, `${size.width} by ${size.height}`).toBeLessThanOrEqual(size.height);
  }
  await page.goto('/no-such-page');
  const hero = await page.locator('.hero').evaluate((element) => ({
    height: element.getBoundingClientRect().height,
    viewport: window.innerHeight,
  }));
  expect(hero.height).toBeGreaterThanOrEqual(hero.viewport);
});

// D-133: a card shows every fact with no click, so the page holds no disclosure.
// The page also holds no script and no inline style (G-5, D-72).
test('the fixture page has no disclosure, no script, and no inline style', async ({ page }) => {
  await page.goto(fixturePage);
  expect(await page.locator('details, summary').count()).toBe(0);
  expect(await page.locator('script, style, [style]').count()).toBe(0);
});

// Every image reserves its space before it loads, so nothing moves on load (T-1).
// A card with no image shows nothing in its place, because the placeholder panel left
// the site with D-134.
// D-137: the page ends with clear space below its last card, so the end never reads
// as the start of another card. The measure is the space inside `main` below the last
// card box.
test('the page keeps at least 4rem below the last card', async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const space = await page.evaluate(() => {
      const cards = document.querySelectorAll('.card');
      const last = cards[cards.length - 1].getBoundingClientRect();
      return (document.querySelector('main') as Element).getBoundingClientRect().bottom - last.bottom;
    });
    expect(space, `${width}px`).toBeGreaterThanOrEqual(64);
  }
});

test('each card image reserves its space, and no card draws a placeholder', async ({ page }) => {
  for (const address of [fixturePage, '/']) {
    await page.goto(address);
    expect(await page.locator('.placeholder').count(), address).toBe(0);
    for (const image of await page.locator('.card img').all()) {
      expect(await image.getAttribute('width'), address).toBeTruthy();
      expect(await image.getAttribute('height'), address).toBeTruthy();
      expect(await image.getAttribute('loading'), address).toBe('lazy');
    }
  }
});
