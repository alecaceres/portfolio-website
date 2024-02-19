import DescriptionColumn from "@/components/DescriptionColumn";
import React from "react";
import experiences from "./experience";
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <DescriptionColumn
                title="Experience"
                description="I bring a wealth of experience in data science and full-stack development. My background includes building ETL pipelines, developing full-stack applications, and creating mobile apps using GCP technologies. I've also mentored junior engineers, led projects, and emphasized efficiency and scalability in my work."
            />
            <div className="flex flex-col gap-10">
                {experiences.map(experience => <ExperienceCard {...experience} />)}
            </div>
        </div>
    )
}

export default Experience;