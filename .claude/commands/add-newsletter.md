Add a new newsletter issue to the BWIB website. The newsletter will be created as a Markdown file in `src/content/newsletter/`.

## Step 1 — Check Existing Issue Numbers

Before asking for any information, read the files in `src/content/newsletter/` and list all existing `issue:` values. The new issue number must not duplicate any existing one — warn the user if there is a conflict.

## Step 2 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**

- `issue` — issue number as an integer (must be unique)
- `title` — name of the newsletter issue (typically `'Issue NNN: Month YYYY'`)
- `publishDate` — publication date and time in New York time with timezone offset:
  - EDT (Mar second Sunday → Nov first Saturday): `YYYY-MM-DDTHH:mm:ss-04:00`
  - EST (Nov first Sunday → Mar second Saturday): `YYYY-MM-DDTHH:mm:ss-05:00`

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
publishDate: YYYY-MM-DDTHH:mm:ss-04:00
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

- Table of contents links: `#anchor-id` anchors, each section gets `<div id="..."></div>` after the `##` heading
- Event tables: use `<table class="not-prose" style="...">` — the `not-prose` class is required
- Register/Event Page buttons: use `class="btn-primary"` on `<a>` tags inside `not-prose` tables
- UTM tags on internal `boston-wib.org` links: `?utm_source=newsletter&utm_medium=email&utm_campaign=<month>-<year>`

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
