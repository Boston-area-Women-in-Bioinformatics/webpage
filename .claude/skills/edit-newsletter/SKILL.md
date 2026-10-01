---
name: edit-newsletter
description: Write, revise, or finalize the body content of a BWIB newsletter issue (files under src/content/newsletter/) for publication. Use this whenever the user wants to add or edit a section in a newsletter draft, apply TOC/anchor formatting, add UTM-tagged links, format register/podcast buttons or an events table, or get a newsletter ready to send. If the issue file doesn't exist yet, use the add-newsletter command first to generate the outline, then come back to this skill for the content.
---

Write or revise the body content of an existing newsletter issue in `src/content/newsletter/` and prepare it for publication. If the issue file doesn't exist yet, use `/add-newsletter` first to generate the outline.

## Formatting Conventions

Apply these when writing or revising section content:

- **After adding any Tailwind class not already used elsewhere in the codebase** (arbitrary values like `bg-[#6d28d9]` or `scroll-mt-[80px]` are the common case), run `npm run build:css` before checking your work in the browser. This site precompiles Tailwind into a static `public/tailwind-built.css` rather than compiling it live (Local Norm 22 in `AGENTS.md`), so a first-time class has no visual effect — not even after a hard refresh — until that rebuild runs.

- **Table of contents**: render it with the `<TableOfContents />` component (`~/components/newsletter/TableOfContents.astro`), not hand-written HTML — this keeps the `.mdx` source readable instead of ~50 lines of repeated `<li><a>` markup. Import it once near the top of the body and pass one `{ href, label }` entry per `##` section, in the order the sections appear:

  ```mdx
  import TableOfContents from '~/components/newsletter/TableOfContents.astro';

  <TableOfContents
    items={[
      { href: '#fall-fundraiser', label: 'Fall Fundraiser: REGISTRATION OPEN' },
      { href: '#get-involved', label: 'Get Involved' },
    ]}
  />
  ```

  It renders the "Here's what's inside this month" styled box (`border-l-4 border-primary bg-blue-50 dark:bg-slate-800`) — pass a `title` prop only if an issue needs different heading text than the default. `.mdx`-only (component import), so this doesn't apply to legacy `.md` issues (001–007), which keep the plain markdown bullet-list TOC.

  Independently of how the TOC box itself is rendered, each `##` section still needs its own anchor target: `<div id="..." class="scroll-mt-[80px]"></div>` immediately **before** the heading (not after). Anchor scrolling puts the anchor element at the top of the viewport — if the div comes after the heading, clicking the TOC link scrolls the heading itself out of view above the fold. The `scroll-mt-[80px]` class is required too: the site's sticky header covers the top of the viewport, and headings elsewhere get scroll offset via `prose-headings:scroll-mt-[80px]` on the prose wrapper, but that Tailwind Typography modifier only targets actual heading elements — since the anchor is a plain `<div>`, not a heading, it needs the same offset applied directly or the target lands underneath the header. Every `##` heading must have a corresponding TOC entry.
- **UTM tags**: internal `boston-wib.org` links get `?utm_source=newsletter&utm_medium=email&utm_campaign=<campaign>`. Ask the developer for the `utm_campaign` value before writing links. Naming conventions:
  - Lowercase, hyphens only (no spaces or underscores)
  - Pick a name that describes the initiative and keep it consistent across every channel so GA can aggregate across sources
  - Recurring events: `byte-and-bite`, `bits-and-brews`
  - One-off events: `networking-without-the-ick`, `lightning-talks-2026`, `festival-of-genomics-2026`
  - Newsletter issues: `newsletter-005`
  - Resource/committee pages (`boston-wib.org/about/committees/*`): `resource-page`
  - Podcast: `a-coffee-with-compbio`
  - Skip external links (givebutter, luma, LinkedIn, etc.) — no UTM tag needed.

**Button patterns:**

- **Register/Event Page buttons** — use `class="btn-primary"` on `<a>` tags inside `not-prose` tables. Works because the `not-prose` parent disables Tailwind Typography overrides.

  ```html
  <a
    href="https://boston-wib.org/events/my-event?utm_source=newsletter&utm_medium=email&utm_campaign=my-event"
    class="btn-primary"
    >Register</a
  >
  ```

- **Podcast/Audio "Listen" buttons** — do NOT use `btn-primary` (blue). Use Tailwind classes with the site's accent purple (`#6d28d9`, via arbitrary value `bg-[#6d28d9]`) to distinguish podcast CTAs from event registration buttons. Include the 🎙️ emoji. Use `class`, not an inline `style` string — in `.mdx` files this tag compiles through the JSX pipeline, where a `style` attribute is conventionally an object rather than a CSS string, and it can silently fail to apply (or apply inconsistently) even though the identical markup works fine in a plain `.md` issue. Include `not-prose` in the class list: unlike Register buttons (wrapped in a `not-prose` table), this button isn't wrapped in one, so without it Tailwind Typography's `prose-a:text-primary` can still win the cascade over `text-white` depending on rule order, and the button reads as a plain blue link instead of a white-on-purple pill. Also include `leading-none`, or the button inherits `prose`'s line-height and renders much taller than its padding suggests. After adding this class to a content file, run `npm run build:css` — the site precompiles Tailwind CSS into a static file rather than compiling it live (Local Norm 22 in `AGENTS.md`), so a class used for the first time anywhere in the codebase has no effect until that rebuild runs; a plain browser refresh isn't enough.

  ```html
  <a
    href="https://boston-wib.org/blog/coffeewithcompbio/s2-eN?utm_source=newsletter&utm_medium=email&utm_campaign=a-coffee-with-compbio"
    class="not-prose inline-block rounded-full bg-[#6d28d9] px-6 py-3 font-semibold leading-none text-white no-underline"
    >🎙️ Listen on our Site</a
  >
  ```

**Callout boxes** — for a short highlighted note, a sponsor/tier list, or a closing CTA, render one of the three components below rather than hand-writing raw `<div>`/`<p>`/`<a>` HTML in the `.mdx` body.

> **Why components, not raw HTML** — MDX's markdown parser (remark) decides paragraph boundaries by line position, not by JSX tag nesting. A hand-written block like `<div><p>text <a>link</a> more text</p></div>`, when its children span multiple lines, gets its text silently re-parented into stray sibling `<p>` tags (sometimes empty ones) instead of staying inside the `<p>` you wrote — this drops the class you put on that `<p>`, breaks inline flow (a link can end up outside the sentence entirely), and doesn't error at build time, so it's easy to ship. This bit an earlier draft of issue 010's Student Perk/Sponsor Tier boxes: `astro build` succeeded, but the built HTML had unstyled empty `<p>` tags. Passing content through a component **prop** (a string or a data array, as below) sidesteps this — remark never touches prop values, only literal JSX children — which is also why `<TableOfContents />` above never hit this problem. Never hand-roll one of these three patterns as inline `.mdx` HTML; add a prop to the component instead if it needs to support something new.

All three live in `src/components/newsletter/` and use pastel tints (`bg-*-50` light / `dark:bg-slate-800` dark), never a solid brand-color fill — see `COLOR_PALETTE.md`'s rule that the four brand colors are text/border/icon colors, not section backgrounds.

- **`<HighlightBox />`** (`HighlightBox.astro`) — a short highlighted note (e.g. a student discount, a deadline reminder): `border-l-4` accent bar + pastel fill. `tone="warm"` (`border-accent-warm bg-orange-50`, default) for a perk/discount, `tone="primary"` (`border-primary bg-blue-50`) for a neutral heads-up. `html` is a raw HTML string (may include an `<a>`), rendered via `set:html` — write it as a JS template literal (backticks) so plain double quotes can be used for the nested HTML attributes.

  ```mdx
  import HighlightBox from '~/components/newsletter/HighlightBox.astro';

  <HighlightBox
    tone="warm"
    html={`<strong>Student perk:</strong> the first 25 student registrants get a FREE ticket to the <a href="https://boston-wib.org/events/womens-healthx-december-2026?utm_source=newsletter&utm_medium=email&utm_campaign=fall-fundraiser-2026" class="font-semibold text-primary dark:text-blue-300">Women's HealthX Conference</a> this December ($99 value).`}
  />
  ```

- **`<SponsorTierList />`** (`SponsorTierList.astro`) — a `bg-slate-50 dark:bg-slate-800` box containing a table, one row per tier. Tier labels reuse the site's existing tier-color pattern from `Sponsors.astro` (`!text-{gold,silver,bronze}` plus a text-shadow inline style for contrast on light backgrounds) rather than inventing new tier colors. Pass `tiers` as structured data — the component joins each tier's sponsors with `, ` and a trailing `, and ` itself, so don't include separators in the sponsor names.

  ```mdx
  import SponsorTierList from '~/components/newsletter/SponsorTierList.astro';

  <SponsorTierList
    tiers={[
      {
        tier: 'gold',
        label: 'Gold',
        sponsors: [
          { name: 'Sponsor Name', url: 'https://example.com/' },
        ],
      },
    ]}
  />
  ```

- **`<CTABox />`** (`CTABox.astro`) — a closing CTA box (e.g. Get Involved): bordered pastel box, centered text, ending in a `btn-primary` button. Use for a boilerplate section that ends in a single clear action rather than leaving it as bare paragraphs. `html` is a template-literal string (same reasoning as `HighlightBox`); `buttonHref`/`buttonLabel` render the button.

  ```mdx
  import CTABox from '~/components/newsletter/CTABox.astro';

  <CTABox
    html={`Message text with an inline <a href="https://example.com/" class="text-primary hover:underline dark:text-blue-300">link</a> if needed.`}
    buttonHref="https://boston-wib.org/about/committees?utm_source=newsletter&utm_medium=email&utm_campaign=resource-page"
    buttonLabel="Call to Action"
  />
  ```

**Upcoming Events section (`## Events on the Horizon`):**

- Each event is a `###` heading (never `##`)
- Each event uses a two-column `not-prose` table: image on the left, event details (date, time, location) as a plain `<ul>` on the right
- Optionally followed by a register/RSVP button using `class="btn-primary"`

```html
### Event Name

<table class="not-prose" style="border-collapse: collapse; border: none; margin-top: 0.5rem; margin-bottom: 0.5rem;">
  <tr>
    <td style="vertical-align: top; border: none;">
      <img src="/photos/..." alt="..." width="250px" />
    </td>
    <td style="vertical-align: middle; padding-left: 20px; border: none;">
      <ul style="list-style-type: none; padding-left: 0;">
        <li>Date & Time: ...</li>
        <li>Venue Name</li>
        <li>Address line</li>
        <li>City, State ZIP</li>
      </ul>
    </td>
  </tr>
</table>

Event description paragraph.
```

## Finding Source Content

When a section needs real content pulled from the site rather than invented, use these locations:

- **Upcoming events**: `src/content/meetups/<year>/<YYYYMMDD>*.md` — the leading `<YYYYMMDD>` in the filename is the event date. Filter to files dated after this issue's `publishDate` to find events still upcoming at send time; frontmatter (`title`, `dateTime`, `endDate`, `location`, `url`, `partnerEvent`, `partnerOrganization`, `slug`) has everything needed for the event table or Partner Events entry (partner events are the ones with `partnerEvent: true`).
- **Latest podcast episode**: `src/content/post/coffeewithcompbio/` — the most recently dated file (filename prefix `YYYYMMDD`) is the latest episode; its frontmatter (`title`, `excerpt`, `slug`) and body give the description and Spotify/Apple links for the podcast section.
- **A specific blog post**: if the user names a file directly (e.g. `src/content/post/20260821_post_Isha.mdx`), read that file's frontmatter (`title`, `slug`, `authors`, `image`) and body for the Blog Spotlight section instead of searching.

## Step 1 — Identify the File

If not already clear from context, ask which issue (e.g. by issue number) is being edited.

## Step 2 — Write or Revise Section Content

Apply the conventions above to any section the user wants written or changed. Do not touch the three boilerplate closing sections (`Get Involved`, `Executive Board`, `Social Media`) unless the user explicitly mentions a Slack invite update or other adjustment to `Get Involved`/`Social Media`.

**Executive Board is special** — in `.mdx` issues (008+), it renders live via `<ExecutiveBoard />` (`~/components/newsletter/ExecutiveBoard.astro`), which sources the current board directly from `exec` in `src/config/components/team.js`. It never needs manual edits — a board change is fixed by updating `team.js`, not the newsletter. Never replace it with a static image, and never add `<ExecutiveBoard />` to a plain `.md` issue (component imports only work in `.mdx` — see the `add-newsletter` command for why). Older issues (001–007) are `.md` and still use the static image; leave them as-is unless asked to migrate one.

## Step 3 — Verify Before Publishing

Before finalizing, confirm:

- Every `##` heading has a matching TOC entry, and every TOC entry points to a heading that exists
- The three boilerplate sections are present, in order, at the end of the file, and listed in the TOC (`Get Involved` and `Social Media` verbatim; `Executive Board` as the `import ExecutiveBoard ...` + `<ExecutiveBoard />` component usage for `.mdx` issues, or the static image for legacy `.md` issues)
- Every internal `boston-wib.org` link has the correct `utm_campaign` for this issue

## Step 4 — Freeze the Executive Board Snapshot (`.mdx` issues only, final step before sending)

Only do this once, right when the issue is truly ready to publish/send — not on every content edit. Until then, leave the bare `<ExecutiveBoard />` in place so it keeps tracking the live board while the issue is still a draft (the board can change during the drafting period). This gives each published issue a historical record of who was on the board at send time, per the user's request — see Local Norm 23 in `AGENTS.md`.

1. Get the current board data:
   ```bash
   node -e "import('./src/config/components/team.js').then(({ exec }) => console.log(JSON.stringify(exec.members.map(m => ({ name: m.name, avatar: m.avatar, title: m.title })), null, 2)))"
   ```
2. Write the output to a new sibling file, `src/content/newsletter/issue-{NNN}-execboard.json`.
3. In the issue's Executive Board section, change:
   ```mdx
   import ExecutiveBoard from '~/components/newsletter/ExecutiveBoard.astro';

   <ExecutiveBoard />
   ```
   to:
   ```mdx
   import ExecutiveBoard from '~/components/newsletter/ExecutiveBoard.astro';
   import execBoardSnapshot from './issue-{NNN}-execboard.json';

   <ExecutiveBoard members={execBoardSnapshot} />
   ```

## Step 5 — Run Prettier

```bash
npx prettier --write src/content/newsletter/issue-{NNN}.mdx src/content/newsletter/issue-{NNN}-execboard.json
```

(Use `.md` instead of `.mdx`, and skip the JSON file, if editing one of the legacy issues 001–007.)

## Step 6 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-newsletter-{issue}
git add src/content/newsletter/issue-{NNN}.mdx src/content/newsletter/issue-{NNN}-execboard.json
# If you uploaded a hero image:
git add public/photos/<your_image_name>
git push -u origin add-newsletter-{issue}
```
