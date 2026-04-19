export interface EducationData {
  startMonth: string;
  endMonth?: string;
  organisation: string;
  location: string;
}

const education: EducationData[] = [
  {
    startMonth: "Jul 2015",
    endMonth: "May 2021",
    organisation: "Universidad Nacional de Asuncion",
    location: "Asuncion, Paraguay",
  },
  {
    startMonth: "Sep 2018",
    endMonth: "Aug 2019",
    organisation: "Darmstadt University of Applied Sciences",
    location: "Darmstadt, Germany",
  },
  {
    startMonth: "2024",
    organisation: "Amazon Web Services",
    location: "Online",
  },
];

export default education;
