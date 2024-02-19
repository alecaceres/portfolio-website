import React from "react";

const GradientSpot: React.FC = () => {
    return (
        <div className="container relative">
            <div className="gradient-spot absolute top-28 right-0 z-[-1] w-96 h-96 blur-[94px]" aria-hidden="true"></div>
        </div>
    );
};

export default GradientSpot;
