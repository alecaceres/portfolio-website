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
                    layout="responsive"
                    width={1300}
                    height={1028}
                />
                <DescriptionColumn
                    title="About Me"
                    description="I'm a fullstack web developer with over four years of experience."
                />
            </TwoColumns>
        </section>
    )
}

export default About;