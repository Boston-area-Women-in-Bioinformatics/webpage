import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { marked } from 'marked';

import { SITE } from 'astrowind:config';

// Helper function to remove import statements from markdown/MDX
const cleanImports = (content: string): string => {
  return content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '').trim();
};

export const GET = async () => {
  // Get all future events (upcoming events only)
  const futureEvents = (
    await getCollection('event', ({ data }: CollectionEntry<'event'>) => new Date(data.dateTime) >= new Date())
  ).sort((a, b) => a.data.dateTime.valueOf() - b.data.dateTime.valueOf());

  const rss = await getRssString({
    title: `${SITE.name}'s Events`,
    description: 'Stay updated with our upcoming events and meetups',
    site: import.meta.env.SITE,

    items: await Promise.all(
      futureEvents.map(async (event) => {
        const cleanedBody = event.body ? cleanImports(event.body) : '';
        const bodyHtml = cleanedBody ? await marked.parse(cleanedBody) : '';
        const content = `<p><strong>When:</strong> ${event.data.dateTime.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        })}</p>
<p><strong>Where:</strong> ${event.data.location.join(', ')}</p>
${bodyHtml}`;
        return {
          link: `${import.meta.env.SITE}/events/${event.id}`,
          title: event.data.title,
          content,
          pubDate: event.data.dateTime,
          categories: event.data.tags || [],
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
