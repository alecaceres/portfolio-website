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
                    description="I have a background in mechatronics engineering and also exchange semesters in Germany"
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
