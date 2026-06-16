# Boston-Area Women in Bioinformatics Website

<img src="src/assets/favicons/WIB_Logo.png" alt="Logo for Boston-Area Women in Bioinformatics" width="100">

## Quick Links

- [Using Claude Code Skills (Recommended)](#using-claude-code-skills)
- [Manual Instructions](MANUAL.md)
- [Getting started with the website (Mac)](#getting-started-with-the-website-mac)
- [Getting started without write-access](#getting-started-without-write-access)
- [Image Organization](#image-organization)

## Using Claude Code Skills

This repository includes [Claude Code](https://claude.ai/code) skills that automate common content tasks — adding events, blog posts, newsletters, and more. Instead of manually creating files and filling in frontmatter by hand, you describe what you want and Claude creates the file for you.

### Install Claude Code

1. **Install the CLI:**

   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Authenticate** — you'll need an Anthropic API key or a Claude.ai Pro/Max subscription:

   ```bash
   claude
   ```

   Follow the prompts to log in.

3. **Open a terminal in this repository** and run `claude` to start a session.

### Available Skills

| Skill                | What it does                                                                       |
| :------------------- | :--------------------------------------------------------------------------------- |
| `/add-event`         | Creates a new event page in `src/content/meetups/`                                 |
| `/add-blog-post`     | Creates a new blog post in `src/content/post/`                                     |
| `/add-blog-series`   | Creates a new series metadata file in `src/content/series/`                        |
| `/add-newsletter`    | Creates a new newsletter issue in `src/content/newsletter/`                        |
| `/add-archive-video` | Adds a video to the recorded meetings archive                                      |
| `/add-resource`      | Adds a new resource to `src/content/resources/`                                    |
| `/add-community`     | Adds a new partner community to `src/content/partnerCommunities/`                  |
| `/add-team-member`   | Adds a new team member to `team.js` and the relevant committee file                |
| `/update-fundraiser` | Sets up the annual fundraiser page for a new year (theme, sponsors, speakers, nav) |

### How to use a skill

1. Open Claude Code in this repository: `claude`
2. Type the skill name, e.g. `/add-event`
3. Claude will ask for required and optional fields, create the file, run Prettier, and print the git commands to commit and push your branch

You can also pass details upfront:

```
/add-event Byte & Bite on September 15 at 6pm at 123 Main St, Boston
```

After Claude creates the file, upload any images to the appropriate `public/` subdirectory (see [Image Organization](#image-organization)) and run the git commands Claude prints.

---

## Getting started with the website (Mac)

- Install homebrew :

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

- Add homebrew to path

```
echo >> /Users/yaseswini/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/yaseswini/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

- Install `npm`

```
brew install npm
```

- Install `astro`

```
npm install astro
```

## Getting started without write-access

1. On github, fork the repository to create a copy of it on GitHub under your account.

2. Clone your forked repository

```
git clone https://github.com/{your-username}/webpage.git
```

3. Be in main branch if not already
   `git checkout main`

4. Pull any updated to the main branch
   `git pull`

5. Create a new branch with a descriptive name: `git checkout -b {new-branch}`

## Image Organization

Store images in the `public/` directory following these conventions:

- **General photos** → `public/photos/` (organize event photos by date, e.g., `photos/2024-03-15-workshop/`)
- **Team member headshots** → `public/team/`
- **Sponsor logos** → `public/sponsors/`
- **Blog post images** → `public/blog_images/`

When organizing event photos, create dated subdirectories within `public/photos/` using the format `YYYY-MM-DD-event-name` (e.g., `public/photos/2024-06-20-summer-meetup/`). This keeps our photo archive organized chronologically and makes it easy to find images from specific events.

Logos are found in the `src/assets/favicons` directory.

Icon images are found in the `src/assets/images` directory.

## Website Template: 🚀 AstroWind

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Most *starred* & *forked* Astro theme in 2022 & 2023_. 🌟

**AstroWind** is a free and open-source template to make your website using **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<br>

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.png" alt="AstroWind Theme Screenshot">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/astrowind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/astrowind)
[![Stars](https://img.shields.io/github/stars/onwidget/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)
[![Forks](https://img.shields.io/github/forks/onwidget/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Upcoming: AstroWind 2.0 – We Need Your Vision!](#-upcoming-astrowind-20--we-need-your-vision)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

### Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

### 🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!

We're embarking on an exciting journey with **AstroWind 2.0**, and we want you to be a part of it! We're currently taking the first steps in developing this new version and your insights are invaluable. Join the discussion and share your feedback, ideas, and suggestions to help shape the future of **AstroWind**. Let's make **AstroWind 2.0** even better, together!

[Share Your Feedback in Our Discussion!](https://github.com/onwidget/astrowind/discussions/392)

<br>

### Getting started with AstroWind

**AstroWind** tries to give you quick access to creating a website using [Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/astrowind/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/onwidget/astrowind) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/onwidget/astrowind)

> 🧑‍🚀 **Seasoned astronaut?** Delete/edit this file `README.md`. Update `src/config.yaml` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:3000`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

### Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

### Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

### Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

### License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
