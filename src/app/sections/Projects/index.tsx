import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects, {Project} from "./projects";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">Projects</h2>
                <p className="text-secondary-100 text-xl lg:text-2xl leading-normal">These are some projects I&apos;m proud of</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {projects.map((project: Project) => <ProjectCard key={project.title} {...project} />)}
            </div>
        </section>
    )
}

export default Projects;