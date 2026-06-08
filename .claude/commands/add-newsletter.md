Add a new newsletter issue to the BWIB website. The newsletter will be created as a Markdown file in `src/content/newsletter/`.

## Step 1 — Check Existing Issue Numbers

Before asking for any information, read the files in `src/content/newsletter/` and list all existing `issue:` values. The new issue number must not duplicate any existing one — warn the user if there is a conflict.

## Step 2 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**

- `issue` — issue number as an integer (must be unique)
- `title` — name of the newsletter issue (typically `'Issue NNN: Month YYYY'`)
- `publishDate` — publication date in `YYYY-MM-DD` format (no time or timezone)

**Optional (omit from file if not provided):**

- `excerpt` — one-sentence description shown on the newsletter listing page
- `image` — path to the hero image (e.g. `/photos/my-image.jpg`)
- `imageAlt` — alt text describing the image's _purpose_, not its appearance. Do not include "image" or "photo".
- `imageDescription` — caption or citation shown below the hero image
- `imagePosition` — `top`, `center` (default), `bottom`, `left`, `right`, or `contain`
- `authors` — list of authors, each with `name` and optional `url` (LinkedIn profile)
- `metadata.title` — page title shown in Google search results (overrides newsletter title)
- `metadata.description` — meta description (keep under two sentences; often matches `excerpt`)

## Step 3 — Determine File Path

File path: `src/content/newsletter/issue-{NNN}.md`  
Zero-pad the issue number to 3 digits (e.g. issue 7 → `issue-007.md`).

## Step 4 — Create the File

Write the file using only the fields that were provided. Omit optional fields the user did not supply. Do not include placeholder comments in the final file.

```yaml
---
publishDate: YYYY-MM-DD
issue: N
title: 'Issue NNN: Month YYYY'
excerpt: '...'
image: '/photos/...'
imageAlt: '...'
imageDescription: '...'
imagePosition: center
authors:
  - name: '...'
    url: 'https://www.linkedin.com/in/...'
metadata:
  title: '...'
  description: '...'
---
MARKDOWN BODY (newsletter content goes here)
```

**Newsletter formatting conventions** (apply these to the body):

- Table of contents links: `#anchor-id` anchors, each `##` section gets `<div id="..."></div>` immediately after the heading. Every `##` heading must have a corresponding TOC entry — verify this before finalizing the file.
- UTM tags on internal `boston-wib.org` links: `?utm_source=newsletter&utm_medium=email&utm_campaign=<campaign>`. Ask the developer for the `utm_campaign` value before writing the file. Naming conventions:
  - Lowercase, hyphens only (no spaces or underscores)
  - Pick a name that describes the initiative and keep it consistent across every channel so GA can aggregate across sources
  - Recurring events: `byte-and-bite`, `bits-and-brews`
  - One-off events: `networking-without-the-ick`, `lightning-talks-2026`, `festival-of-genomics-2026`
  - Newsletter issues: `newsletter-005`
  - Resource/committee pages (`boston-wib.org/about/committees/*`): `resource-page`
  - Podcast: `a-coffee-with-compbio`
- Register/Event Page buttons: use `class="btn-primary"` on `<a>` tags inside `not-prose` tables

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

## Step 5 — Run Prettier

```bash
npx prettier --write src/content/newsletter/issue-{NNN}.md
```

## Step 6 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-newsletter-{issue}
git add src/content/newsletter/issue-{NNN}.md
# If you uploaded a hero image:
git add public/photos/<your_image_name>
git push -u origin add-newsletter-{issue}
```
