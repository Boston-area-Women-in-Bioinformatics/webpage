#!/usr/bin/env node
/**
 * Validates that committee chairs listed in src/content/committees/*.md
 * match the chair titles in src/config/components/team.js.
 *
 * Rules:
 * - Every name listed as a chair in a committee .md must have a title
 *   containing "<CommitteeTitle> ... Chair" in team.js.
 * - Every person in team.js with "Chair" in their title must appear as a
 *   chair in the corresponding committee .md.
 *
 * Run: node scripts/check-committee-chairs.mjs
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// --- Parse committee .md files ---
const committeesDir = join(root, 'src/content/committees');
const committeeFiles = readdirSync(committeesDir).filter((f) => f.endsWith('.md'));

// Map: committee title keyword → Set of chair names
const committeeChairs = new Map(); // e.g. "Advocacy" → Set ["Amulya Shastry", "Viveka Patil"]

for (const file of committeeFiles) {
  const content = readFileSync(join(committeesDir, file), 'utf-8');
  const titleMatch = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
  const chairsMatch = content.match(/^chairs:\s*\n((?:\s+-\s+.+\n?)+)/m);

  if (!titleMatch) continue;
  if (/^hidden:\s*true\s*$/m.test(content)) continue;
  const title = titleMatch[1].trim();
  const chairs = new Set();

  if (chairsMatch) {
    for (const line of chairsMatch[1].split('\n')) {
      const name = line.replace(/^\s+-\s+['"]?(.+?)['"]?\s*$/, '$1').trim();
      if (name) chairs.add(name);
    }
  }

  committeeChairs.set(title, chairs);
}

// --- Parse team.js ---
const teamJs = readFileSync(join(root, 'src/config/components/team.js'), 'utf-8');

// Extract all { name, title } pairs
const memberRegex = /name:\s*['"`]([^'"`]+)['"`][^}]*?title:\s*['"`]([^'"`]+)['"`]/gs;
const teamMembers = [];
let match;
while ((match = memberRegex.exec(teamJs)) !== null) {
  teamMembers.push({ name: match[1].trim(), title: match[2].trim() });
}

// Find members whose title contains "Chair"
const teamChairs = teamMembers.filter((m) => /chair/i.test(m.title));

// --- Cross-check ---
const errors = [];

// 1. Every chair in team.js must appear in the matching committee .md
for (const { name, title } of teamChairs) {
  // Find which committee this title refers to (normalize hyphens/spaces for matching)
  const normalize = (s) =>
    s
      .toLowerCase()
      .replace(/\s*&\s*/g, ' and ')
      .replace(/[-\s]+/g, ' ');
  const matched = [...committeeChairs.keys()].find((committeeTitle) =>
    normalize(title).includes(normalize(committeeTitle))
  );

  if (!matched) {
    errors.push(`team.js: "${name}" has title "${title}" referencing a committee not found in src/content/committees/`);
    continue;
  }

  const chairs = committeeChairs.get(matched);
  if (!chairs.has(name)) {
    errors.push(
      `team.js: "${name}" is listed as a chair of "${matched}" but is missing from that committee's chairs list in src/content/committees/`
    );
  }
}

// 2. Every chair in a committee .md must have a matching chair title in team.js
const normalize = (s) =>
  s
    .toLowerCase()
    .replace(/\s*&\s*/g, ' and ')
    .replace(/[-\s]+/g, ' ');
for (const [committeeTitle, chairs] of committeeChairs) {
  for (const chairName of chairs) {
    const found = teamChairs.some(
      ({ name, title }) => name === chairName && normalize(title).includes(normalize(committeeTitle))
    );
    if (!found) {
      errors.push(
        `committees/${committeeTitle}: "${chairName}" is listed as a chair but has no matching chair title in team.js`
      );
    }
  }
}

// --- Report ---
if (errors.length === 0) {
  console.log('✓ Committee chairs are consistent between team.js and committees/*.md');
  process.exit(0);
} else {
  console.error('Committee chair mismatches found:\n');
  for (const err of errors) {
    console.error(`  ✗ ${err}`);
  }
  process.exit(1);
}
