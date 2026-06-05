Add a new event to the BWIB website. The event will be created as a Markdown file in `src/content/meetups/YYYY/`.

## Step 1 — Gather Information

Ask the user for the following. Collect all required fields before proceeding. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**
- `title` — name of the event
- `dateTime` — start date and time in New York time, format `YYYY-MM-DDTHH:mm` (e.g. `2026-09-15T18:00`). No timezone offset — it is applied automatically.
- `location` — one or more address lines (e.g. `["123 Main St", "Boston, MA"]`)
- `image.src` — path to the event image (e.g. `/photos/my-event.jpg`)
- `image.alt` — alt text describing the image's *purpose*, not its appearance. Do not include the words "image" or "photo".
- `tags` — list of tags (can be an empty list `[]`)

**Optional (ask if not provided; omit from file if not provided):**
- `endDate` — end date and time, same format as `dateTime`. Required if the event spans multiple days or the end time should display.
- `url` — registration or event link (e.g. a Lu.ma URL)
- `data_luma_event_id` — Lu.ma event ID for embedding a registration button
- `imgpos` — Tailwind object-position class. Defaults to `object-top object-cover`. Common options: `object-center object-cover`, `object-bottom object-cover`, `object-contain`.
- `cost` — ticket price in dollars as a number (omit for free events)
- `partnerEvent` — `true` if hosted by a partner org rather than BWIB directly. Defaults to `false`.
- `partnerOrganization` — name of the partner org (only include when `partnerEvent: true`)
- `slug` — human-readable URL identifier. Follow these conventions:
  - Events that occur once a year: `fall-fundraiser-2026`
  - Events that occur multiple times a year: `byte-and-bite-may-2026`
  - Omit to use the filename instead.

## Step 2 — Determine File Path

- Extract the year and date from `dateTime` (e.g. `2026-09-15T18:00` → year `2026`, date `20260915`)
- File path: `src/content/meetups/{YYYY}/{YYYYMMDD}_event.md`
- If the user provides a custom slug or the event has a distinctive name, use that in the filename instead of `_event` (e.g. `20260915_byte-and-bite.md`)

## Step 3 — Create the File

Write the file using only the fields that were provided. Omit any optional fields the user did not supply. Do not include placeholder comments in the final file.

```yaml
---
title: 'TITLE'
dateTime: 'YYYY-MM-DDTHH:mm'
endDate: 'YYYY-MM-DDTHH:mm'
image:
  src: '/photos/...'
  alt: '...'
location:
  - '...'
  - '...'
url: 'https://...'
data_luma_event_id: '...'
imgpos: 'object-top object-cover'
tags:
  - '...'
partnerEvent: false
partnerOrganization: '...'
cost: 10
slug: 'event-name-month-year'
---

MARKDOWN BODY (event description goes here)
```

## Step 4 — Run Prettier

```bash
npx prettier --write src/content/meetups/{YYYY}/{YYYYMMDD}_event.md
```

## Step 5 — Output Git Instructions

Print the following commands for the user to run (do not run them automatically):

```
git checkout -b add-event-YYYY-MM-DD
git add src/content/meetups/{YYYY}/{YYYYMMDD}_event.md
# If you uploaded an image:
git add public/photos/<your_image_name>
git push -u origin add-event-YYYY-MM-DD
```

Remind the user to upload their event image to `public/photos/` before committing (see Image Organization in README.md).
