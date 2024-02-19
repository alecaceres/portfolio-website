import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "./projects";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">Projects</h2>
                    <p className="text-secondary-200 text-2xl leading-normal">These are some projects I'm proud of</p>
                </div>
                <div className="grid grid-cols-auto-cols-fr gap-4">
                    {projects.map(project => <ProjectCard key={project.title} {...project}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects;