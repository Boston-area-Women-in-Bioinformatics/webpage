#!/usr/bin/env node
/**
 * Builds the email version of a newsletter issue, ready to paste into Gmail.
 *
 * 1. Runs `astro build` with NEWSLETTER_EMAIL_ISSUE set, which turns on the
 *    src/pages/newsletter-email/ route for just that issue (normal builds skip
 *    it). Newsletter components render table-based, inline-styled markup on
 *    that route (see src/utils/newsletterEmail.ts).
 * 2. Inlines the page's <style> block into every element with juice, then
 *    strips classes, rewrites relative src/href to absolute boston-wib.org
 *    URLs, and points in-page #anchor links (the TOC) at the web version.
 * 3. Writes newsletter-email/issue-NNN.html, warns if it's over Gmail's ~102KB
 *    clipping limit or if any image isn't live yet, and on macOS copies it to
 *    the clipboard as rich HTML and opens a preview. If some images aren't
 *    live yet, the preview is issue-NNN.preview.html instead, which loads
 *    images from the local public/ folder and carries a "don't copy from this
 *    page" banner (copying it would paste file:// images Gmail can't load).
 *
 * --site <url> points every boston-wib.org link and image at another host
 * (e.g. a Netlify deploy preview) so a test email can be sent before merging.
 * Rebuild without it before sending the real email.
 *
 * Run: npm run email -- 12 [--site <url>] [--no-build] [--no-open] [--no-copy]
 */
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import juice from 'juice';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const LIVE_SITE = 'https://boston-wib.org';
const GMAIL_CLIP_BYTES = 102 * 1024;
const USAGE = 'Usage: npm run email -- <issue number> [--site <url>] [--no-build] [--no-open] [--no-copy]';

const args = process.argv.slice(2);
const siteIndex = args.indexOf('--site');
const siteOverride = siteIndex >= 0 ? args[siteIndex + 1]?.replace(/\/+$/, '') : undefined;
if (siteIndex >= 0 && !siteOverride?.startsWith('http')) {
  console.error(USAGE);
  process.exit(1);
}
const SITE = siteOverride ?? LIVE_SITE;
const issue = Number(args.find((a, i) => !a.startsWith('--') && (siteIndex < 0 || i !== siteIndex + 1)));
const flag = (name) => args.includes(`--${name}`);

if (!Number.isInteger(issue) || issue < 1) {
  console.error(USAGE);
  process.exit(1);
}

const slug = `issue-${String(issue).padStart(3, '0')}`;
const builtPage = path.join(ROOT, 'dist', 'newsletter-email', slug, 'index.html');

if (!flag('no-build')) {
  console.log(`Building the site with the email version of ${slug}...`);
  const result = spawnSync('npx', ['astro', 'build'], {
    cwd: ROOT,
    env: { ...process.env, NEWSLETTER_EMAIL_ISSUE: String(issue) },
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    console.error(result.stdout, result.stderr);
    console.error('astro build failed.');
    process.exit(1);
  }
}

if (!fs.existsSync(builtPage)) {
  console.error(`No email page was built at ${path.relative(ROOT, builtPage)}. Does issue ${issue} exist?`);
  process.exit(1);
}

// juice re-serializes the (astro-compress minified) page with quoted attributes,
// so the regexes below can rely on quotes.
let html = juice(fs.readFileSync(builtPage, 'utf8'), { removeStyleTags: true, preserveImportant: true });
const webUrl = html.match(/<meta(?=[^>]*name="newsletter-web-url")[^>]*content="([^"]+)"/)?.[1] ?? SITE;

html = html
  // Gmail ignores classes once styles are inlined; dropping them keeps the email small.
  .replace(/\s(class|data-astro-[\w-]+)="[^"]*"/g, '')
  // Anchor targets only matter on the web page.
  .replace(/<div id="[^"]*"><\/div>/g, '')
  // Gmail doesn't support <details>, so show collapsed content expanded.
  .replace(/<details\b[^>]*>/g, '<div>')
  .replace(/<\/details>/g, '</div>')
  .replace(/<summary\b/g, '<p')
  .replace(/<\/summary>/g, '</p>')
  .replace(/\s(src|href)="\/(?!\/)/g, ` $1="${LIVE_SITE}/`)
  .replace(/\shref="#([^"]+)"/g, ` href="${webUrl}#$1"`);
// Test builds: send every boston-wib.org link and image to the other host, so
// links in the issue body (event pages, posts) resolve there too.
if (siteOverride) html = html.replaceAll(LIVE_SITE, SITE);

const outDir = path.join(ROOT, 'newsletter-email');
const outFile = path.join(outDir, `${slug}.html`);
const localPreviewFile = path.join(outDir, `${slug}.preview.html`);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, html);

const bytes = Buffer.byteLength(html);
console.log(`\nWrote ${path.relative(ROOT, outFile)} (${(bytes / 1024).toFixed(0)} KB)`);
if (bytes > GMAIL_CLIP_BYTES) {
  console.warn(`⚠️  Over ~102 KB: Gmail will clip it and show "View entire message".`);
}

// Images load from SITE, so anything added in this issue's branch shows as
// broken until it's deployed there.
const imageUrls = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]))];
const missing = [];
await Promise.all(
  imageUrls
    .filter((url) => url.startsWith(SITE))
    .map(async (url) => {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        if (!res.ok) missing.push(url);
      } catch {
        missing.push(url);
      }
    })
);
if (missing.length) {
  console.warn(`\n⚠️  These images are not live on ${SITE} yet (deploy before sending):`);
  missing.forEach((url) => console.warn(`   ${url}`));
}

// With every image live, preview the real email. Otherwise preview a copy that
// loads images from public/, bannered so nobody copies it into Gmail.
let previewFile = outFile;
if (missing.length) {
  previewFile = localPreviewFile;
  const banner =
    '<div style="background:#fef3c7;color:#92400e;font-family:sans-serif;font-size:14px;padding:12px;text-align:center;">' +
    "LOCAL PREVIEW: images load from your computer. Don't copy from this page; paste from the clipboard instead.</div>";
  fs.writeFileSync(
    localPreviewFile,
    html
      .replace(new RegExp(`(<img[^>]+src=")${SITE}/`, 'g'), `$1file://${path.join(ROOT, 'public')}/`)
      .replace(/<body([^>]*)>/, `<body$1>${banner}`)
  );
} else {
  fs.rmSync(localPreviewFile, { force: true });
}

if (process.platform === 'darwin') {
  if (!flag('no-copy')) {
    // Put the HTML on the clipboard as rich content, so pasting into a Gmail
    // compose window keeps the formatting.
    const jxa = `
      ObjC.import('AppKit');
      const html = $.NSString.stringWithContentsOfFileEncodingError(${JSON.stringify(outFile)}, $.NSUTF8StringEncoding, null);
      const pb = $.NSPasteboard.generalPasteboard;
      pb.clearContents;
      pb.setStringForType(html, $.NSPasteboardTypeHTML);
    `;
    execFileSync('osascript', ['-l', 'JavaScript', '-e', jxa]);
    console.log('\nCopied to the clipboard. Paste it into a new Gmail compose window.');
  }
  if (!flag('no-open')) execFileSync('open', [previewFile]);
}

if (siteOverride) {
  console.warn(
    `\n⚠️  TEST BUILD: links and images point at ${SITE}. Rebuild without --site before sending the real email.`
  );
}
