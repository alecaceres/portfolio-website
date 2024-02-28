import personalWebsite from "images/projects/personal-website.png";
import chatRooms from "images/projects/chat-rooms.png";
import { StaticImageData } from "next/image";

enum Skill {
    REACT = "React.js",
    NEXT = "Next.js",
    TAILWIND = "Tailwind CSS",
    TYPESCRIPT = "TypeScript",
    GIT = "Git",
    DJANGO = "Django",
    DTL = "Django Template Language",
    WEB_SOCKETS = "Web sockets",
    SOCIAL_AUTH = "Social authentication",
}

export interface Project {
    title: string;
    liveUrl: string;
    codeUrl: string;
    description: string;
    skills: string[];
    image: StaticImageData;
}

const projects = [
    {
        title: "Personal website",
        liveUrl: "#",
        codeUrl: "https://github.com/alecaceres/portfolio-website",
        description: "You are already here! Good to see you. I've built this project using Next.js for its fast development and SEO capabilities.",
        skills: [Skill.REACT, Skill.NEXT, Skill.TAILWIND, Skill.TYPESCRIPT, Skill.GIT],
        image: personalWebsite,
    },
    {
        title: "Live-chat rooms",
        liveUrl: "https://chat-app-i6w9.onrender.com/",
        codeUrl: "https://github.com/alecaceres/chat-app",
        description: "Real-time chatrooms app using django and websockets with social authentication. It may take up to one minute to start since it's hosted on a free plan.",
        skills: [Skill.DJANGO, Skill.DTL, Skill.WEB_SOCKETS, Skill.SOCIAL_AUTH],
        image: chatRooms,
    }
];

export default projects;