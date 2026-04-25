# AGENTS.md

Guidance for AI agents working in this repository.

---

## Codebase Map

### Tech Stack

- **Framework**: Astro 5.x (static output) + TypeScript (strict)
- **Styling**: Tailwind CSS 3 (class-based dark mode, custom theme vars)
- **Interactive components**: React 19 (`.tsx` files)
- **Content**: Astro Content Collections with Zod schemas (MDX + Markdown)
- **Path alias**: `~` → `src/` (configured in `tsconfig.json` and `vite`)

### Top-Level `src/` Layout

```
src/
├── assets/          # Static images imported by components (e.g. newsletter_header.png)
├── components/      # UI building blocks (see below)
├── content/         # Content collections — Markdown/MDX files
├── layouts/         # Page wrapper layouts
├── pages/           # File-based routes (Astro pages)
├── styles/          # Global CSS
├── utils/           # Pure TypeScript helpers
├── config.yaml      # Site-wide config (name, URL, blog/newsletter settings)
├── navigation.ts    # Header/footer nav structure — edit this to add/remove nav links
├── types.d.ts       # Shared TypeScript types (Post, Newsletter, Taxonomy, MetaData…)
└── env.d.ts         # Astro env types
```

### Entry Points

| File                                             | Role                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| `src/pages/index.astro`                          | Homepage                                                                        |
| `src/pages/[...blog]/[...page].astro`            | Blog list with search + category cards                                          |
| `src/pages/[...blog]/index.astro`                | Individual blog post                                                            |
| `src/pages/[...blog]/[category]/[...page].astro` | Category page (search + sort + series filter)                                   |
| `src/pages/[...blog]/[series]/[...page].astro`   | Series page (sort, back link varies by category)                                |
| `src/pages/[...blog]/[tag]/[...page].astro`      | Tag page                                                                        |
| `src/pages/newsletter/[...page].astro`           | Newsletter list                                                                 |
| `src/pages/newsletter/[...slug].astro`           | Individual newsletter issue                                                     |
| `src/pages/events/index.astro`                   | Events listing (past events section hidden when upcoming events exist)          |
| `src/pages/events/archive/index.astro`           | Past events archive (client-side search, sort, date range, hide-partner filter) |

### Content Collections (`src/content/config.ts`)

| Collection   | Description        | Key Fields                                                                                                                                                                                         |
| ------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `post`       | Blog posts         | `publishDate`, `updateDate`, `category`, `series`, `tags`, `authors`, `draft`, `hiddenFromFeed`, `hideHeroImage`, `imageAlt`, `imageDescription`, `imagePosition`, `url`, `listeningTime`          |
| `newsletter` | Newsletter issues  | `publishDate`, `issue`, `title`, `authors`, `imageAlt`, `imageDescription`, `imagePosition`                                                                                                        |
| `event`      | Events             | `title`, `dateTime`, `endDate`, `location`, `tags`, `image`, `imgpos`, `partnerEvent`, `partnerOrganization` — **files live in `src/content/meetups/`** (folder name differs from collection name) |
| `committees` | Committee pages    | `title`, `chairs`, `members`                                                                                                                                                                       |
| `resources`  | Resource directory | `category`, `tags`, `featured`                                                                                                                                                                     |
| `series`     | Series metadata    | `title`, `description`, `image`, `imageAlt`, `imageFit`                                                                                                                                            |

### Key Utility Files (`src/utils/`)

| File             | Role                                                                                                                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog.ts`        | All static path generators (`getStaticPathsBlogListAll`, `getStaticPathsBlogCategory`, `getStaticPathsBlogSeries`, `getStaticPathsBlogPost`, etc.), post normalization, series metadata, filtering |
| `permalinks.ts`  | URL generation — `getPermalink(slug, type)` where `type` is `'post' \| 'category' \| 'tag' \| 'series'`; also exports `BLOG_BASE`, `CATEGORY_BASE`, `TAG_BASE`, `SERIES_BASE`                      |
| `images.ts`      | Image lookup (`findImage`) and `adaptOpenGraphImages` — public paths (`/team/`, `/photos/`, `/blog_images/`, `/sponsors/`) are returned as-is with default OG dimensions, bypassing optimization   |
| `utils.ts`       | Formatting helpers (`getFormattedDate`, etc.)                                                                                                                                                      |
| `newsletter.ts`  | Newsletter-specific fetch helpers                                                                                                                                                                  |
| `frontmatter.ts` | Remark plugins: reading time, responsive tables, lazy images                                                                                                                                       |

### Components

```
src/components/
├── blog/          # Blog-specific: SinglePost, RelatedPosts, ToBlogLink, Pagination, Tags
├── ui/            # Primitives: Headline, PostListItem, PostList, PostGridItem, Button, Card, NewBadge…
├── widgets/       # Page sections: Hero, Features, BlogLatestPosts, UpcomingEvents, Contact…
├── common/        # Infra: Metadata, Analytics, ToggleTheme, Image, SocialShare
├── newsletter/    # SinglePost.astro — renders newsletter issue HTML
└── *.astro/.tsx   # Root-level: Banner, Logo, Signup, Sponsors, Quiz, EventsTable…
```

**Event-specific components:**

- `widgets/UpcomingEvents.astro` — shows the **single next upcoming event** in a hero layout; used on the homepage. Has two buttons: "Learn More" (`btn-primary`) and "Browse Events" (`btn-secondary`), wrapped in a flex container.
- `EventsTable.astro` — shows **all upcoming events** as cards on the `/events` page; past events section only renders when there are no upcoming events
- `FormattedDate.astro` — renders event dates in New York time. `isMultiDay` compares dates using `toNYDateString` (NY timezone) to avoid UTC boundary bugs. All three branches (multi-day, same-day-with-end, single) append the timezone abbreviation (EDT/EST).

### Navigation (`src/navigation.ts`)

`headerData.links` drives the top nav. Each item is either a flat link `{ text, href }` or a dropdown `{ text, href, links: [...] }`. The current top-level items are: **Home, Who we are, Resources, Newsletter, Team, Events, Media, Contact, Donate**. The **Events** dropdown currently contains: Upcoming Events, Fall Fundraiser 2026, Past Events Archive, Recorded Events. To add a link (e.g. Past Events Archive), add an entry to the relevant `links` array using `getPermalink('/events/archive')`.

### Layouts (`src/layouts/`)

`Layout.astro` → `PageLayout.astro` (most pages), `MarkdownLayout.astro` (blog posts), `EventLayout.astro`, `LandingLayout.astro`

### Configuration Files

| File                 | Role                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------ |
| `src/config.yaml`    | Blog/newsletter settings (posts per page, permalink patterns, paths)                                         |
| `astro.config.ts`    | Integrations (Tailwind, MDX, Sitemap, Icons, React), image domains                                           |
| `tailwind.config.js` | Custom colors (`primary`, `secondary`, `accent`, social colors), fonts (`font-heading`), `intersect` variant |
| `.prettierrc.cjs`    | Print width 120, single quotes, `prettier-plugin-astro`                                                      |
| `eslint.config.js`   | ESLint 9 flat config — Astro + TypeScript recommended                                                        |

### CI/CD (`.github/workflows/`)

- **`actions.yaml`**: Runs on PRs and pushes to `main` — matrix build (Node 18/20/22) + ESLint + Prettier check
- **`daily-build.yml`**: Triggers a Netlify build daily at 6 AM UTC via the Netlify build hook (keeps future-dated posts and past/upcoming event splits current)
- The site is hosted on **Netlify**, which builds and deploys automatically on push to `main`. There is no GitHub Pages deployment.

### Tests

No test suite (no Jest/Vitest/Playwright config). Quality is enforced via `astro check` (TypeScript) + ESLint + Prettier in CI.

---

## Naming Conventions

- **Pages with dynamic routes**: bracket notation, e.g. `[category]`, `[...page]`, `[series]`
- **Static path generators**: `getStaticPathsBlog*` (exported from `src/utils/blog.ts`)
- **Content files**: kebab-case filenames under `src/content/<collection>/`
- **Series slugs**: match the series frontmatter title converted to kebab-case (used in `getPermalink(slug, 'series')`)
- **Categories excluded from the main blog feed**: listed in `BLOG_EXCLUDED_CATEGORIES` in `blog.ts` (currently `['Podcast', 'Video']`). These categories are excluded from the paginated blog list but are surfaced on the homepage separately — Podcast gets its own "Latest Podcast" card, Video appears in the "Recent Media" grid alongside regular blog posts.
- **`Interview` category**: active category with its own category card on `/blog`. Card uses LinkedIn blue (`#0077b5`). Do not mark it `comingSoon`.
- **`hiddenFromFeed`**: posts that exist but should not appear in list pages (e.g. short Tuesday Tactics entries — shown only via their series card)

---

## Local Norms

1. **Update `AGENTS.md` after every file added or updated** — after adding or modifying any component, utility, script, content collection field, naming convention, or local norm, update the relevant section of this file before closing the task. Do not batch updates — write them as the changes are made. If a new frontmatter field is added or changed, also update `README.md` (see norm 2a below).
   1a. **Update `README.md` when frontmatter changes** — whenever a frontmatter field is added, removed, or its behavior changes for any content collection (`post`, `newsletter`, `event`, `series`, `committees`, `resources`), update the corresponding section in `README.md` to reflect the change.
2. **No auto-commit** — never commit unless the user explicitly asks.
3. **No force-push** — always create new commits rather than amending, especially after hook failures.
4. **`prettier` enforced** — run `npm run fix` (eslint + prettier) before committing; CI will fail otherwise.
5. **Tailwind only** — style with Tailwind classes. Avoid arbitrary CSS except for dark-mode overrides on inline-styled HTML in Markdown content (use `<style>` with `:global(.dark) ...`).
6. **`getPermalink` for all URLs** — never hardcode `/blog/...` URLs; use `getPermalink(slug, type)` from `~/utils/permalinks`.
   5a. **Public image paths in components** — `isRemoteImage` checks in `SinglePost.astro`, `PostGridItem.astro`, and `PostListItem.astro` must include `/team/` and `/photos/` so they render as plain `<img>` tags. `common/Image.astro` also bypasses `astroAsseetsOptimizer` for these paths. When adding a new `public/` subdirectory used as a blog image source, add it to all four places.
7. **Props flow through static path generators** — to pass new data to a page, add it to the `props` object in the relevant `getStaticPaths*` function in `src/utils/blog.ts`.
8. **Series back links are category-aware** — the series page reads `categorySlug` from props and renders "All Podcasts", "All Videos", or "All Categories" accordingly.
9. **Dark mode** — Tailwind `dark:` variants throughout. For inline-styled HTML in Markdown (e.g. newsletter tables), use a scoped `<style>` block with `:global(.dark) element[style*="..."] { ... !important }`.
10. **`BLOG_EXCLUDED_CATEGORIES`** — Podcast and Video posts are excluded from the main blog list and category filter but appear on their own category pages at `/blog/podcast` and `/blog/video`. On the homepage, the latest Podcast is shown in its own card (top row, right column) and Video posts appear in the "Recent Media" grid. The homepage fetches via `findLatestPosts({ count: 20 })` and splits by `category.slug`.
11. **Search data attributes** — client-side search uses `data-search` on `<li>` elements; sort uses `data-date` (milliseconds); series filter uses `data-in-series` and `data-series-card`.
12. **Archive `DEFAULT_START`** — `src/pages/events/archive/index.astro` has a hardcoded `DEFAULT_START = '2025-08-08'` used as the default "From" date. Update this when the desired default window changes. The date picker `min="2024-08-08"` is the first-ever event date and should stay fixed.
13. **Committee chair validation** — `scripts/check-committee-chairs.mjs` cross-checks that every chair in `src/content/committees/*.md` has a matching "Chair" title in `src/config/components/team.js`, and vice versa. Run with `npm run check:committees`. Committees with `hidden: true` are skipped. The script normalizes hyphens, spaces, and `&`/`and` for matching. Run this script after editing either file.
14. **Team member title line breaks** — in `src/config/components/team.js`, use `&` as the separator between multiple roles for a single person. `Team.astro` splits on `&` and renders each part on its own line. Example: `'Treasurer & Finance Committee Chair & Events Committee Co-chair'`.
15. **Newsletter issue validation** — `src/utils/newsletter.ts` throws a build error at load time if two newsletters share the same `issue` number. The `issue` field must be set manually in each newsletter's frontmatter.
16. **Member Spotlight post titles** — use `'Member Spotlight: First\u00a0Last'` (Unicode non-breaking space U+00A0 between first and last name) so the name never wraps mid-name. `SinglePost.astro` detects the `Member Spotlight:` prefix and renders "Member Spotlight:" at smaller size (`!text-2xl`) on its own line above the name.

---

## Newsletter Conventions

- Table of contents links use `#anchor-id`; each section gets `<div id="..."></div>` placed immediately after the `##` heading.
- Event tables in newsletters use `<table class="not-prose" style="...">` to escape prose plugin margins. The `not-prose` class is required — inline `margin` styles alone are overridden by Tailwind Typography.
- Register/Event Page buttons inside newsletter tables use `class="btn-primary"` on the `<a>` tag (works because `not-prose` is set on the parent table).
- UTM tags on internal links: `?utm_source=newsletter&utm_medium=email&utm_campaign=<month>-<year>`. Apply to all `boston-wib.org` links; skip external links (givebutter, luma, LinkedIn, etc.).
- `metadata.image` in blog post frontmatter does nothing — the Open Graph image is derived from the top-level `image` field, not `metadata.image`. Do not add `metadata.image` to posts.
- Newsletter `<SinglePost>` scoped styles: `[&_strong_a]:font-bold [&_a_strong]:font-bold` is applied to force bold weight on links wrapped in `**...**` since prose overrides it.

---

## Markdown Formatting Conventions (Blog Posts)

Use the following conventions consistently in blog post `.md` files:

| Element                                   | Format                               | Example                                                      |
| ----------------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| Variable/field names, IDs, numeric values | Inline code (backticks)              | `` `22420` ``, `` `1` ``, `` `-3` ``                         |
| UI tab names, button labels, page names   | Bold                                 | `**Data** tab`, `**Settings** page`, `**Check for Updates**` |
| Key domain terms being defined            | Bold (first use) or `###` subheading | `**Coding**` or `### Coding`                                 |
| File paths, code identifiers              | Inline code (backticks)              | `` `src/utils/blog.ts` ``                                    |

Inline code renders with a styled pill background (gray-100 light / slate-800 dark) via `.prose :not(pre) > code` in `tailwind.css`. The Tailwind Typography quote pseudo-elements are suppressed.

---

## Self-Correction

- **Stale code map**: If you discover that a file path, export name, or directory described above no longer exists or has moved, update the relevant section of this file immediately before proceeding with the task.
- **User corrections**: If the user corrects how work should be done in this repo (workflow, tooling preferences, naming conventions, patterns to avoid), add the correction to the **Local norms** section above so future sessions inherit it.
- **After editing this file**: Run `npm run fix` to apply Prettier formatting before proceeding.
