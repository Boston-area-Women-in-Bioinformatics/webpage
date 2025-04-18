// Configuration for the ambassador component / page

const speakers = {
  // Whether the ambassadors page is enabled or not
  enabled: true,

  // The title of the ambassadors section
  title: 'Our Speakers',

  // The subtitle of the Ambassadors section
  description: 'Speakers for 10th Year Anniversary Event',

  // Ambassador Profiles
  members: [
    // Lorena Pantano
    {
      // Name: First and last name
      name: 'Lorena Pantano',
      // Namelink: Member's Personal Website
      nameLink: 'https://www.linkedin.com/in/lpantano/',
      // Job Title
      title: 'Co-chair & Founder of Women in Bioinformatics Boston Area',
      // Leadership Leadership team member Photo
      avatar: '/team/lpantano.jpg',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/lpantano/',
        github: 'https://lpantano.github.io/',
        //bluesky: 'https://bsky.app/profile/lpantano.bsky.social',
      },
    },
    // Geraldine Van der Auwera
    {
      // Name: First and last name
      name: 'Geraldine Van der Auwera',
      // Namelink: Ambassador's Personal Website
      nameLink: 'https://www.linkedin.com/in/geraldine-van-der-auwera-5a5811/',
      // Job Title
      title: 'Lead Developer Advocate at Seqera',
      // Ambassador Photo
      avatar:
        'https://media.licdn.com/dms/image/v2/C4D03AQF9umpthAuLTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516255166236?e=1750291200&v=beta&t=9qRiZhHLhn5xlgdR1x3i1SBcavEIfLHww2cs3rgQlI4',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/geraldine-van-der-auwera-5a5811/',
        //github: '#',
        //bluesky: '#',
      },
    },
  ],
};

export default speakers;
