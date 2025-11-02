import { getRssString } from '@astrojs/rss';

import { SITE, APP_NEWSLETTER } from 'astrowind:config';
import { fetchNewsletters } from '~/utils/newsletter';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_NEWSLETTER.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const newsletters = await fetchNewsletters();

  const rss = await getRssString({
    title: `${SITE.name}'s Newsletter`,
    description: 'Stay updated with our latest newsletters',
    site: import.meta.env.SITE,

    items: newsletters.map((newsletter) => ({
      link: getPermalink(newsletter.permalink, 'post'),
      title: newsletter.title,
      description: newsletter.excerpt,
      pubDate: newsletter.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
