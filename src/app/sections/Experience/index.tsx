import DescriptionColumn from "@/components/DescriptionColumn";
import React from "react";
import experiences, {Experience} from "./experience";
import ExperienceCard from "@/components/ExperienceCard";
import { TwoColumns } from "@/layouts";

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience">
            <TwoColumns>
                <DescriptionColumn
                    title="Experience"
                    description="I bring a wealth of experience in data science and full-stack development. My background includes building ETL pipelines, developing full-stack applications, and creating mobile apps using GCP technologies. I've also mentored junior engineers, led projects, and emphasized efficiency and scalability in my work."
                />
                <div className="flex flex-col gap-10">
                    {experiences.map((experience: Experience, idx: number) => <ExperienceCard key={`experience-${idx}`} {...experience} />)}
                </div>
            </TwoColumns>
        </section>
    )
}

export default ExperienceSection;