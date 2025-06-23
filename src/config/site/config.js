// General configuration for the website

import defaultImage from '../../assets/images/WIB_Logo.jpg';
import blog from './blog';

const CONFIG = {
  // The name of the website
  name: 'Boston Women in Bioinformatics',
  // The origin of the website (without trailing slash)
  origin: 'https://boston-wib.org',
  // The base pathname of the website
  basePathname: '/',
  // If the website uses trailing slashes in the URLs
  trailingSlash: false,

  // The website title which is displayed in the browser tab
  title: 'Boston Women in Bioinformatics',

  // Website description
  description:
    'The online presence of Women in Bioinformatics in the Boston Area.',

  // The website's preview image that is displayed when sharing the website on social media
  defaultImage: defaultImage,
  // The default alt attribute for the preview image
  defaultImageAlt: 'WIB Boston Area Logo',
  // The default width and height of the preview image
  defaultImageWidth: 1200,
  defaultImageHeight: 628,

  // Default site theme
  // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  defaultTheme: 'system',

  // The default language of the website
  language: 'en',
  // The default text direction (ltr is left-to-right, rtl is right-to-left)
  textDirection: 'ltr',

  // Date format (used in blog posts)
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  // Google Analytics configuration
  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  // If the RSS feed button should be displayed
  showRssFeed: false,

  // If the theme switcher should be displayed
  showToggleTheme: false,

  // If the header should be stick to the top of the page
  isSticky: true,

  // The position of the header
  // Values: "center" | "right" | "left"
  headerPosition: 'right',

  i18n: {
    language: 'en',
    textDirection: 'ltr',
  },

  // Global metadata config
  metadata: {
    title: {
      default: 'Boston Women in Bioinformatics',
      template: '%s — Boston Women in Bioinformatics',
    },
    description:
      'The online presence of Women in Bioinformatics in the Boston Area.',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: 'boston-wib.org',
      images: [
        {
          url: '~/assets/images/WIB_Logo.jpg',
          width: 1200,
          height: 628,
        },
      ],
    },
  },
};

export default CONFIG;
export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
