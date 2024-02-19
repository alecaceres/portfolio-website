import React from "react";
import Image from "next/image";
import DescriptionColumn from "@/components/DescriptionColumn";
import programmer from  "images/programmer.png"

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Image
                src={programmer}
                alt="programmer"
            />
            <DescriptionColumn
                title="About Me"
                description="I'm a fullstack web developer with over four years of experience."
            />
        </div>
    )
}

export default About;