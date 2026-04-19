import React from "react";
import educations, { Education } from "./education";
import DescriptionColumn from "@/components/DescriptionColumn";
import ExperienceCard from "@/components/ExperienceCard";
import { TwoColumns } from "@/layouts";

const EducationSection: React.FC = () => {
    return (
        <section id="education">
            <TwoColumns>
                <DescriptionColumn
                    title="Education"
                    description="A 5-year engineering degree shapes how you approach problems — methodically and thoroughly. A year studying abroad in Germany on top of that, and speaking three languages fluently, means I bring a broader perspective than most."
                />
                <div className="flex flex-col gap-10">
                    {educations.map((education: Education, idx: number) => (
                        <ExperienceCard key={`education-${idx}`} {...education} />
                    ))}
                </div>
            </TwoColumns>
        </section>
    )
}

export default EducationSection;
