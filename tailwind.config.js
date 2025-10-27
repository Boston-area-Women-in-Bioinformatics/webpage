import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        'accent-warm': 'var(--aw-color-accent-warm)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        gold: 'var(--aw-color-tier-gold)',
        silver: 'var(--aw-color-tier-silver)',
        'social-linkedin': 'var(--aw-color-social-linkedin)',
        'social-instagram': 'var(--aw-color-social-instagram)',
        'social-facebook': 'var(--aw-color-social-facebook)',
        'social-twitter': 'var(--aw-color-social-twitter)',
        'social-bluesky': 'var(--aw-color-social-bluesky)',
        'social-github': 'var(--aw-color-social-github)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
