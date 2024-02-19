import React from "react";
import Image from "next/image";
import DescriptionColumn from "@/components/DescriptionColumn";
import Link from "next/link";

interface Technology {
    name: string;
    url: string;
}

const technologies: Technology[] = [
    {
        name: "react",
        url: "https://react.dev/"
    },
    {
        name: "vue",
        url: "https://vuejs.org/",
    },
    {
        name: "typescript",
        url: "https://www.typescriptlang.org/",
    },
    {
        name: "nuxt",
        url: "https://nuxt.com/",
    },
    {
        name: "python",
        url: "https://www.python.org/",
    },
    {
        name: "next",
        url: "https://nextjs.org/",
    },
    {
        name: "bootstrap",
        url: "https://getbootstrap.com/",
    },
    {
        name: "tailwind",
        url: "https://tailwindcss.com/",
    },
    {
        name: "sass",
        url: "https://sass-lang.com/",
    },
    {
        name: "git",
        url: "https://git-scm.com/",
    },
    {
        name: "storybook",
        url: "https://storybook.js.org/",
    }
]

const RightColumn: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-14">
            {technologies.map(({name, url}) => (
                <Link key={name} href={url} className="col-span-1" target="_blank">
                    <div className="h-28 relative hover:scale-105">
                        <Image
                            src={`images/technologies/${name}.svg`}
                            alt={name}
                            fill
                            className="transition-transform duration-300 transform hover:rotate-3"
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}


const Technologies: React.FC = () => {
    return (
        <section id="skills" className="grid grid-cols-2 gap-4">
            <DescriptionColumn
                title="Technologies"
                description="Some of these I've learnt for work, some for just for fun. I adapt myself to challenges."
            />
            <RightColumn/>
        </section>
    )
}

export default Technologies;