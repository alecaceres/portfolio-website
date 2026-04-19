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
        description: "Leading the technical evolution of a creator-economy platform — scaling infrastructure for media-heavy workloads, establishing engineering best practices, and driving product decisions from idea to deployment.",
        position: "Lead Fullstack Engineer",
    },
    {
        startMonth: "May 2021",
        endMonth: "Mar 2024",
        organisation: "Workfinder",
        location: "London, UK",
        description: "Shipped impactful features across a Django and React codebase for a platform helping thousands bridge skill gaps and connect with employers. Worked closely with product and design, and contributed to DEI-focused initiatives.",
        position: "Fullstack Engineer",
    },
    {
        startMonth: "Feb 2022",
        endMonth: "May 2022",
        organisation: "Social Currant",
        location: "Washington DC, USA",
        description: "Delivered Vue and Django features connecting social media creators with brands for campaign activations — tight deadlines, high ownership.",
        position: "Fullstack Engineer",
    },
    {
        startMonth: "Jan 2019",
        endMonth: "May, 2021",
        organisation: "Warden Automation",
        location: "Asuncion, Paraguay",
        description: "Where it all started. Solved real business problems with data analysis and machine learning, then dove into fullstack web and mobile development. That combination of data and engineering thinking still shapes how I work today.",
        position: "AI Engineer / Fullstack Web Developer",
    },
];

export default experience;