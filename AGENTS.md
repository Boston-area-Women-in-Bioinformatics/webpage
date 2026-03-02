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
| `post`       | Blog posts         | `publishDate`, `category`, `series`, `tags`, `authors`, `draft`, `hiddenFromFeed`                                                                                                                  |
| `newsletter` | Newsletter issues  | `publishDate`, `issue`, `title`, `authors`                                                                                                                                                         |
| `event`      | Events             | `title`, `dateTime`, `endDate`, `location`, `tags`, `image`, `imgpos`, `partnerEvent`, `partnerOrganization` — **files live in `src/content/meetups/`** (folder name differs from collection name) |
| `committees` | Committee pages    | `title`, `chairs`, `members`                                                                                                                                                                       |
| `resources`  | Resource directory | `category`, `tags`, `featured`                                                                                                                                                                     |
| `series`     | Series metadata    | `title`, `description`, `image`, `imageFit`                                                                                                                                                        |

### Key Utility Files (`src/utils/`)

| File             | Role                                                                                                                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog.ts`        | All static path generators (`getStaticPathsBlogListAll`, `getStaticPathsBlogCategory`, `getStaticPathsBlogSeries`, `getStaticPathsBlogPost`, etc.), post normalization, series metadata, filtering |
| `permalinks.ts`  | URL generation — `getPermalink(slug, type)` where `type` is `'post' \| 'category' \| 'tag' \| 'series'`; also exports `BLOG_BASE`, `CATEGORY_BASE`, `TAG_BASE`, `SERIES_BASE`                      |
| `images.ts`      | Image lookup (`findImage`)                                                                                                                                                                         |
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

- `widgets/UpcomingEvents.astro` — shows the **single next upcoming event** in a hero layout; used on the homepage
- `EventsTable.astro` — shows **all upcoming events** as cards on the `/events` page; past events section only renders when there are no upcoming events

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
- **`publish.yaml`**: Deploys to GitHub Pages on push to `main` and on a **daily cron at 8 AM US Eastern** (this keeps future/past event splits current without a manual deploy); publishes from `./dist`

### Tests

No test suite (no Jest/Vitest/Playwright config). Quality is enforced via `astro check` (TypeScript) + ESLint + Prettier in CI.

---

## Naming Conventions

- **Pages with dynamic routes**: bracket notation, e.g. `[category]`, `[...page]`, `[series]`
- **Static path generators**: `getStaticPathsBlog*` (exported from `src/utils/blog.ts`)
- **Content files**: kebab-case filenames under `src/content/<collection>/`
- **Series slugs**: match the series frontmatter title converted to kebab-case (used in `getPermalink(slug, 'series')`)
- **Categories excluded from the main blog feed**: listed in `BLOG_EXCLUDED_CATEGORIES` in `blog.ts` (currently `['Podcast', 'Video']`). These categories are excluded from the paginated blog list but are surfaced on the homepage separately — Podcast gets its own "Latest Podcast" card, Video appears in the "Recent Media" grid alongside regular blog posts.
- **`hiddenFromFeed`**: posts that exist but should not appear in list pages (e.g. short Tuesday Tactics entries — shown only via their series card)

---

## Local Norms

1. **No auto-commit** — never commit unless the user explicitly asks.
2. **No force-push** — always create new commits rather than amending, especially after hook failures.
3. **`prettier` enforced** — run `npm run fix` (eslint + prettier) before committing; CI will fail otherwise.
4. **Tailwind only** — style with Tailwind classes. Avoid arbitrary CSS except for dark-mode overrides on inline-styled HTML in Markdown content (use `<style>` with `:global(.dark) ...`).
5. **`getPermalink` for all URLs** — never hardcode `/blog/...` URLs; use `getPermalink(slug, type)` from `~/utils/permalinks`.
6. **Props flow through static path generators** — to pass new data to a page, add it to the `props` object in the relevant `getStaticPaths*` function in `src/utils/blog.ts`.
7. **Series back links are category-aware** — the series page reads `categorySlug` from props and renders "All Podcasts", "All Videos", or "All Categories" accordingly.
8. **Dark mode** — Tailwind `dark:` variants throughout. For inline-styled HTML in Markdown (e.g. newsletter tables), use a scoped `<style>` block with `:global(.dark) element[style*="..."] { ... !important }`.
9. **`BLOG_EXCLUDED_CATEGORIES`** — Podcast and Video posts are excluded from the main blog list and category filter but appear on their own category pages at `/blog/podcast` and `/blog/video`. On the homepage, the latest Podcast is shown in its own card (top row, right column) and Video posts appear in the "Recent Media" grid. The homepage fetches via `findLatestPosts({ count: 20 })` and splits by `category.slug`.
10. **Search data attributes** — client-side search uses `data-search` on `<li>` elements; sort uses `data-date` (milliseconds); series filter uses `data-in-series` and `data-series-card`.
11. **Archive `DEFAULT_START`** — `src/pages/events/archive/index.astro` has a hardcoded `DEFAULT_START = '2025-08-08'` used as the default "From" date. Update this when the desired default window changes. The date picker `min="2024-08-08"` is the first-ever event date and should stay fixed.

---

## Self-Correction

- **Stale code map**: If you discover that a file path, export name, or directory described above no longer exists or has moved, update the relevant section of this file immediately before proceeding with the task.
- **User corrections**: If the user corrects how work should be done in this repo (workflow, tooling preferences, naming conventions, patterns to avoid), add the correction to the **Local norms** section above so future sessions inherit it.
