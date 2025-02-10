

export interface Playlist {
  title: string;
  cover: string;
  artists: string[];
  description: string;
  agenda?: string[];
  dateTime: string;
  eventDate: string;
  eventTime: string
  rsvp: boolean;
  going: number;
  moreinfo?: string[];
}

// function to get all events in the future
export function getFutureEvents(playlists: Playlist[]) {
    const now = new Date(); // Current time
  
    // Filter, ensuring correct date comparison:
    return playlists.filter((playlist) => new Date(playlist.dateTime).getTime() > now.getTime());
  }

  

export const playlists: Playlist[] = [
      {
        title: "Bioinformatics Sisters Pilot Launch - Sponsored by Watershed Bio",
        cover: "/photos/women_scientist.jpg",
        artists: ["Boston, MA"],
        description: "Do you want to expand your network in the Greater Boston area? Are you looking for advice with career transitions, growth in your role, how to get up the next rung of the ladder? Do you want to share your accumulated wisdom and give back to the community?Boston-area Women in Bioinformatics is launching virtual peer-to-peer and mentor-to-peer network to tackle all these and other concerns! We are looking for a group of 30 people to help us pilot the network ahead of a wider launch. If you are interested in expanding your network and helping us test drive our tool, sign up and join us!",
        dateTime: "2024-08-08T18:00-04:00",
        eventDate: "June 13th, 2024",
        eventTime: "5:30pm - 7:00pm",
        moreinfo: ["Venue, food, and drinks are generously provided by our sponsor, Watershed Bio.","Note: Bioinformatics Sisters is only open to people identifying as women."],
        rsvp: true,
        going: 33
      },
      {
        title: "Byte and Bite: Bioinformatics Lunch Meetup",
        cover: "/photos/pexels-george-milton-6954156.jpg",
        artists: ["Boston, Seaport Area", "Flour Bakery + Cafe", "19 Drydock Avenue, Boston, MA 02210"],
        description: "Are you a bioinformatics enthusiast looking to meet and mingle with fellow professionals in a relaxed and unscripted environment? Join us for a Bioinformatics Networking Lunch, an informal gathering where great conversations, shared ideas, and new connections are on the menu!",
        dateTime: "2024-08-16T12:00-04:00",
        eventDate: "August 16th, 2024",
        eventTime: "12:00pm - 2:00pm EDT",
        rsvp: true,
        going: 13,
        moreinfo:["This event is only open to people identifying as women", "Feel free to show up any time between 12 and 2pm", "We will sit in the outdoor covered space outside Flour.\n**Please understand that each guest will be paying for a meal and/or beverages of their choice."]
      },
      {
        title: "Byte and Bite: Bioinformatics Lunch Meetup",
        cover: "/photos/pexels-george-milton-6954156.jpg",
        artists: ["East Cambridge","CambridgeSide Galleria Foodcourt","100 Cambridgeside Pl","Cambridge, MA 02141"],
        description: "Are you a bioinformatics enthusiast looking to meet and mingle with fellow professionals in a relaxed and unscripted environment? Join us for a Bioinformatics Networking Lunch, an informal gathering where great conversations, shared ideas, and new connections are on the menu!",
        dateTime: "2024-09-19T11:30-04:00",
        eventDate: "September 19th, 2024",
        eventTime: "11:30am - 1:00pm",
        rsvp: true,
        going: 15,
        moreinfo:["This event is only open to people identifying as women", "Feel free to show up any time between 11:30 and 1:30pm", "If the weather holds, we will sit in the outdoor space close to the fountain (otherwise indoors at the tables near Fooda popup)","Please understand that each guest will be paying for a meal and/or beverages of their choice.", "Event Update","CambridgeSide food court is under construction but Fooda popup stations are in the mall for ordering food/coffee. For September 19th, \"El Jefe's Taqueria\", \"Work Hard Eat Good\" and \"Koko Coffee\" appear to be the options on the website. Please check them out and order your lunches for pickup! You can also bring a bag lunch or order from other nearby restaurants.- Parking should be available in the garage or on the street."]
      },
      {
        title: "Nextflow Training Tuesdays! ",
        cover: "/photos/pexels-george-milton-6954156.jpg",
        artists: ["SEAS - Harvard in Allston, in room 2.122 conference room"],
        description: "Hello Nextflow! Getting started with workflows for bioinformatics in 4 sessions of 2 hours each on **Oct 8, Oct 15, Nov 5, Nov 12 at 4pm**. This event is **in-person**, for people identified as women. We may offer an online option as observer, if you are interested in that option, fill this [form](https://docs.google.com/forms/d/e/1FAIpQLScvhQvqoKvQLYLh4In84G-tVrcoz8GTSc6Lzm8mJPP6NNkbqw/viewform). Nextflow is a powerful and flexible open-source workflow management system that simplifies the development, execution, and scalability of data-driven computational pipelines. It's widely used in bioinformatics and other scientific fields to automate complex analyses, making it easier to manage and reproduce large-scale data workflows.\nThis is a foundational course for those who are completely new to Nextflow. It aims to equip participants with skills in two key areas: Nextflow language proficiency and command-line interface (CLI) execution.\n\nParticipants will be guided through hands-on, goal-oriented exercises that will allow them to develop the following skills:\n\n* Use core components of the Nextflow language to construct simple multi-step workflows effectively.\n* Launch Nextflow workflows locally, navigate output directories to access results, interpret log outputs for insights into workflow execution, and troubleshoot basic issues that may arise during workflow execution.\n\nBy focusing on these essential skills, participants will be well-prepared to harness the power of Nextflow for their scientific computing needs.\n\n**Target audience**\nThis is a workshop for people who are completely new to Nextflow. Basic familiarity with the command line, and common bioinformatics file formats is assumed.\n\n**Prerequisites**\n\n* A GitHub account\n* Experience with command line\n\n**Before the workshop**\nFollow the Gitpod setup instructions at [https://training.nextflow.io/envsetup/](https://training.nextflow.io/envsetup/)",
        dateTime: "2024-10-08T16:00-04:00",
        eventDate: "October 8th, 2024",
        eventTime: "5:30pm - 7:00pm",
        rsvp: true,
        going: 38
      }
]

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
];
