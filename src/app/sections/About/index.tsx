import React from "react";
import Image from "next/image";
import DescriptionColumn from "@/components/DescriptionColumn";
import programmer from  "images/programmer.png"
import { TwoColumns } from "@/layouts";

const About: React.FC = () => {
    return (
        <section id="about">
            <TwoColumns reverse>
                <Image
                    src={programmer}
                    alt="programmer"
                />
                <DescriptionColumn
                    title="About Me"
                    description="I'm a fullstack engineer with 7+ years of experience, comfortable across the whole stack — React and Vue on the frontend, Django and Python on the backend, and cloud on top. My roots are in data science and AI, so I bring a bit more than just engineering to the table. Trilingual, AWS certified, and always picking up something new."
                />
            </TwoColumns>
        </section>
    )
}

export default About;
