import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { marked } from 'marked';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { getPermalink } from '~/utils/permalinks';

// Helper function to remove import statements from markdown/MDX
const cleanImports = (content: string): string => {
  return content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '').trim();
};

// Helper function to convert relative image paths to absolute URLs
const processImages = (html: string, siteUrl: string): string => {
  // Convert relative image paths to absolute URLs
  return html.replace(/src="\/([^"]+)"/g, `src="${siteUrl}/$1"`).replace(/src='\/([^']+)'/g, `src='${siteUrl}/$1'`);
};

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  // Get all published posts (not drafts, not future-dated)
  const posts = (
    await getCollection(
      'post',
      ({ data }: CollectionEntry<'post'>) => !data.draft && new Date(data.publishDate) <= new Date()
    )
  ).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  const rss = await getRssString({
    title: `${SITE.name}'s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: await Promise.all(
      posts.map(async (post) => {
        const cleanedBody = cleanImports(post.body);
        const bodyHtml = await marked.parse(cleanedBody);
        const processedHtml = processImages(bodyHtml, import.meta.env.SITE);

        // Add featured image at the top if it exists
        let content = '';
        if (post.data.image) {
          const imageUrl =
            typeof post.data.image === 'string'
              ? post.data.image.startsWith('http')
                ? post.data.image
                : `${import.meta.env.SITE}${post.data.image}`
              : post.data.image;
          const altText = post.data.imageAlt || post.data.title;
          content += `<img src="${imageUrl}" alt="${altText}" style="max-width: 100%; height: auto;" />\n\n`;
        }

        content += post.data.excerpt ? `<p><em>${post.data.excerpt}</em></p>\n\n${processedHtml}` : processedHtml;

        return {
          link: getPermalink(post.slug, 'post'),
          title: post.data.title,
          content,
          pubDate: post.data.publishDate,
          categories: post.data.tags || [],
        };
      })
    ),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
