import { getTranslations } from 'next-intl/server';
import React from "react";
import projectsData, { ProjectData } from "./projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = async () => {
  const t = await getTranslations('projects');

  return (
    <section id="projects" className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">
          {t('title')}
        </h2>
        <p className="text-secondary-100 text-xl lg:text-2xl leading-normal">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {projectsData.map((project: ProjectData, idx: number) => (
          <ProjectCard
            key={idx}
            {...project}
            title={t(`items.${idx}.title`)}
            description={t(`items.${idx}.description`)}
            seeLiveLabel={t('seeLive')}
            viewCodeLabel={t('viewCode')}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
