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
                    description="From scrappy startups to growing platforms, I've built features end-to-end, mentored engineers, and made technical decisions that actually mattered. I care about clean, scalable code — and even more about shipping things that solve real problems."
                />
                <div className="flex flex-col gap-10">
                    {experiences.map((experience: Experience, idx: number) => <ExperienceCard key={`experience-${idx}`} {...experience} />)}
                </div>
            </TwoColumns>
        </section>
    )
}

export default ExperienceSection;