export interface ExperienceData {
  startMonth: string;
  endMonth?: string;
  organisation: string;
  location: string;
}

const experience: ExperienceData[] = [
  {
    startMonth: "Mar 2024",
    organisation: "Social Currant",
    location: "Washington DC, USA",
  },
  {
    startMonth: "May 2021",
    endMonth: "Mar 2024",
    organisation: "Workfinder",
    location: "London, UK",
  },
  {
    startMonth: "Feb 2022",
    endMonth: "May 2022",
    organisation: "Social Currant",
    location: "Washington DC, USA",
  },
  {
    startMonth: "Jan 2019",
    endMonth: "May 2021",
    organisation: "Warden Automation",
    location: "Asuncion, Paraguay",
  },
];

export default experience;
