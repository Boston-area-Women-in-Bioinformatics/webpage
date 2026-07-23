---
name: edit-newsletter
description: Write, revise, or finalize the body content of a BWIB newsletter issue (files under src/content/newsletter/) for publication. Use this whenever the user wants to add or edit a section in a newsletter draft, apply TOC/anchor formatting, add UTM-tagged links, format register/podcast buttons or an events table, or get a newsletter ready to send. If the issue file doesn't exist yet, use the add-newsletter command first to generate the outline, then come back to this skill for the content.
---

Write or revise the body content of an existing newsletter issue in `src/content/newsletter/` and prepare it for publication. If the issue file doesn't exist yet, use `/add-newsletter` first to generate the outline.

## Formatting Conventions

Apply these when writing or revising section content:

- **Table of contents**: links use `#anchor-id`; each `##` section gets `<div id="..."></div>` immediately after the heading. Every `##` heading must have a corresponding TOC entry.
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

- **Podcast/Audio "Listen" buttons** — do NOT use `btn-primary` (blue). Use inline styles with the site's accent purple (`#6d28d9`) to distinguish podcast CTAs from event registration buttons. Include the 🎙️ emoji.

  ```html
  <a
    href="https://boston-wib.org/blog/coffeewithcompbio/s2-eN?utm_source=newsletter&utm_medium=email&utm_campaign=a-coffee-with-compbio"
    style="display:inline-block; padding:0.75rem 1.5rem; border-radius:9999px; background-color:#6d28d9; color:#ffffff; font-weight:600; text-decoration:none;"
    >🎙️ Listen on our Site</a
  >
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
