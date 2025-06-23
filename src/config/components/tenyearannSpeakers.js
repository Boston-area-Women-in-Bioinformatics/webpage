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
    // Eleanor Howe
    {
      // Name: First and last name
      name: 'Eleanor Howe',
      // Namelink: Ambassador's Personal Website
      nameLink: 'https://www.linkedin.com/in/eleanorahowe/',
      // Job Title
      title: 'Founder and CEO, Diamond Age Data Science, LLC',
      // Ambassador Member Photo
      avatar: '/team/eleanorahowe.jpeg',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/eleanorahowe/',
        //github: '#',
        //bluesky: '#',
      },
    },
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
      nameLink:
        'https://media.licdn.com/dms/image/v2/C4D03AQF9umpthAuLTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516255166236?e=1756339200&v=beta&t=30W12e8VKpeWDxZTNEo9GR4BXyu6XTjgigiHLvBNb9s',
      // Job Title
      title: 'Lead Developer Advocate at Seqera',
      // Ambassador Photo
      avatar: '/team/GeraldineVanderAuwera.jpeg',
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
    // TBA
    {
      // Name: First and last name
      name: 'TBA',
      // Namelink: Member's Personal Website
      //nameLink: '#',
      // Job Title
      //title: '#',
      // Member Photo
      avatar: '/photos/WIB_Logo.jpg',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        //linkedin: '#',
        //github: '#',
        //bluesky: '#',
      },
    },
  ],
};

export default speakers;
