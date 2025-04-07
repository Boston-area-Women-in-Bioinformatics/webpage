// Configuration for the member component / page

const members = {
  // Whether the members page is enabled or not
  enabled: false,

  // The title of the members section
  title: 'Our Members',

  // The subtitle of the Members section
  description: 'Meet the Members of the Boston Women in Bioinformatics',

  // Member Profiles
  members: [
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
    // Nishita Kalepalli
    {
      // Name: First and last name
      name: 'Nishita Kalepalli',
      // Namelink: Member's Personal Website
      nameLink: 'https://www.linkedin.com/in/nishita-kalepalli/',
      // Job Title
      title: 'Member, Communication Committee',
      // Leadership team member Photo
      avatar: 'team/nishita-kalepalli.jpeg',
      // Social links
      social: {
        linkedin: 'https://www.linkedin.com/in/nishita-kalepalli/',
      },
    },
  ],
};

export default members;
