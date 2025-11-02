import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { SITE } from 'astrowind:config';

export const GET = async () => {
  // Get all future events (upcoming events only)
  const futureEvents = (
    await getCollection('event', ({ data }: CollectionEntry<'event'>) => new Date(data.dateTime) >= new Date())
  ).sort((a, b) => a.data.dateTime.valueOf() - b.data.dateTime.valueOf());

  const rss = await getRssString({
    title: `${SITE.name}'s Events`,
    description: 'Stay updated with our upcoming events and meetups',
    site: import.meta.env.SITE,

    items: futureEvents.map((event) => ({
      link: `${import.meta.env.SITE}/events/${event.id}`,
      title: event.data.title,
      description: `Join us on ${event.data.dateTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })} at ${event.data.location.join(', ')}`,
      pubDate: event.data.dateTime,
      categories: event.data.tags || [],
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
