import { getPermalink, getBlogPermalink, getNewsletterPermalink } from './utils/permalinks';
export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(''),
    },
    {
      text: 'Who we are',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Committees',
          href: getPermalink('/about/committees'),
          links: [
            {
              text: 'Advocacy <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/advocacy'),
            },
            {
              text: 'Bioinformatics Sisters <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/bioinformatics-sisters'),
            },
            {
              text: 'Communications <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/communications'),
            },
            {
              text: 'Events <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/events'),
            },
            {
              text: 'Career Sponsorship <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/career-sponsorship'),
            },
            {
              text: 'Web Page <span class="md:hidden">Committee</span>',
              href: getPermalink('/about/committees/web-page'),
            },
          ],
        },
      ],
    },
    {
      text: 'Newsletter',
      href: getNewsletterPermalink(),
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
      links: [
        {
          text: 'Upcoming & Past Events',
          href: getPermalink('/events'),
        },
        //{
        //  text: '10th Year Anniversary',
        //  href: getPermalink('/events/tenyearanniversary'),
        //},
        //{
        //  text: 'Cambridge Science Carnival 2025',
        //  href: getPermalink('/events/ama'),
        //},
        {
          text: 'Event Recordings',
          href: getPermalink('/events/archived'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Quick Takes',
          href: getPermalink('quick-take', 'category'),
        },
        {
          text: 'Deep Dives',
          href: getPermalink('deep-dive', 'category'),
        },
        {
          text: 'Tutorials',
          href: getPermalink('tutorial', 'category'),
        },
        {
          text: 'Podcasts',
          href: getPermalink('podcast', 'category'),
        },
        {
          text: 'Videos',
          href: getPermalink('video', 'category'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Donate',
      href: 'https://givebutter.com/BWIBdonate',
    },
    // {
    //   text: 'Homes',
    //   links: [
    //     // {
    //     //   text: 'SaaS',
    //     //   href: getPermalink('/homes/saas'),
    //     // },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     // {
    //     //   text: 'Mobile App',
    //     //   href: getPermalink('/homes/mobile-app'),
    //     // },
    //     // {
    //     //   text: 'Personal',
    //     //   href: getPermalink('/homes/personal'),
    //     // },
    //   ],
    // },
    //{
    //  text: 'Community',
    //  links: [
    // {
    //   text: 'Features (Anchor Link)',
    //   href: getPermalink('/#features'),
    // },
    // {
    //   text: 'Services',
    //   href: getPermalink('/services'),
    // },
    // {
    //   text: 'Pricing',
    //   href: getPermalink('/pricing'),
    // },
    //{
    //  text: 'About us',
    //  href: getPermalink('/about'),
    //},
    // {
    //   text: 'Terms',
    //   href: getPermalink('/terms'),
    // },
    // {
    //   text: 'Privacy policy',
    //   href: getPermalink('/privacy'),
    // },
    //  ],
    //},
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    //{
    //text: 'Blog',
    //href: getBlogPermalink()
    // links: [
    //   {
    //     text: 'Blog List',
    //     href: getBlogPermalink(),
    //   },
    // {
    //   text: 'Article',
    //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    // },
    // {
    //   text: 'Article (with MDX)',
    //   href: getPermalink('markdown-elements-demo-post', 'post'),
    // },
    // {
    //   text: 'Category Page',
    //   href: getPermalink('tutorials', 'category'),
    // },
    // {
    //   text: 'Tag Page',
    //   href: getPermalink('astro', 'tag'),
    // },
    // ],
    //},
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    //{
    //  title: 'Company',
    //  links: [
    //    { text: 'About', href: '#' },
    //    { text: 'Blog', href: '#' },
    //    { text: 'Careers', href: '#' },
    // { text: 'Press', href: '#' },
    // { text: 'Inclusion', href: '#' },
    //    { text: 'Social Impact', href: '#' },
    // { text: 'Shop', href: '#' },
    //  ],
    //},
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Slack',
      icon: 'tabler:brand-slack',
      href: 'https://join.slack.com/t/boston-women-bioinfo/shared_invite/zt-2kg9ojwn9-arPXyQXPB_VgbVWDdoA2nQ',
    },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/groups/13074137/' },

    //{
    //  ariaLabel: 'Lu.ma',
    //  icon: 'LumaIcon', // This icon is wonky and needs to be fixed
    //  href: 'https://luma.com/bwib',
    //},
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://m.youtube.com/channel/UCzgmQ4uoTNq_MayiwAQ448Q',
    },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/Boston-area-Women-in-Bioinformatics',
    },
    {
      ariaLabel: 'X (formerly Twitter)',
      icon: 'tabler:brand-x',
      href: 'https://x.com/BWIBioinfo',
    },
  ],
  footNote: `Boston Women in Bioinformatics is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law. Logos were designed by Siobhan Keegan and <a href="https://www.monikamistry.com/creative-design/">Monika Mistry</a>.`,
};
