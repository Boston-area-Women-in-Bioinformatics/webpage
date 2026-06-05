Add a new video to the BWIB recorded meetings archive. This edits `src/config/components/archive_meetings.js` by appending an entry to the `videos` array.

Note: This skill handles the archive page only. If you also want a `category: Video` blog post (e.g. for a Work Life Decoded episode), use `/add-blog-post` separately.

## Step 1 — Gather Information

Ask the user for the following. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**
- YouTube video URL or video ID — if a full URL is provided, extract the video ID (the part after `v=` or the last path segment for `youtu.be` links). Example: `https://www.youtube.com/watch?v=YO5VTjImlck` → ID is `YO5VTjImlck`.
- `title` — title of the recorded meeting/talk
- `description` — 1–3 sentence description of the video content

## Step 2 — Derive Embed Fields

From the video ID, construct:
- `url`: `https://www.youtube.com/embed/{id}`
- `thumbnail`: `https://i.ytimg.com/vi/{id}/hqdefault.jpg`

## Step 3 — Edit the Archive File

Read `src/config/components/archive_meetings.js`. Append the new entry to the **end** of the `videos` array (before the closing `]`), following the existing entry format exactly:

```js
{
  id: 'VIDEO_ID',
  title: '...',
  url: 'https://www.youtube.com/embed/VIDEO_ID',
  thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg',
  description: '...',
},
```

Add a comment line above the entry with the video title, matching the style of existing comments in the file:
```js
// Title of the Talk or Event
```

## Step 4 — Run Prettier

```bash
npx prettier --write src/config/components/archive_meetings.js
```

## Step 5 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-video-YYYY-MM-DD
git add src/config/components/archive_meetings.js
git push -u origin add-video-YYYY-MM-DD
```

Use today's date for `YYYY-MM-DD` in the branch name.
