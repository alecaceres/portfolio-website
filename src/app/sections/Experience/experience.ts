export interface Experience {
    startMonth: string;
    endMonth?: string;
    organisation: string;
    location: string;
    description: string;
    position: string;
  }

const experience: Experience[] = [
    {
        startMonth: "Mar 2024",
        organisation: "Social Currant",
        location: "Washing DC, USA",
        description: "Scale the app to handle media content provided by creators, implement modern engineering best practices and discuss product challenges",
        position: "Lead Fullstack Engineer",
    },
    {
        startMonth: "May 2021",
        endMonth: "Mar 2024",
        organisation: "Workfinder",
        location: "London, UK",
        description: "Worked heavily on django and react codebase to help people fix their skill gaps and organisations reach their recruiting, DEI targets and other goals",
        position: "Fullstack Engineer",
    },
    {
        startMonth: "Feb 2022",
        endMonth: "May 2022",
        organisation: "Social Currant",
        location: "Washington DC, USA",
        description: "Temporary contract where I used Vue, django and Heroku to engage creators with brands for social media campaigns",
        position: "Fullstack Engineer",
    },
    {
        startMonth: "Jan 2019",
        endMonth: "May, 2021",
        organisation: "Warden Automation",
        location: "Asuncion, Paraguay",
        description: "This is where my journey started. I worked on a variety of projects addressing business problems with data analysis and data science to then fully immerse myself in fullstack web and mobile development",
        position: "AI Engineer / Fullstack Web Developer",
    },
];

export default experience;