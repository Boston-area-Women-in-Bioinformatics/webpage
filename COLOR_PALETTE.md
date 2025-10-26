# Boston Women in Bioinformatics - Color Palette Guide

This document describes the complete color system for the Boston Women in Bioinformatics website. All colors are centrally managed through CSS custom properties (design tokens) and Tailwind utility classes.

## Table of Contents
- [Quick Reference](#quick-reference)
- [Design Tokens Reference](#design-tokens-reference)
- [Tailwind Utility Classes](#tailwind-utility-classes)
- [Usage Examples](#usage-examples)
- [How to Update Colors](#how-to-update-colors)
- [Dark Mode](#dark-mode)

---

## Quick Reference

### Brand Colors
| Color | Light Mode | Dark Mode | Hex/RGB | Use Case |
|-------|-----------|-----------|---------|----------|
| **Primary** | Blue | Blue | `rgb(1 97 239)` / `#0161EF` | Primary actions, links, accents |
| **Secondary** | Dark Blue | Dark Blue | `rgb(1 84 207)` / `#0154CF` | Secondary actions, hover states |
| **Accent** | Purple | Purple | `rgb(109 40 217)` / `#6D28D9` | Highlights, special elements |

### Sponsorship Tier Colors
| Tier | Hex | Use Case |
|------|-----|----------|
| **Gold** | `#d4af37` | Gold sponsor badges, borders, text |
| **Silver** | `#a3a3a3` | Silver sponsor badges, borders, text |

### Social Media Brand Colors
| Platform | Hex | Color |
|----------|-----|-------|
| **LinkedIn** | `#0077b5` | LinkedIn Blue |
| **Instagram** | `#e4405f` | Instagram Pink/Red |
| **Facebook** | `#39569c` | Facebook Blue |
| **Twitter** | `#00acee` | Twitter Blue |
| **Bluesky** | `#00acee` | Bluesky Blue |
| **GitHub** | `rgb(17 24 39)` (light) / `rgb(203 213 225)` (dark) | Dark Gray / Light Gray |

### Semantic Colors
| Color | Light Mode | Use Case |
|-------|-----------|----------|
| **Success** | `rgb(34 197 94)` / Green | Success messages, positive actions |
| **Warning** | `rgb(251 146 60)` / Orange | Warnings, caution messages |
| **Error** | `#e74c3c` / Red | Error messages, destructive actions |
| **Info** | `rgb(59 130 246)` / Blue | Information, tips |

---

## Design Tokens Reference

All colors are defined in [`src/components/CustomStyles.astro`](src/components/CustomStyles.astro) as CSS custom properties.

### Brand Colors
```css
--aw-color-primary: rgb(1 97 239);
--aw-color-secondary: rgb(1 84 207);
--aw-color-accent: rgb(109 40 217);
```

### Sponsorship Tier Colors
```css
--aw-color-tier-gold: #d4af37;
--aw-color-tier-silver: #a3a3a3;
```

### Social Media Brand Colors
```css
--aw-color-social-linkedin: #0077b5;
--aw-color-social-instagram: #e4405f;
--aw-color-social-facebook: #39569c;
--aw-color-social-twitter: #00acee;
--aw-color-social-bluesky: #00acee;
--aw-color-social-github: rgb(17 24 39); /* Light mode */
```

### Semantic Colors
```css
--aw-color-success: rgb(34 197 94);
--aw-color-warning: rgb(251 146 60);
--aw-color-error: #e74c3c;
--aw-color-info: rgb(59 130 246);
```

### Text Colors
```css
/* Light Mode */
--aw-color-text-heading: rgb(0 0 0);        /* Black */
--aw-color-text-default: rgb(16 16 16);     /* Near Black */
--aw-color-text-muted: rgb(16 16 16 / 66%); /* Muted Gray */
--aw-color-text-dark: #2c3e50;              /* Dark Blue-Gray */

/* Dark Mode */
--aw-color-text-heading: rgb(247, 248, 248);    /* Near White */
--aw-color-text-default: rgb(229 236 246);      /* Light Blue-Gray */
--aw-color-text-muted: rgb(229 236 246 / 66%);  /* Muted Light */
--aw-color-text-dark: rgb(203 213 225);         /* Slate 300 */
```

### Background Colors
```css
/* Light Mode */
--aw-color-bg-page: rgb(255 255 255);      /* White */
--aw-color-bg-page-dark: rgb(3 6 32);      /* Very Dark Blue */

/* Dark Mode */
--aw-color-bg-page: rgb(3 6 32);           /* Very Dark Blue */
```

### Border Colors
```css
/* Light Mode */
--aw-border-color: #ddd;               /* Light Gray */
--aw-border-color-accent: #3498db;     /* Blue */

/* Dark Mode */
--aw-border-color: rgb(51 65 85);      /* Slate 700 */
--aw-border-color-accent: rgb(59 130 246); /* Blue 500 */
```

---

## Tailwind Utility Classes

All design tokens are exposed as Tailwind utility classes via [`tailwind.config.js`](tailwind.config.js).

### Usage in Components

#### Brand Colors
```html
<!-- Text -->
<p class="text-primary">Primary blue text</p>
<p class="text-secondary">Secondary dark blue text</p>
<p class="text-accent">Accent purple text</p>

<!-- Background -->
<div class="bg-primary">Primary blue background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-accent">Accent background</div>

<!-- Border -->
<div class="border-primary">Primary blue border</div>
```

#### Sponsorship Tier Colors
```html
<!-- Gold Tier -->
<span class="text-gold">Gold Sponsor</span>
<div class="border-gold border-4">Gold sponsor box</div>

<!-- Silver Tier -->
<span class="text-silver">Silver Sponsor</span>
<div class="border-silver border-4">Silver sponsor box</div>

<!-- Using CSS classes (defined in global.css) -->
<span class="gold">Gold text with bold</span>
<div class="gold-border">Gold border box</div>
```

#### Social Media Colors
```html
<!-- LinkedIn -->
<a href="#" class="text-social-linkedin hover:text-gray-900 dark:hover:text-white">
  LinkedIn Icon
</a>

<!-- Instagram -->
<a href="#" class="text-social-instagram hover:text-gray-900 dark:hover:text-white">
  Instagram Icon
</a>

<!-- Facebook -->
<a href="#" class="text-social-facebook hover:text-gray-900 dark:hover:text-white">
  Facebook Icon
</a>

<!-- Twitter -->
<a href="#" class="text-social-twitter hover:text-gray-900 dark:hover:text-white">
  Twitter Icon
</a>

<!-- GitHub -->
<a href="#" class="text-social-github hover:text-gray-900 dark:hover:text-white">
  GitHub Icon
</a>
```

#### Text Colors (Semantic)
```html
<p class="text-default">Default body text</p>
<p class="text-muted">Muted secondary text</p>
```

---

## Usage Examples

### Example 1: Button with Brand Colors
```astro
<!-- Primary Button -->
<button class="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full">
  Click Me
</button>

<!-- Accent Button -->
<button class="bg-accent hover:bg-purple-700 text-white px-6 py-3 rounded-full">
  Special Action
</button>
```

### Example 2: Sponsor Card
```astro
<div class="border-4 border-gold bg-white rounded-xl p-4 shadow-lg">
  <h3 class="text-gold font-bold">Gold RNA Sponsor</h3>
  <img src="/sponsors/logo.png" alt="Sponsor Logo" />
</div>
```

### Example 3: Social Media Links (Team Component)
```jsx
{/* LinkedIn */}
<a href={member.social.linkedin}
   className="text-social-linkedin hover:text-gray-900 dark:hover:text-white">
  <LinkedInIcon />
</a>

{/* Instagram */}
<a href={member.social.instagram}
   className="text-social-instagram hover:text-gray-900 dark:hover:text-white">
  <InstagramIcon />
</a>
```

### Example 4: Alert Messages (Semantic Colors)
```astro
<!-- Success -->
<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
  Success message
</div>

<!-- Error -->
<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
  Error message
</div>

<!-- Warning -->
<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
  Warning message
</div>
```

### Example 5: Using CSS Variables Directly
```astro
<style>
  .custom-element {
    color: var(--aw-color-primary);
    background-color: var(--aw-color-bg-page);
    border-color: var(--aw-border-color);
  }

  .gold-sponsor-badge {
    color: var(--aw-color-tier-gold);
    border: 2px solid var(--aw-color-tier-gold);
  }
</style>
```

---

## How to Update Colors

### Changing an Existing Color

1. Open [`src/components/CustomStyles.astro`](src/components/CustomStyles.astro)
2. Find the CSS variable you want to change (e.g., `--aw-color-primary`)
3. Update the color value in **both** `:root` (light mode) and `.dark` (dark mode) sections if applicable
4. Save the file - the change will apply site-wide automatically

**Example**: Changing the primary brand color from blue to teal
```css
/* Before */
--aw-color-primary: rgb(1 97 239);  /* Blue */

/* After */
--aw-color-primary: rgb(20 184 166); /* Teal */
```

### Adding a New Color

1. **Add the CSS variable** in [`src/components/CustomStyles.astro`](src/components/CustomStyles.astro):
   ```css
   :root {
     /* ... existing colors ... */
     --aw-color-custom: #ff5733; /* Your new color */
   }

   .dark {
     /* ... existing colors ... */
     --aw-color-custom: #ff8866; /* Dark mode variant if needed */
   }
   ```

2. **Expose it to Tailwind** in [`tailwind.config.js`](tailwind.config.js):
   ```js
   colors: {
     // ... existing colors ...
     'custom': 'var(--aw-color-custom)',
   }
   ```

3. **Use it in components**:
   ```html
   <div class="text-custom bg-custom border-custom">
     New custom color!
   </div>
   ```

### Best Practices

✅ **DO**:
- Always use CSS custom properties (design tokens) for colors
- Use Tailwind utility classes (`text-primary`, `bg-gold`, etc.)
- Update colors in `CustomStyles.astro` only
- Test in both light and dark modes
- Document new colors in this file

❌ **DON'T**:
- Use hardcoded hex values like `#0161EF` directly in components
- Use inline styles with color values
- Define colors in multiple places
- Forget to add dark mode variants when needed

---

## Dark Mode

The site uses Tailwind's class-based dark mode strategy (`darkMode: 'class'` in `tailwind.config.js`).

### How Dark Mode Works

1. Dark mode is toggled by adding/removing the `.dark` class on the root HTML element
2. CSS variables in `.dark { }` override the `:root` values
3. Tailwind's `dark:` variant applies styles only in dark mode

### Dark Mode Color Guidelines

**Text Colors**:
- Light mode: Use darker colors (black, dark gray)
- Dark mode: Use lighter colors (white, light gray, slate)
- **Standard**: `text-gray-900 dark:text-slate-100`

**Background Colors**:
- Light mode: White or light backgrounds
- Dark mode: Dark blue (`rgb(3 6 32)`) or dark slate
- **Standard**: `bg-white dark:bg-slate-900`

**Borders**:
- Light mode: `#ddd` (light gray)
- Dark mode: `rgb(51 65 85)` (slate-700)
- **Standard**: `border-gray-300 dark:border-slate-700`

### Dark Mode Examples

```html
<!-- Text -->
<p class="text-gray-800 dark:text-slate-100">
  Automatically switches in dark mode
</p>

<!-- Background -->
<div class="bg-white dark:bg-slate-800">
  White in light mode, dark slate in dark mode
</div>

<!-- Complex Component -->
<div class="bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 border border-gray-300 dark:border-slate-700">
  Full dark mode support
</div>
```

### Consistent Dark Mode Palette

We standardize on **slate** colors for dark mode (not gray):

| Light Mode | Dark Mode |
|-----------|-----------|
| `bg-white` | `bg-slate-900` or `bg-slate-800` |
| `text-gray-900` | `text-slate-100` or `text-slate-200` |
| `text-gray-600` | `text-slate-400` or `text-slate-300` |
| `border-gray-300` | `border-slate-700` |

---

## Color Accessibility

When choosing or updating colors, ensure sufficient contrast ratios:

- **Normal text** (body copy): Minimum 4.5:1 contrast ratio
- **Large text** (18px+ or 14px+ bold): Minimum 3:1 contrast ratio
- **UI elements** (buttons, icons): Minimum 3:1 contrast ratio

### Tools for Checking Contrast
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- Chrome DevTools (Inspect element → Color picker shows contrast ratio)

---

## Summary

### Key Files
1. **[`src/components/CustomStyles.astro`](src/components/CustomStyles.astro)** - All CSS custom properties (design tokens)
2. **[`tailwind.config.js`](tailwind.config.js)** - Tailwind color mappings
3. **[`src/styles/global.css`](src/styles/global.css)** - Global CSS classes (`.gold`, `.silver`, etc.)

### Color System Benefits
✅ Single source of truth for all colors
✅ Easy to maintain and update
✅ Consistent across light and dark modes
✅ Type-safe with Tailwind IntelliSense
✅ Semantic naming for better developer experience

### Quick Commands
```bash
# Build the site to verify color changes
npm run build

# Start dev server to preview changes
npm run dev
```

---

**Last Updated**: 2025-10-26
**Maintained By**: Boston Women in Bioinformatics Development Team
