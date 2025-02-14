import { getCollection } from 'astro:content';

/**
 * Returns collection entries matching a value for a given field
 * @param {string} term - The field to search on such as "tags" or "author"
 * @param {string} value - The value to match such as "Popular"
 * @param {boolean} reverse - Sort with oldest posts first
 * @returns {Array<Object>}
 */
export const splitEvents = async (future = true, reverse = false) => {
  // get time at now
  const now = new Date(); // Current time

  // Call our custom getCollection() function from src/content/utils.js
  const items = await getCollection('event', true, reverse);

  // Start filtering the content collection
  return items.filter((item) => {
    // See the comments in the getTaxonomy() function
    const values = [];
    if (future) {
      if (new Date(item.data['dateTime']).getTime() > now.getTime()) {
        values.push(...item.data['dateTime']);
      }
    } else {
      if (new Date(item.data['dateTime']).getTime() < now.getTime()) {
        values.push(...item.data['dateTime']);
      }
    }

    // Does this collection entry contain the value we're looking for?
    return values;
  });
};
