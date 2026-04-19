export interface Education {
    startMonth: string;
    endMonth?: string;
    organisation: string;
    location: string;
    description: string;
    position: string;
}

const education: Education[] = [
    {
        startMonth: "Jul 2015",
        endMonth: "May 2021",
        organisation: "Universidad Nacional de Asuncion",
        location: "Asuncion, Paraguay",
        description: "5-year engineering degree with a focus on robotics, automation, and systems thinking.",
        position: "Mechatronics Engineering",
    },
    {
        startMonth: "Sep 2018",
        endMonth: "Aug 2019",
        organisation: "Darmstadt University of Applied Sciences",
        location: "Darmstadt, Germany",
        description: "A full year studying in Germany, taking courses in Electronics, Information Technologies, and Mechatronic Systems — while going from conversational to fully fluent in German.",
        position: "Exchange Semesters",
    },
    {
        startMonth: "2024",
        organisation: "Amazon Web Services",
        location: "Online",
        description: "Foundational certification validating cloud fluency and AWS services knowledge",
        position: "AWS Certified Cloud Practitioner",
    },
];

export default education;