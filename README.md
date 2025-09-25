# Boston-Area Women in Bioinformatics Website

<img src="src/assets/favicons/WIB_Logo.png" align="right"
     alt="Logo for Boston-Area Women in Bioinformatics" width="100">

## Add a new event

Here are the steps to add a new event with git:

```
Clone the repository locally :
git clone https://github.com/Boston-area-Women-in-Bioinformatics/webpage.git
# List branches in a github repos :
git branch
# Be in main branch if not already
git checkout main
# Create a new branch :
git checkout -b <new-branch-name>
```

After you enter a new branch, you need to create a markdown file in the `src/content/meetups` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the event parameters. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The metadata should include fields like `title`, `dateTime`, `location`, `url`, `image`, `tags`, and `imgpos`. The `imgpos` parameter is for the css on the main events page. See https://tailwindcss.com/docs/object-position for options. `tags` are not currently in use, but may be in the future.

To add an image, upload it to the `public/photos` directory of your cloned repository. The image should be referenced in the markdown file using the `image` field in the metadata.

After creating the markdown file and uploading the image, you can run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/meetups/{newevent}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/meetups/{newevent}.md
#  Commit new changes
git push -u origin <new-branch-name>
```

## Add a new blog post

Here are the steps to add a new blogpost with git:

```
Clone the repository locally :
git clone https://github.com/Boston-area-Women-in-Bioinformatics/webpage.git
# List branches in a github repos :
git branch
# Be in main branch if not already
git checkout main
# Create a new branch :
git checkout -b <new-branch-name>
```

After you enter a new branch, you need to create a markdown file in the `src/content/post` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the parameters for the blog post. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The parameters include:

- `publishDate`: date when the blog post was published, in ISO format (YYYY-MM -DDTHH:mm:ssZ)
- `title`: name of the blog post
- `slug`: a unique identifier for the blog post, used in the URL
- `excerpt`: appears on the website front page to describe the post
- `image`: path to the image that will be displayed on the blog post page
- author information:
  - `author`: name of the SINGLE author of the blog post
  - `authorUrl`: URL to the author's LinkedIn profile
  - `authors`: list of authors if there are multiple authors, each with their name and LinkedIn URL
- `category`: category of the blog post, e.g., "Podcast", "Deep Dive", "Quick Take"
- `tags`: list of tags associated with the blog post, e.g., "bioinformatics", "career-advice", "software-engineering"
- `metadata`: additional metadata for SEO, including `title`, `description`, and `canonical` URL
- `listeningTime`: length of time of podcast written out (optional, only for podcast posts)

To add an image, upload it to the `public/photos` directory of your cloned repository. The image should be referenced in the markdown file using the `image` field in the metadata.

After creating the markdown file and uploading the image, you can run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/post/{newblog}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/post/{newblog}.md
#  Commit new changes
git push -u origin <new-branch-name>
```

## Add a new newsletter

Here are the steps to add a new blogpost with git:

```
Clone the repository locally :
git clone https://github.com/Boston-area-Women-in-Bioinformatics/webpage.git
# List branches in a github repos :
git branch
# Be in main branch if not already
git checkout main
# Create a new branch :
git checkout -b <new-branch-name>
```

After you enter a new branch, you need to create a markdown file in the `src/content/newsletter` directory.

The markdown file should follow a specific format. In between the top two `---` you must fill out the parameters for the blog post. Everything below the second `---` can be in markdown format. Look at the other markdown files for reference. The parameters include:

- `publishDate`: date when the blog post was published, in ISO format (YYYY-MM -DDTHH:mm:ssZ)
- `title`: name of the blog post
- `excerpt`: appears on the website front page to describe the post
- `image`: path to the image that will be displayed on the blog post page
- `authors`: list of authors if there are multiple authors, each with their name and LinkedIn URL
- `metadata`: additional metadata for SEO, including `title`, `description`, and `canonical` URL

To add an image, upload it to the `public/photos` directory of your cloned repository. The image should be referenced in the markdown file using the `image` field in the metadata.

After creating the markdown file and uploading the image, you can run the following commands to format the files and commit your changes:

```
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/content/post/{newblog}.md
# Stage the changes to commit :
git add /public/photos/<your_image_name>
git add src/content/post/{newblog}.md
#  Commit new changes
git push -u origin <new-branch-name>
```

### Newsletter template

To modify the newsletter template, go to `src/components/newsletter/SinglePost.astro`.

If you want to add a header image that appears on every newsletter, you can add it in the `SinglePost.astro` file just below the author information section.

If you want to add parameters to the newsletter markdown files, such as "issue number", you will need to also do the following:

- add the new parameter to `newsLetterCollection` in `src/content/config.ts`
- modify `getNormalizedNewsletter` function in `src/utils/newsletter.ts` to handle the new parameter.

## Add a video to the meetings archive

```
Clone the repository locally :
git clone https://github.com/Boston-area-Women-in-Bioinformatics/webpage.git
# List branches in a github repos :
git branch
# Be in main branch if not already
git checkout main
# Create a new branch :
git checkout -b <new-branch-name>
## Edit the team.js  file (src/config/components/archive_meetings.js)
## to populate the video information. For the URL use the URL for embedding the video.
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/config/components/archive_meetings.js
# Stage the changes to commit (Assuming you are in the git folder)
git add ./src/config/components/archive_meetings.js
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin <new-branch-name>
Collapse
```

## Add a team member

```
Clone the repository locally :
git clone https://github.com/Boston-area-Women-in-Bioinformatics/webpage.git
# List branches in a github repos :
git branch
# Be in main branch if not already
git checkout main
# Create a new branch :
git checkout -b <new-branch-name>
# Do the following to upload your image and edit team.js file
## 1. Upload your image in this location of your cloned repo `/public/team/`
## 2. Edit the team.js  file (src/config/components/team.js) to populate your information
# Run 'npx --prettier' to fix any astro specific formatting issues
npx prettier --write src/config/components/team.js
# Stage the changes to commit (Assuming you are in the git folder)
git add ./public/team/<your_image_name>
git add ./src/config/components/team.js
#  Commit new changes
git commit -m "<Add committ message>"
git push -u origin <new-branch-name>
Collapse
```

## Update the banner that appears on every page

To add or remove the banner, go to `src/layouts/PageLayout.astro` and add or remove the following lines respectively:

```
<slot name="banner">
  <Banner client:load />
</slot>
```

To edit the banner, go to `src/components/Banner.jsx` and edit the text inside the `<p>` tag. You can also change the text and link in the `<a>` tag to point to a different page.

### Project structure

This project has the following folders and files:

```
/
├── public/
│   ├── decapcms/
│   │   ├── config.yml
│   │   ├── index.html
│   ├── team/'
│   │   │   └── ...
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── config/
│   │   ├── components/
│   │   │   ├── team.js
│   │   ├── site/
│   │   │   ├── blog.js
│   │   │   ├── config.js
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── env.d.ts
│   ├── navigation.js
│   └── types.d.ts
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

### Website images

Most images can be placed in the `public/` directory if they do not require any transformation.

Team member photos/avatars for the team page should go in `public/team/`. To add a member to the team page, please modify `src/config/components/team.js` and set the "avatar" setting to the path of the member's photo. The path should be in the format `/team/{image_name}`. See other entries as examples. You can also use an image from another website as an avatar image.

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
