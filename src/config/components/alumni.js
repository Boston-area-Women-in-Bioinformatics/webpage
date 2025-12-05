// Configuration for the member component / page

const alumni = {
  // Whether the alumni page is enabled or not
  enabled: true,

  // The title of the alumni section
  title: 'Our Alumni',

  // The subtitle of the Alumni section
  description: 'Meet the Alumni of the Boston Women in Bioinformatics',

  // Member Profiles
  members: [
    // Anushka Dongaonkar
    {
      name: 'Anushka Dongaonkar',
      nameLink: 'https://www.linkedin.com/in/anushka-dongaonkar-191b18201/',
      title: 'Web Page Developer',
      avatar: '/team/Anushka.jpeg',
      social: {
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/anushka-dongaonkar-191b18201/',
        github: 'https://github.com/anushka-don',
      },
    },
    // Isha Parikh
    {
      // Name: First and last name
      name: 'Isha Parikh',
      // Namelink: Member's Personal Website
      //nameLink: '',
      // Job Title
      title: 'Member, Events Committee',
      // Leadership team member Photo
      avatar: 'team/isha.jpeg',
      // Social links
      social: {
        linkedin: 'https://www.linkedin.com/in/isha2106/',
        github: 'https://github.com/isha2106',
      },
    },
    // Rachel Utama

    {
      // Name: First and last name
      name: 'Rachel Utama',
      // Namelink: Member's Personal Website
      nameLink: 'https://www.linkedin.com/in/rachel-utama/',
      // Job Title
      title: 'Member Events Committee',
      // Leadership team member Photo
      avatar: 'team/RachelUtama.jpg',
      // Social links
      social: {
        linkedin: 'https://www.linkedin.com/in/rachel-utama/',
        github: 'https://github.com/rootma21',
      },
    },
  ],
};

export default alumni;
