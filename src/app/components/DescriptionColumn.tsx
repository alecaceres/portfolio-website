import React from "react";

const DescriptionColumn = ({title, description, children}) => {
    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold mb-4">{title}</h2>
                <p className="text-secondary-200 text-2xl leading-normal">{description}</p>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default DescriptionColumn;