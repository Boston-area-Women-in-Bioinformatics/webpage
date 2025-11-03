import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { SITE, APP_NEWSLETTER } from 'astrowind:config';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_NEWSLETTER.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  // Get all published newsletters (not drafts, not future-dated)
  const newsletters = (
    await getCollection(
      'newsletter',
      ({ data }: CollectionEntry<'newsletter'>) => !data.draft && new Date(data.publishDate) <= new Date()
    )
  ).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  const rss = await getRssString({
    title: `${SITE.name}'s Newsletter`,
    description: 'Stay updated with our latest newsletters',
    site: import.meta.env.SITE,

    items: newsletters.map((newsletter) => ({
      link: getPermalink(newsletter.slug, 'post'),
      title: newsletter.data.title,
      description: newsletter.data.excerpt
        ? `<p><em>${newsletter.data.excerpt}</em></p>\n\n${newsletter.body}`
        : newsletter.body,
      pubDate: newsletter.data.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
