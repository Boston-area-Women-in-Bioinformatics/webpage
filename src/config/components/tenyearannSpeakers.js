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
    // Ashley Abel
    {
      // Name: First and last name
      name: 'Ashley Abel, Ph.D.',
      // Job Title
      title: 'CEO & Co-Founder, Metri Bio',
      // Speaker Photo
      avatar: '/team/Ashley_Abel.jpeg',
      social: {
        linkedin: 'https://www.linkedin.com/in/ashleyabel/',
        website: 'https://metri.bio/',
      },
    },
    // Brandi Davis-Dusenbery
    {
      // Name: First and last name
      name: 'Brandi Davis-Dusenbery, Ph.D.',
      // Job Title
      title: 'Principal, ZS',
      social: {
        linkedin: 'https://www.linkedin.com/in/davis-dusenbery/',
      },
    },
    // Shruthi Mahalingaiah
    {
      // Name: First and last name
      name: 'Shruthi Mahalingaiah, M.D., M.S.',
      // Job Title
      title: 'Associate Professor, Harvard T.H. Chan School of Public Health',
      // Speaker Photo
      avatar: '/team/Shruthi-Mahalingaiah.avif',
      social: {
        linkedin: 'https://www.linkedin.com/in/shruthimahalingaiahmd/',
        website: 'https://hsph.harvard.edu/research/mahalingaiah-lab/',
      },
    },
    // Sheri Simmons
    {
      // Name: First and last name
      name: 'Sheri Simmons, Ph.D.',
      // Job Title
      title: 'CSO, MaaT Pharma; Founder, KMS Bioinnovation Consulting, LLC',
      // Speaker Photo
      avatar: '/team/sheri_simmons.jpeg',
      social: {
        linkedin: 'https://www.linkedin.com/in/sheri-simmons/',
        website: 'https://kmsbioinnovation.com/',
      },
    },
    // Jennifer Wortman
    {
      // Name: First and last name
      name: 'Jennifer Wortman, Ph.D.',
      // Job Title
      title: 'President & Managing Director, BioTeam',
      social: {
        linkedin: 'https://www.linkedin.com/in/jenniferwortman/',
      },
    },
  ],
};

export default speakers;
