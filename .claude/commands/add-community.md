Add a new partner community to the BWIB website. Communities include organizations, networks, local chapters, and online groups in bioinformatics and related fields. The community will be created as a Markdown file in `src/content/partnerCommunities/`.

## Step 1 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**
- `name` — organization name
- `description` — clear description of the organization's mission and activities
- `website` — organization's website URL
- `focus` — list of topic tags (e.g. `networking`, `computational-biology`, `bioinformatics`, `biotech`, `data-science`, `python`, `open-source`)
- `category` — must be one of:
  - `bioinformatics`
  - `biotech`
  - `data-science`
- `location` — use `"Global"` for worldwide organizations, or specify region (e.g. `"Boston, MA"`, `"Global with a Boston Chapter"`)
- `female` — `true` if the organization is women-focused; `false` otherwise
- `boston` — `true` if the organization meets in the Boston area; `false` otherwise

## Step 2 — Determine File Path

- Derive a kebab-case filename from the organization name (e.g. `PyLadies` → `pyladies.md`, `Women in Data Science` → `women-in-data-science.md`)
- File path: `src/content/partnerCommunities/{filename}.md`

## Step 3 — Create the File

```yaml
---
name: '...'
description: '...'
website: 'https://...'
focus:
  - '...'
category: '...'
location: '...'
female: false
boston: false
---
```

The body below the frontmatter should be left empty.

## Step 4 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-community-{kebab-name}
git add src/content/partnerCommunities/{filename}.md
git push -u origin add-community-{kebab-name}
```

Note: No prettier step is needed for community files (frontmatter-only files with no body).
