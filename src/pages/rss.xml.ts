import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { marked } from 'marked';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { getPermalink } from '~/utils/permalinks';

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
        const bodyHtml = await marked.parse(post.body);
        const content = post.data.excerpt
          ? `<p><em>${post.data.excerpt}</em></p>\n\n${bodyHtml}`
          : bodyHtml;
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
