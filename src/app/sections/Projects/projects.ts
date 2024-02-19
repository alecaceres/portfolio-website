import personalWebsite from "images/projects/personal-website.png";
import { StaticImageData } from "next/image";

enum Skill {
    REACT = "React.js",
    NEXT = "Next.js",
    TAILWIND = "Tailwind CSS",
    TYPESCRIPT = "TypeScript",
    GIT = "Git",
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
    }
];

export default projects;