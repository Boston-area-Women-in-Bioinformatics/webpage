// Helpers for the email version of a newsletter issue (src/pages/newsletter-email/,
// built by scripts/build-newsletter-email.mjs). Email clients like Gmail strip
// Tailwind classes, <style> blocks, and flexbox, so each newsletter component
// checks isNewsletterEmailRender() and, on the email route, renders table-based
// markup with inline styles built from the tokens below instead.

export const NEWSLETTER_EMAIL_BASE = '/newsletter-email/';

/** True when the current page is the email version of a newsletter issue. */
export const isNewsletterEmailRender = (url: URL): boolean => url.pathname.startsWith(NEWSLETTER_EMAIL_BASE);

// Light-mode values of the design tokens in src/components/common/CustomStyles.astro
// and the Tailwind palette, as plain hex — email has no CSS variables or dark mode.
export const EMAIL = {
  font: "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
  width: 600,
  primary: '#0161ef',
  heading: '#0f172a',
  text: '#1e293b',
  muted: '#64748b',
  border: '#e2e8f0',
  blue50: '#eff6ff',
  blue200: '#bfdbfe',
  orange50: '#fff7ed',
  accentWarm: '#e36d1d',
  teal50: '#f0fdfa',
  teal600: '#0d9488',
  slate50: '#f8fafc',
  tier: { gold: '#a67c00', silver: '#6b7280', bronze: '#92400e' },
};

/** Inline style for a pill-shaped primary button (`btn-primary` look). */
export const emailButtonStyle = `display:inline-block;background-color:${EMAIL.primary};color:#ffffff;font-family:${EMAIL.font};font-size:16px;font-weight:600;line-height:1;text-decoration:none;padding:14px 28px;border-radius:9999px;`;
