import React from "react";
import educations from "./education";
import DescriptionColumn from "@/components/DescriptionColumn";
import ExperienceCard from "@/components/ExperienceCard";

const Education = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <DescriptionColumn
                title="Education"
                description="I have a background in mechatronics engineering and also exchange semesters in Germany"
            />
            <div className="flex flex-col gap-10">
                {educations.map(education => <ExperienceCard {...education} />)}
            </div>
        </div>
    )
}

export default Education;