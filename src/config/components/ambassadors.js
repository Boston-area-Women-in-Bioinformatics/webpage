// Configuration for the ambassador component / page

const ambassadors = {
  // Whether the ambassadors page is enabled or not
  enabled: true,

  // The title of the ambassadors section
  title: 'Our Ambassadors',

  // The subtitle of the Ambassadors section
  description: 'Meet the Ambassadors',

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
      avatar: 'ambassadors/eleanorahowe.jpeg',
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
    // Radhika Khetani
    {
      // Name: First and last name
      name: 'Radhika Khetani',
      // Namelink: Ambassador's Personal Website
      nameLink: 'https://www.linkedin.com/in/radhika-khetani-7123952/',
      // Job Title
      title: 'Director, Data Science Learning, AstraZeneca',
      // Ambassador Photo
      avatar:
        'https://media.licdn.com/dms/image/v2/C5603AQEaFVo-x59baw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516262069058?e=1748476800&v=beta&t=BiIbGyVfWFrLpjhZS-NjV1wG0xmVAHahRysrjKL4xAQ',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/radhika-khetani-7123952/',
        //github: '#',
        //bluesky: '#',
      },
    },
    // Meeta Mistry
    {
      // Name: First and last name
      name: 'Meeta Mistry',
      // Namelink: Ambassador's Personal Website
      nameLink: 'https://www.linkedin.com/in/meeta-mistry-53591110/',
      // Job Title
      title: 'Associate Director, Harvard Chan Bioinformatics Core',
      // Ambassador Photo
      //avatar: '#',
      // Social links
      social: {
        // website: '#',
        // twitter: ''#'',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/meeta-mistry-53591110/',
        //github: '#',
        //bluesky: '#',
      },
    },
  ],
};

export default ambassadors;
