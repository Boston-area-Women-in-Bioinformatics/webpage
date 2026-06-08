Add a new team member to the BWIB website. This updates `src/config/components/team.js` and the relevant committee file in `src/content/committees/`.

## Step 1 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**

- `name` — full name (first and last)
- `title` — role title(s). If the person holds multiple roles, separate them with `&` (e.g., `Treasurer & Finance Committee Chair`). This is how `Team.astro` splits roles onto separate lines.
- `committee` — which committee they belong to. Options: `advocacy`, `bioinformatics-sisters`, `career-sponsorship`, `communications`, `events`, `finance`, `nominating-governance`, `podcast`. Ask if unclear.
- `role` — are they a **chair/co-chair** (goes in `exec`) or a **committee member** (goes in `team`)?

**Optional (omit if not provided):**

- `linkedin` — LinkedIn profile URL
- `nameLink` — personal website or LinkedIn URL to link the name (defaults to LinkedIn if provided)
- `website` — personal website URL
- `github` — GitHub profile URL
- `bluesky` — Bluesky profile URL (full URL, e.g. `https://bsky.app/profile/handle.bsky.social`)
- `avatar` — filename for the headshot in `public/team/` (e.g. `jane_doe.jpg`). If not provided, suggest a filename based on their name using lowercase with underscores.

## Step 2 — Determine placement

- **`exec` array** — use when the title includes Chair, Co-chair, President, Vice President, Treasurer, Secretary, or Board member.
- **`team` array** — use for all other committee members.

## Step 3 — Build the `team.js` entry

Add a new entry object to the correct array in `src/config/components/team.js`. Place it near other members of the same committee. Use this structure, omitting any optional fields the user did not provide:

```js
// First Last
{
  name: 'First Last',
  nameLink: 'https://...',        // omit if not provided
  title: 'Role Title',
  avatar: '/team/filename.jpg',
  social: {
    website: 'https://...',       // omit if not provided
    linkedin: 'https://...',      // omit if not provided
    github: 'https://...',        // omit if not provided
    bluesky: 'https://...',       // omit if not provided
  },
},
```

If `social` ends up empty (no links provided), still include the `social: {}` key.

## Step 4 — Update the committee file

Open the matching file in `src/content/committees/{committee-id}.md`:

- If the person is a **chair/co-chair**, add their name to the `chairs` list in the frontmatter.
- Otherwise, add their name to the `members` list.

Names must match the `name` field in `team.js` exactly — the `check:committees` script does strict matching.

## Step 5 — Run Prettier and validation

```bash
npx prettier --write src/config/components/team.js
npx prettier --write src/content/committees/{committee-id}.md
npm run check:committees
```

If `check:committees` reports a mismatch, fix the name so it matches exactly in both files.

## Step 6 — Output instructions for the user

Print the following for the user to run (do not run automatically):

```
# Add headshot to public/team/ then run the resize script:
./scripts/resize-team-images.sh

# Stage and push:
git checkout -b add-team-{member-name}
git add src/config/components/team.js
git add src/content/committees/{committee-id}.md
git add public/team/<headshot-filename>
git push -u origin add-team-{member-name}
```

Remind the user to upload their headshot to `public/team/` before running the resize script and committing. The resize script caps images at 500×500px while preserving aspect ratio.
