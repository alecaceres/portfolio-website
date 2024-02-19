import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects, {Project} from "./projects";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold">Projects</h2>
                <p className="text-secondary-200 text-2xl leading-normal">These are some projects I&apos;m proud of</p>
            </div>
            <div className="grid grid-cols-auto-cols-fr gap-4">
                {projects.map((project:Project) => <ProjectCard key={project.title} {...project}/>)}
            </div>
        </section>
    )
}

export default Projects;