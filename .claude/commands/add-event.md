Add a new event to the BWIB website. The event will be created as a Markdown file in `src/content/meetups/YYYY/`.

## Before You Start — Set Up Luma First (if using Luma for registration)

If this event will use Luma for registration, **set up the Luma event before creating the website page** so you have the URL and embed ID ready.

When creating the Luma event, add the following **registration questions** so we can collect demographic data for sponsors and use it to improve future events and outreach:

1. **Pronouns** — free text or dropdown (e.g. she/her, he/him, they/them, prefer not to say)
2. **Career stage** — dropdown:
   - Undergraduate student
   - Graduate student (Masters or PhD)
   - Postdoctoral researcher
   - Early career professional (0–5 years)
   - Mid-career professional (5–15 years)
   - Senior professional (15+ years)
   - Other / prefer not to say
3. **Company or institution** — free text
4. **How did you hear about this event?** — dropdown or checkboxes:
   - BWiB newsletter
   - BWiB social media
   - Word of mouth / colleague
   - LinkedIn
   - Luma
   - Harvard Biotech Newsletter
   - Other email listserv
   - Other
5. **Would you like to subscribe to the BWiB newsletter?**
   - Already subscribed
   - Yes, add me
   - No thanks

Once the Luma event is created, copy the **registration URL** and the **Luma event embed ID** (found in the Luma event settings under "Embed") — you'll need both below.

---

## Step 1 — Gather Information

Ask the user for the following. Collect all required fields before proceeding. Use `$ARGUMENTS` as context if the user already provided some details.

**Required:**

- `title` — name of the event
- `dateTime` — start date and time in New York time, format `YYYY-MM-DDTHH:mm` (e.g. `2026-09-15T18:00`). No timezone offset — it is applied automatically.
- `location` — one or more address lines (e.g. `["123 Main St", "Boston, MA"]`)
- `image.src` — path to the event image (e.g. `/photos/my-event.jpg`)
- `image.alt` — alt text describing the image's _purpose_, not its appearance. Do not include the words "image" or "photo".
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
MARKDOWN BODY (event description goes here — see prompts below)
```

When writing the markdown body, ask the user for the following and incorporate the answers into the description:

**What attendees will get out of it:**

- What will attendees learn, experience, or walk away with?
- Who is this event for? (e.g. students, early-career professionals, anyone in bioinformatics)

**Logistics (for in-person events):**

- How do attendees get there? Include public transit directions (T stop, bus lines), parking notes, or building entrance instructions if the venue is hard to find.
- Is there a check-in process, name badge, or anything to look for at the door?

**What to prepare beforehand:**

- Anything attendees should bring (laptop, notebook, student ID for discounts, etc.)?
- Any pre-reading, pre-registration steps, or software to install ahead of time?
- Any dietary or accessibility accommodations to be aware of?

Omit any of these sections if the information is not applicable or not yet known. Don't add placeholder text — only write what the user confirms.

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
