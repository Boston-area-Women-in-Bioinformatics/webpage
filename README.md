# Boston-Area Women in Bioinformatics Website

<img src="src/assets/favicons/WIB_Logo.png" alt="Logo for Boston-Area Women in Bioinformatics" width="100">

## Quick Links

- [Getting started with the website (Mac)](#getting-started-with-the-website-mac)
- [Getting started without write-access](#getting-started-without-write-access)
- [Add a new event](#add-a-new-event)
- [Modify event page template](#modify-event-page-template)
- [Add a new blog post](#add-a-new-blog-post)
- [Add a new newsletter](#add-a-new-newsletter)
- [Modify Newsletter template](#modify-newsletter-template)
- [Add a video to the meetings archive](#add-a-video-to-the-meetings-archive)
- [Add a team member](#add-a-team-member)
- [Adding a Resource](#adding-a-resource)
- [Adding a Community](#adding-a-community)
- [Adding and Editing Committees](#adding-and-editing-committees)
- [Update the banner](#update-the-banner-that-appears-on-every-page)
- [Image Organization](#image-organization)

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

## Add a new event

Here are the steps to add a new event with git:

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-event-{date}` (e.g., `add-event-2024-03-15`).

### 2. Create a markdown file in the `src/content/meetups` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the event parameters. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The metadata should include fields like `title`, `dateTime`, `location`, `url`, `image`, `tags`, and `imgpos`. The `imgpos` parameter is for the css on the main events page. See https://tailwindcss.com/docs/object-position for options. `tags` are not currently in use, but may be in the future.

Note that for the `dateTime` field, the time zone should be specified as either `-05:00` for Eastern Standard Time (EST) or `-04:00` for Eastern Daylight Time (EDT), depending on the date of the event. If the event is in December (EST) use -05:00, but if an event is during Daylight Saving Time (roughly March-November), you should use -04:00 for EDT.

### 3. Add an image

Upload image to the `public/photos` directory of your cloned repository (see [Image Organization](#image-organization)). The image should be referenced in the markdown file using the `image` field in the metadata.

### 4. Push changes to website

After creating the markdown file and uploading the image, you can run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/meetups/{newevent}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/meetups/{newevent}.md
#  Commit new changes
git push -u origin add-event-{date}
```

## Modify event page template

To modify the event page template, go to `src/layouts/EventLayout.astro`.

If you want to add parameters to the newsletter markdown files, such as "data-luma-event-id", you will need to also do the following:

- add the new parameter to `eventCollection` in `src/content/config.ts`
- add the new parameter to the `EventLayout` object in `src/pages/events/[...slug].astro`

## Add a new blog post

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-blog-{slug}` where slug matches the unique identifier you'll use for the blog post URL.

### 2. Create a blog post in markdown

After you enter a new branch, you need to create a markdown file in the `src/content/post` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the parameters for the blog post. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The parameters include:

- `publishDate`: date when the blog post was published, in ISO format (YYYY-MM -DDTHH:mm:ssZ)
- `title`: name of the blog post
- `slug`: a unique identifier for the blog post, used in the URL
- `excerpt`: appears on the website front page to describe the post
- `image`: path to the image that will be displayed on the blog post page
- `imageAlt`: alt-text to show when images are not rendered or when user is using a screen reader. This text should describe the image's purpose in under 125 characters
- `imagePosition`: set to `top`, `center`(default), or `bottom` to set where the content of the image is most important.
- author information:
  - `author`: name of the SINGLE author of the blog post
  - `authorUrl`: URL to the author's LinkedIn profile
  - `authors`: list of authors if there are multiple authors, each with their name and LinkedIn URL
- `category`: category of the blog post, e.g., "Podcast", "Deep Dive", "Quick Take"
- `tags`: list of tags associated with the blog post, e.g., "bioinformatics", "career-advice", "software-engineering"
- `metadata`: additional metadata for SEO, including `title`, `description`, and `canonical` URL
- `listeningTime`: length of time of podcast written out (optional, only for podcast posts)

### 3. Add an image (optional)

Upload image to the `public/blog_images` directory of your cloned repository (see [Image Organization](#image-organization)). The image should be referenced in the markdown file using the `image` field in the metadata.

### 4. Push changes to website

Run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/post/{newblog}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/post/{newblog}.md
#  Commit new changes
git push -u origin add-blog-{slug}
```

## Add a new newsletter

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-newsletter-{issue}` (e.g., `add-newsletter-15`).

### 2. Create a newsletter in markdown

After you enter a new branch, you need to create a markdown file in the `src/content/newsletter` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the parameters for the blog post. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The parameters include:

- `publishDate`: date when the blog post was published, in ISO format (YYYY-MM -DDTHH:mm:ssZ)
- `title`: name of the blog post
- `excerpt`: appears on the website front page to describe the post
- `image`: path to the image that will be displayed on the blog post page
- `authors`: list of authors if there are multiple authors, each with their name and LinkedIn URL
- `metadata`: additional metadata for SEO, including `title`, `description`, and `canonical` URL

### 3. Add an image

Upload image to the `public/photos` directory of your cloned repository (see [Image Organization](#image-organization)). The image should be referenced in the markdown file using the `image` field in the metadata.

### 4. Push changes to website

After creating the markdown file and uploading the image, you can run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/post/{newblog}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/post/{newblog}.md
#  Commit new changes
git push -u origin add-newsletter-{issue}
```

## Modify Newsletter template

To modify the newsletter template, go to `src/components/newsletter/SinglePost.astro`.

If you want to add a header image that appears on every newsletter, you can add it in the `SinglePost.astro` file just below the author information section.

If you want to add parameters to the newsletter markdown files, such as "issue number", you will need to also do the following:

- add the new parameter to `newsLetterCollection` in `src/content/config.ts`
- add the new parameter to the `Newsletter` type in `src/types.d.ts`
- modify `getNormalizedNewsletter` function in `src/utils/newsletter.ts` to handle the new parameter.

## Add a video to the meetings archive

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-video-{date}` (e.g., `add-video-2024-03-15`).

### 2. Edit the archive_meetings java script file

Edit the archive_meetings.js file at `src/config/components/archive_meetings.js`. For the URL use the URL for embedding the video.

### 4. Push changes to website

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/config/components/archive_meetings.js
# Stage the changes to commit (Assuming you are in the git folder)
git add ./src/config/components/archive_meetings.js
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin add-video-{date}
```

## Add a team member

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-team-{member_name}`.

### 2. Add team member image

Add a headshot of team member image in this location of your cloned repo `/public/team/` (you may want to crop it to match the rest of the photos).

**Important:** After adding the image, run the resize script to optimize it for the web. This prevents pixelation issues and reduces file sizes:

```bash
./scripts/resize-team-images.sh
```

This script automatically resizes any images larger than 500px to a maximum of 500x500 while preserving aspect ratio. Images already 500px or smaller are left unchanged.

### 3. Edit the team java script file

Edit the team.js file (`src/config/components/team.js`) to populate your information

- There are two different dictionary objects in this file. Fill in your information in the correct dictionary by using either ctrl+f for `const exec` or `const team`
  - `exec` = execuctive team (co-chairs and chairs of committees)
  - `team` = committee members

### 4. Edit committee page

Validate or add team member name to the correct committee markdown file in the `src/content/committees/` directory.

### 5. Format the team.js and markdown file

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/config/components/team.js
npx prettier --write src/pages/about/committees.astro
```

### 6. Stage the files and commit the changes

```
# Stage the changes to commit (Assuming you are in the git folder)
git add ./public/team/<your_image_name>
git add ./src/config/components/team.js
git add ./src/pages/about/committees.astro
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin add-team-{member_name}
```

## Adding a Resource

Resources include courses, tutorials, tools, documentation, and other learning materials relevant to bioinformatics and computational biology.

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-resource-{new_resource}`.

### 2. Create a new file

Navigate to `src/content/resources/` and create a new markdown file. Name it based on the resource name or descriptively.

### 3. Add frontmatter

Copy this template and fill in the details:

```yaml
---
title: 'Name of the Resource'
description: 'A concise description of what this resource offers (1-2 sentences)'
url: 'https://example.com'
category: 'courses' # Options: courses, tutorials, tools, documentation
tags:
  - 'Python'
  - 'genomics'
  - 'visualization'
featured: false # Set to true only for exceptional resources
---
```

### 4. Push to website

1. Commit your changes: `git commit -m "Add {new_resource}"`
2. Push to your fork: `git push -u origin add-resource-{new_resource}`
3. Open a Pull Request with a clear description

## Adding a Community

Communities include organizations, networks, local chapters, and online groups in bioinformatics and related fields.

### 1. Open a new branch locally

See [Getting started without write-access](#getting-started-without-write-access). Give branch name the format `add-community-{new_community}`.

### 2. Create a new file

Navigate to `src/content/communities/` and create a new markdown file:

```
r-ladies.md
women-in-data.md
pyladies.md
```

### 3. Add frontmatter

Copy this template:

```yaml
---
name: 'Organization Name'
description: "A clear description of the organization's mission and activities"
website: 'https://example.org'
focus: # same as tags
  - networking
  - computational-biology
  - bioinformatics
  - biotech
category: 'bioinformatics' # Options: bioinformatics, biotech, data-science
location: 'Boston, MA' # Use "Global" if worldwide, or specify region
female: false # Set to true if organization is women-focused
boston: false # Set to true if organization meets in Boston
---
```

### 4. Push to website

1. Commit your changes: `git commit -m "Add {new_community}"`
2. Push to your fork: `git push -u origin add-community-{new_community}`
3. Open a Pull Request with a clear description

## Adding and Editing Committees

**To edit committee information:**

1. Add or edit the markdown files in `src/content/committees/ ` directory.
2. Update the frontmatter for metadata (chairs, members, description)
3. Edit the markdown content below the frontmatter for detailed information
4. Format the new committee file and stage changes for git

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/committees/{newcommittee}.md
# Stage the changes to commit :
git add src/content/committees/{newcommittee}.md
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin <new-branch-name>
```

**To add a new committee**:

1. Create a new .md file in `src/content/committees/` directory.
2. Add frontmatter with required fields (id, title, description, chairs)
3. Add markdown content
4. Format the new committee file and stage changes for git

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/committees/{newcommittee}.md
# Stage the changes to commit :
git add src/content/committees/{newcommittee}.md
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin <new-branch-name>
```

## Update the banner that appears on every page

To add or remove the banner, go to `src/layouts/PageLayout.astro` and add or remove the following lines respectively:

```
<slot name="banner">
  <Banner client:load />
</slot>
```

To edit the banner, go to `src/components/Banner.jsx` and edit the text inside the `<p>` tag. You can also change the text and link in the `<a>` tag to point to a different page.

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
