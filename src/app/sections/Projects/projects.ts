import personalWebsite from "images/projects/personal-website.png";

enum Skill {
    REACT = "React.js",
    NEXT = "Next.js",
    TAILWIND = "Tailwind CSS",
    TYPESCRIPT = "TypeScript",
    GIT = "Git",
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