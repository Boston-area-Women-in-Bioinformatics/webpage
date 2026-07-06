Generate a new newsletter issue **outline** as a Markdown file in `src/content/newsletter/` — frontmatter, a table-of-contents skeleton, and the required boilerplate closing sections. This only scaffolds the file; use the `edit-newsletter` skill afterward to write the section content and prepare the issue for publication.

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

Also ask what content sections this issue will cover (e.g. "Events on the Horizon", "Member Spotlight", "President's Letter"). The user can add, rename, or remove sections later — this just seeds the outline.

## Step 3 — Determine File Path

File path: `src/content/newsletter/issue-{NNN}.md`  
Zero-pad the issue number to 3 digits (e.g. issue 7 → `issue-007.md`).

## Step 4 — Create the File

Write the frontmatter using only the fields that were provided (omit unsupplied optional fields; no placeholder comments). Then write the body skeleton:

- A table of contents: one `- [Section](#anchor)` entry per planned content section, followed by entries for the three required boilerplate sections (`Get Involved`, `Executive Board`, `Social Media`)
- One empty `## Section Name` heading + `<div id="anchor"></div>` per planned content section, left for the author to fill in during editing
- The three required boilerplate sections below, copied verbatim (these must appear at the end of every newsletter, in this order):

```markdown
## Get Involved

<div id="get-involved"></div>

Boston Women in Bioinformatics runs entirely on volunteer energy, and we're always looking for passionate people to join us. From organizing events and producing the podcast to managing finances and advocating for equity in the field, there's a place for every skill set. Learn more at [boston-wib.org/about/committees](https://boston-wib.org/about/committees?utm_source=newsletter&utm_medium=email&utm_campaign=resource-page)

---

<div id="exec-board"></div>

## 🏛️ Executive Board

![Headshots of the Boston Women in Bioinformatics executive team. Row 1: Lorena Pantano, Immediate Past President and Founder; Yevgenia Khodor Tolan, President; Lina Faller, Vice President; Diveena Becker, Treasurer. Row 2: Minita Shah, Secretary; Katie Hughes, Board Member; Francine Camacho, Board Member; Liyang Diao, Events Committee Co-chair. Row 3: Sakina Saif, Communications Committee Co-chair; Samantha Klasfeld, Communications Committee Co-chair; Aysheh Alrfooh, Career-Sponsorship Committee Co-chair; Peili Zhang, Career-Sponsorship Committee Co-chair. Row 4: Amulya Shastry, Enabling Advocacy Committee Co-chair; Viveka Patil, Enabling Advocacy Committee Co-chair; Saba Nafees, Podcast Committee Co-chair; Sharvari Narendra, Podcast Committee Co-chair.](/team/executiveBoard_2026.png)

---

## Social Media

<div id="social-media"></div>

- **Slack:** [boston-women-bioinfo](https://join.slack.com/t/boston-women-bioinfo/shared_invite/zt-2y78bc7n7-W4TE7kuz8HGz4pzShTeZMQ)
- **Email:** [communications@boston-wib.org](mailto:communications@boston-wib.org)
- **LinkedIn:** [Boston-area Women in Bioinformatics](https://www.linkedin.com/company/boston-women-in-bioinformatics)
- **Lu.ma:** [Boston Women in Bioinformatics](https://luma.com/bwib)
- **Blue Sky** [Boston Women in Bioinformatics](https://bsky.app/profile/boston-wib.bsky.social)
- **Location:** Boston Area, Massachusetts
```

> **Note:** These sections are copied from the most recent issue. If the user mentions a board change, Slack invite link update, or other adjustment, apply it before writing the file — otherwise use the boilerplate exactly as above.

## Step 5 — Run Prettier

```bash
npx prettier --write src/content/newsletter/issue-{NNN}.md
```

## Step 6 — Hand Off

Tell the user the outline is ready at `src/content/newsletter/issue-{NNN}.md`, and that the `edit-newsletter` skill should be used next to write the section content and finalize the issue for publication.
