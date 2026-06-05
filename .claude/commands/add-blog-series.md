Add a new blog post series to the BWIB website. A series groups multiple related blog posts under a shared card on category pages. Individual posts still appear separately on the main blog and in search results.

The series metadata file lives in `src/content/series/`.

## Step 1 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**
- `title` — series title. This must match the `series:` field in every post that belongs to this series (exact string match).
- `description` — short description of what the series covers, shown on the series card
- `image` — path to the series cover image (e.g. `/blog_images/your-series-image.png`)
- `imageAlt` — alt text describing the image's *purpose*, not its appearance. Do not include "image" or "logo".

**Optional (omit if not provided):**
- `imageFit` — `cover` (default) or `contain`. Use `contain` for infographics or diagrams that should not be cropped.
- `defaultOrder` — `asc` (oldest first) or `desc` (newest first, default)

## Step 2 — Determine File Path

- Derive the slug from the title: lowercase, spaces replaced with hyphens (e.g. `Biobank Intro Series` → `biobank-intro-series.md`)
- File path: `src/content/series/{slug}.md`

## Step 3 — Create the File

Write the file using only the fields that were provided.

```yaml
---
title: '...'
description: '...'
image: '/blog_images/...'
imageAlt: '...'
imageFit: cover
defaultOrder: desc
---
```

The body below the frontmatter should be left empty.

## Step 4 — Run Prettier

```bash
npx prettier --write src/content/series/{slug}.md
```

## Step 5 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-series-{slug}
git add src/content/series/{slug}.md
# If you uploaded a cover image:
git add public/blog_images/<your_image_name>
git push -u origin add-series-{slug}
```

## Step 6 — Remind the User

Tell the user that each blog post in this series needs a `series: '{title}'` field in its frontmatter (using the exact title string from this series file). They can use `/add-blog-post` to create those posts.
