import React from "react";
import educations, { Education } from "./education";
import DescriptionColumn from "@/components/DescriptionColumn";
import ExperienceCard from "@/components/ExperienceCard";

const EducationSection: React.FC = () => {
    return (
        <section id="education" className="grid grid-cols-2 gap-4">
            <DescriptionColumn
                title="Education"
                description="I have a background in mechatronics engineering and also exchange semesters in Germany"
            />
            <div className="flex flex-col gap-10">
                {educations.map((education: Education, idx: number) => (
                    <ExperienceCard key={`education-${idx}`} {...education} />
                ))}
            </div>
        </section>
    )
}

export default EducationSection;
