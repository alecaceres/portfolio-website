import React from "react";

interface ExperienceCardProps {
    startMonth: string;
    endMonth?: string;
    organisation: string;
    location: string;
    description: string;
    position: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ startMonth, endMonth = "Present", organisation, location, description, position }) => {
    return (
        <article className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 border-b-white border-b-2 pb-4 text-secondary-100">
            <div className="flex flex-col sm:flex-row justify-between">
                <span className="text-xl">{position}</span>
                <span className="text-sm"><i className="ri-calendar-line mr-2 md:mr-3 lg:mr-4"></i>{startMonth} - {endMonth}</span>
            </div>
            <div className="flex gap-4">
                <span><i className="ri-building-4-line mr-2"></i>{organisation}</span>
                <span><i className="ri-map-pin-line mr-2"></i>{location}</span>
            </div>
            <div>{description}</div>
        </article>
    );
};

export default ExperienceCard;
