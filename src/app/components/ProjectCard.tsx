import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Project} from "@/sections/Projects/projects"

const ProjectCard: React.FC<Project> = ({ title, liveUrl, codeUrl, description, skills, image }) => {
    return (
        <article className="project-card flex flex-col relative gap-6 min-w-[260px] max-w-[400px] md:min-w-[400px] md:max-w-[600px] border-white border-2 rounded-3xl overflow-hidden">
            <Image
                className="w-full h-32 md:h-48 lg:h-64 object-cover"
                src={image}
                alt={title}
            />
            <div className="project-details flex flex-col p-4 md:p-6 gap-5">
                <div className="title-and-description flex flex-col gap-3">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">{title}</h3>
                    <p className="text-sm md:text-base font-light text-secondary-200">{description}</p>
                </div>
                <div className="skills flex flex-row flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="rounded-md md:rounded-xl bg-gray-300 text-gray-800 py-1 px-2 md:px-5 text-sm md:text-base">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="actions flex gap-4 flex-wrap">
                    <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-link rounded-lg border-white border-solid border-2 py-1 px-2 hover:bg-white hover:bg-opacity-10 text-sm md:text-base"
                    >
                        <i className="ri-play-line mr-2"></i>See Live
                    </Link>
                    <Link
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-link rounded-lg border-white border-solid border-2 py-1 px-2 hover:bg-white hover:bg-opacity-10 text-sm md:text-base"
                    >
                        <i className="ri-github-fill mr-2"></i>View Code
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
