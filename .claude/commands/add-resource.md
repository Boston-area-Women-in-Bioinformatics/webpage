Add a new resource to the BWIB website. Resources include courses, tutorials, tools, documentation, and other learning materials relevant to bioinformatics and computational biology. The resource will be created as a Markdown file in `src/content/resources/`.

## Step 1 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**
- `title` — name of the resource
- `description` — 1–2 sentence description of what the resource offers
- `url` — link to the resource
- `category` — must be one of the existing options:
  - `bioinformatics`
  - `machine-learning`
  - `professional-development`
  - `coding`
  - `math`
  - `biology`
  
  If the resource doesn't fit any of these, tell the user they'll need to add a new category to `src/content/config.ts` (the `resourcesCollection` definition, `z.enum([...])` around line 142) before the file can be used. Use kebab-case for any new category value.

- `tags` — list of relevant tags (e.g. `Python`, `genomics`, `visualization`)
- `featured` — `true` only for exceptional resources; defaults to `false`

## Step 2 — Determine File Path

- Derive a camelCase or kebab-case filename from the resource title (e.g. `StatQuest with Josh Starmer` → `statquest.md`, `Real Python` → `realpython.md`)
- File path: `src/content/resources/{filename}.md`

## Step 3 — Create the File

```yaml
---
title: '...'
description: '...'
url: 'https://...'
category: '...'
tags:
  - '...'
featured: false
---
```

The body below the frontmatter should be left empty unless the user provides additional markdown content for the resource page.

## Step 4 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-resource-{kebab-resource-name}
git add src/content/resources/{filename}.md
git push -u origin add-resource-{kebab-resource-name}
```

Note: No prettier step is needed for resource files (frontmatter-only files with no body).
