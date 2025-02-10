
import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'meetups'>, itemB: CollectionEntry<'meetups'>) {
    return new Date(itemB.data.groupByUrlname.pastEvents.edges.node.dateTime).getTime() - new Date(itemA.data.groupByUrlname.pastEvents.edges.node.dateTime).getTime();
}