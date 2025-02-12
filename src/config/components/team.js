// Configuration for the team component / page

const team = {
  // Whether the team page is enabled or not
  enabled: true,

  // The title of the team section
  title: 'Our Team',

  // The subtitle of the team section
  description: 'Meet the team behind this project',

  // Members of the team
  members: [
    {
      // Name: First and last name
      name: 'Lorena Pantano',
      // Namelink: Member's Personal Website
      nameLink: 'https://www.linkedin.com/in/lpantano/',
      // Job Title
      title: 'Co-organizer',
      // The avatar of the first member
      avatar:
        'https://bioinformatics.sph.harvard.edu/sites/projects.iq.harvard.edu/files/styles/profile_full/public/chanbioinformatics/files/lpantano_headshot.png?m=1714588501&itok=XriOYRY4',
      // Social links of the first member
      social: {
        // website: '#',
        // twitter: 'https://x.com/lopantano',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/lpantano/',
        github: 'https://lpantano.github.io/',
        //bluesky: 'https://bsky.app/profile/lpantano.bsky.social',
      },
    },
    {
      // The name of the first member
      name: 'Samantha Klasfeld',
      // Clickable link of the first member name
      nameLink: 'https://www.linkedin.com/in/samantha-klasfeld/',
      // The job title of the first member
      title: 'Web Page Developer',
      // The avatar of the first member
      avatar: '/team/samanthaklasfeld.jpeg',
      // Social links of the first member
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/samantha-klasfeld/',
        github: 'https://github.com/sklasfeld',
        bluesky: 'https://bsky.app/profile/sklasfeld.bsky.social',
      },
    },
    // Yaseswini Neelamraju
    {
      name: 'Yaseswini Neelamraju',
      nameLink: 'https://www.linkedin.com/in/yaseswini-neelamraju-phd-14b7ba29/',
      title: 'Web Page Developer',
      avatar: '/team/yaseswinineelamraju.jpeg',
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/yaseswini-neelamraju-phd-14b7ba29/',
        github: 'https://github.com/Yaseswini',
      },
    },
    {
      // Name: First and last name
      name: 'Diveena Becker',
      // Namelink: Member's Personal Website
      nameLink: 'https://www.linkedin.com/in/diveena-becker-5945a771/',
      // Job Title
      title: 'Co-chair of Event committee',
      // The avatar of the first member
      avatar: '/team/diveena.jpg',
      // Social links of the first member
      social: {
        // website: '#',
        // twitter: 'https://x.com/lopantano',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/diveena-becker-5945a771/',
      },
    },
    // Next team member
  ],
};

export default team;
