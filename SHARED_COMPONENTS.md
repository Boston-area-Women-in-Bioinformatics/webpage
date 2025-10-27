# Shared Components Documentation

This document describes the reusable shared components created to maintain consistency across the Boston Women in Bioinformatics website.

## Table of Contents

1. [Card Component](#card-component)
2. [SocialLinks Component](#sociallinks-component)
3. [FormField Component](#formfield-component)

---

## Card Component

**Location:** `src/components/ui/Card.astro`

A reusable card component with consistent styling across the site.

### Props

| Prop        | Type                               | Default     | Description                                    |
| ----------- | ---------------------------------- | ----------- | ---------------------------------------------- |
| `variant`   | `'default' \| 'blog' \| 'sponsor'` | `'default'` | Different card styles                          |
| `padding`   | `string`                           | `'p-6'`     | Custom padding class                           |
| `class`     | `string`                           | `''`        | Additional custom classes                      |
| `clickable` | `boolean`                          | `false`     | Makes entire card clickable with hover effects |
| `href`      | `string`                           | `undefined` | URL for clickable cards                        |
| `target`    | `string`                           | `undefined` | Link target (\_blank for external links)       |

### Usage Examples

#### Basic Card

```astro
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

#### Blog Card with Custom Styling

```astro
<Card variant="blog" class="max-w-md">
  <h3>Blog Post Title</h3>
  <p>Post excerpt...</p>
</Card>
```

#### Clickable Card

```astro
<Card clickable href="/events/event-name" padding="p-4">
  <h3>Event Title</h3>
  <p>Event details...</p>
</Card>
```

#### Sponsor Card

```astro
<Card variant="sponsor" href="https://sponsor-site.com" target="_blank" class="border-gold">
  <img src="/sponsors/logo.png" alt="Sponsor" />
</Card>
```

### Variants

- **default**: Standard card with white background and shadow
- **blog**: Card with hover shadow transition
- **sponsor**: Card with border styling, suitable for sponsor logos

### Features

- ✅ Consistent dark mode support
- ✅ Hover effects for clickable cards
- ✅ Smooth transitions
- ✅ Accessible link wrapping
- ✅ Responsive design

---

## SocialLinks Component

**Location:** `src/components/ui/SocialLinks.astro`

Renders social media icons with consistent styling using design system colors.

### Props

| Prop     | Type                         | Default        | Description                         |
| -------- | ---------------------------- | -------------- | ----------------------------------- |
| `social` | `SocialMedia`                | required       | Object containing social media URLs |
| `size`   | `'sm' \| 'md' \| 'lg'`       | `'md'`         | Icon size                           |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Icon arrangement                    |
| `class`  | `string`                     | `''`           | Additional custom classes           |

### SocialMedia Object

```typescript
interface SocialMedia {
  website?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  email?: string;
}
```

### Usage Examples

#### Team Member Social Links

```astro
---
import SocialLinks from '~/components/ui/SocialLinks.astro';

const teamMember = {
  social: {
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    website: 'https://example.com',
  },
};
---

<SocialLinks social={teamMember.social} size="md" layout="horizontal" />
```

#### Large Footer Links

```astro
<SocialLinks
  social={{
    linkedin: 'https://linkedin.com/company/bwib',
    twitter: 'https://twitter.com/bwib',
    instagram: 'https://instagram.com/bwib',
  }}
  size="lg"
  layout="horizontal"
  class="justify-center mt-8"
/>
```

#### Vertical Sidebar Links

```astro
<SocialLinks
  social={{
    github: 'https://github.com/org',
    email: 'mailto:info@example.com',
  }}
  size="sm"
  layout="vertical"
/>
```

### Supported Platforms

Each platform has its own icon from Tabler Icons and color from the design system:

- **Website** - `tabler:world-www` - LinkedIn blue
- **LinkedIn** - `tabler:brand-linkedin` - LinkedIn blue (#0A66C2)
- **Twitter** - `tabler:brand-twitter` - Twitter blue (#1DA1F2)
- **Bluesky** - `tabler:brand-bluesky` - Bluesky blue
- **Instagram** - `tabler:brand-instagram` - Instagram gradient
- **Facebook** - `tabler:brand-facebook` - Facebook blue (#1877F2)
- **GitHub** - `tabler:brand-github` - Gray with dark mode support
- **Email** - `tabler:mail` - Gray with dark mode support

### Features

- ✅ Only renders icons for provided social links
- ✅ Design system color integration
- ✅ Hover effects with smooth transitions
- ✅ Accessible with aria-labels
- ✅ Opens in new tab with security attributes
- ✅ Responsive sizing

---

## FormField Component

**Location:** `src/components/ui/FormField.astro`

Standardized form input fields with consistent styling from the design system.

### Props

| Prop           | Type                                                                      | Default     | Description                   |
| -------------- | ------------------------------------------------------------------------- | ----------- | ----------------------------- |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'textarea' \| 'checkbox'` | `'text'`    | Input type                    |
| `name`         | `string`                                                                  | required    | Field name attribute          |
| `id`           | `string`                                                                  | `name`      | Field id (defaults to name)   |
| `label`        | `string`                                                                  | `undefined` | Field label text              |
| `placeholder`  | `string`                                                                  | `''`        | Placeholder text              |
| `required`     | `boolean`                                                                 | `false`     | Whether field is required     |
| `autocomplete` | `string`                                                                  | `'on'`      | Autocomplete attribute        |
| `rows`         | `number`                                                                  | `4`         | Number of rows for textarea   |
| `class`        | `string`                                                                  | `''`        | Additional custom classes     |
| `value`        | `string`                                                                  | `''`        | Default value                 |
| `helpText`     | `string`                                                                  | `undefined` | Helper text shown below field |

### Usage Examples

#### Text Input

```astro
<FormField type="text" name="name" label="Full Name" placeholder="Enter your name" required />
```

#### Email Input with Help Text

```astro
<FormField
  type="email"
  name="email"
  label="Email Address"
  placeholder="you@example.com"
  required
  helpText="We'll never share your email with anyone else."
/>
```

#### Textarea

```astro
<FormField type="textarea" name="message" label="Message" placeholder="Your message here..." rows={6} required />
```

#### Checkbox

```astro
<FormField type="checkbox" name="agree" label="I agree to the terms and conditions" required />
```

#### Password Field

```astro
<FormField
  type="password"
  name="password"
  label="Password"
  autocomplete="new-password"
  required
  helpText="Must be at least 8 characters"
/>
```

### Complete Form Example

```astro
---
import FormField from '~/components/ui/FormField.astro';
import Button from '~/components/ui/Button.astro';
---

<form>
  <FormField type="text" name="name" label="Your Name" required />

  <FormField type="email" name="email" label="Email Address" required />

  <FormField type="textarea" name="message" label="Message" rows={6} required />

  <FormField type="checkbox" name="newsletter" label="Subscribe to our newsletter" />

  <Button variant="primary" type="submit"> Send Message </Button>
</form>
```

### Features

- ✅ Consistent styling across all input types
- ✅ Dark mode support
- ✅ Required field indicators (red asterisk)
- ✅ Help text support
- ✅ Focus states with blue ring
- ✅ Smooth transitions
- ✅ Accessible labels and IDs
- ✅ Special checkbox layout

### Styling Details

**Base Input Styles:**

- Light mode: White background, gray border
- Dark mode: Slate-900 background, gray-700 border
- Focus: Blue ring with blue border
- Border radius: Large (rounded-lg)
- Padding: 3 vertical, 4 horizontal

**Label Styles:**

- Font size: Small (text-sm)
- Font weight: Medium
- Color: Gray-700 (light) / Slate-300 (dark)

**Required Indicator:**

- Red asterisk (\*) after label
- Color: Red-500 (light) / Red-400 (dark)

---

## Migration Guide

### Replacing Existing Cards

**Before:**

```astro
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden p-6">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

**After:**

```astro
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

### Replacing Social Links

**Before:**

```astro
<ul class="flex space-x-4">
  {
    member?.social?.linkedin && (
      <li>
        <a href={member.social.linkedin} class="text-social-linkedin hover:text-gray-900">
          <Icon name="tabler:brand-linkedin" class="w-6 h-6" />
        </a>
      </li>
    )
  }
  <!-- Repeat for each platform... -->
</ul>
```

**After:**

```astro
<SocialLinks social={member.social} />
```

### Replacing Form Inputs

**Before:**

```astro
<div class="mb-6">
  <label for="email" class="block text-sm font-medium">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
  />
</div>
```

**After:**

```astro
<FormField type="email" name="email" label="Email" />
```

---

## Best Practices

### Card Component

- Use `variant="blog"` for content cards that need hover effects
- Use `variant="sponsor"` for sponsor/partner logos
- Always provide `href` when using `clickable={true}`
- Use `target="_blank"` for external links

### SocialLinks Component

- Only include URLs for platforms you actively use
- Use `size="lg"` for prominent footer/hero areas
- Use `size="sm"` for compact layouts like sidebars
- Use `layout="vertical"` for narrow containers

### FormField Component

- Always set `required={true}` for mandatory fields
- Provide clear `label` text for accessibility
- Use `helpText` for additional context or validation requirements
- Group related fields with consistent spacing

---

## Testing

All components have been tested for:

- ✅ Light and dark mode
- ✅ Responsive design
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Browser compatibility
- ✅ Hover and focus states

---

## Future Enhancements

Potential improvements for these components:

1. **Card Component**

   - Add loading skeleton state
   - Add error/success variants
   - Add collapsible functionality

2. **SocialLinks Component**

   - Add tooltip with platform name
   - Add share functionality
   - Support for custom icons

3. **FormField Component**
   - Add validation error states
   - Add character counter for text inputs
   - Add icon support (prefix/suffix icons)
   - Add date/time picker variants

---

## Questions or Issues?

If you encounter any issues or have questions about these components, please:

1. Check this documentation first
2. Review the component source code for inline comments
3. Check the design system documentation (DESIGN_SYSTEM.md)
4. Create an issue in the repository

---

**Last Updated:** October 2025
**Version:** 1.0.0
