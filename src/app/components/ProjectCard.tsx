import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({title, liveUrl, codeUrl, description, skills, image}) => {
    return (
        <div className="flex flex-col relative gap-6 min-w-[400px] max-w-[600px] border-white border-2 rounded-3xl overflow-hidden">
            <Image
                className="w-full h-64"
                src={image}
                alt="title"
            />
            <div className="flex flex-col p-6 gap-5">
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-medium">{title}</h3>
                    <p className="font-light text-secondary-200">{description}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                    {skills.map(skill => <span key={skill} className="rounded-xl bg-gray-300 text-gray-800 py-1 px-5">{skill}</span>)}
                </div>
                <div className="flex gap-4">
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="rounded-lg border-white border-solid border-2 py-1 px-2 hover:bg-white hover:bg-opacity-10"
                    >
                        <i className="ri-play-line mr-2"></i>See Live
                    </Link>
                    <Link
                        href={codeUrl}
                        target="_blank"
                        className="rounded-lg border-white border-solid border-2 py-1 px-2 hover:bg-white hover:bg-opacity-10"
                    >
                        <i className="ri-github-fill mr-2"></i>View Code
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;