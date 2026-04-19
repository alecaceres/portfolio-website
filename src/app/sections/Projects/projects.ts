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

export interface ProjectData {
  liveUrl: string;
  codeUrl: string;
  skills: string[];
  image: StaticImageData;
}

const projects: ProjectData[] = [
  {
    liveUrl: "#",
    codeUrl: "https://github.com/alecaceres/portfolio-website",
    skills: [Skill.REACT, Skill.NEXT, Skill.TAILWIND, Skill.TYPESCRIPT, Skill.GIT],
    image: personalWebsite,
  },
  {
    liveUrl: "https://chat-app-i6w9.onrender.com/",
    codeUrl: "https://github.com/alecaceres/chat-app",
    skills: [Skill.DJANGO, Skill.DTL, Skill.WEB_SOCKETS, Skill.SOCIAL_AUTH],
    image: chatRooms,
  },
];

export default projects;
