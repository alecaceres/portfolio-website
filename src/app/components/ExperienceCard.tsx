import React from "react";

const ExperienceCard = ({startMonth, endMonth="Present", organisation, location, description, position}) => {
    return (
        <div className="flex flex-col gap-6 border-b-white border-b-2 pb-4 text-secondary-200">
            <div className="flex justify-between">
                <span className="text-xl">{position}</span>
                <span className="text-sm"><i className="ri-calendar-line mr-4"></i>{startMonth} - {endMonth}</span>
            </div>
            <div className="flex gap-4">
                <span><i className="ri-building-4-line mr-2"></i>{organisation}</span>
                <span><i className="ri-map-pin-line mr-2"></i>{location}</span>
            </div>
            <div>{description}</div>
        </div>
    )
}

export default ExperienceCard;