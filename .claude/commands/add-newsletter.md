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

## Required Boilerplate Sections

The following three sections **must always appear at the end of every newsletter**, in this order, copied verbatim (update only if the user provides changes):

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

Also add all three sections to the TOC at the top of the newsletter body:

```markdown
- [Get Involved](#get-involved)
- [Executive Board](#exec-board)
- [Social Media](#social-media)
```

> **Note:** These sections are copied from the most recent issue. If the user mentions a board change, Slack invite link update, or other adjustment, apply it before writing the file — otherwise use the boilerplate exactly as above.

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
