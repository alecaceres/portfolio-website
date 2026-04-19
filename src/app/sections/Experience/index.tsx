import { getTranslations } from 'next-intl/server';
import DescriptionColumn from "@/components/DescriptionColumn";
import React from "react";
import experienceData, { ExperienceData } from "./experience";
import ExperienceCard from "@/components/ExperienceCard";
import { TwoColumns } from "@/layouts";

const ExperienceSection = async () => {
  const t = await getTranslations('experience');
  const tMonths = await getTranslations('monthAbbr');

  const localizeDate = (dateStr: string) =>
    dateStr.replace(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
      (m) => tMonths(m as Parameters<typeof tMonths>[0])
    );

  return (
    <section id="experience">
      <TwoColumns>
        <DescriptionColumn title={t('title')} description={t('description')} />
        <div className="flex flex-col gap-10">
          {experienceData.map((exp: ExperienceData, idx: number) => (
            <ExperienceCard
              key={idx}
              {...exp}
              startMonth={localizeDate(exp.startMonth)}
              endMonth={exp.endMonth ? localizeDate(exp.endMonth) : undefined}
              position={t(`items.${idx}.position`)}
              description={t(`items.${idx}.description`)}
              presentLabel={t('present')}
            />
          ))}
        </div>
      </TwoColumns>
    </section>
  );
};

export default ExperienceSection;
