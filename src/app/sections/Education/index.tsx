import { getTranslations } from 'next-intl/server';
import React from "react";
import educationData, { EducationData } from "./education";
import DescriptionColumn from "@/components/DescriptionColumn";
import ExperienceCard from "@/components/ExperienceCard";
import { TwoColumns } from "@/layouts";

const EducationSection = async () => {
  const t = await getTranslations('education');
  const tMonths = await getTranslations('monthAbbr');

  const localizeDate = (dateStr: string) =>
    dateStr.replace(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
      (m) => tMonths(m as Parameters<typeof tMonths>[0])
    );

  return (
    <section id="education">
      <TwoColumns>
        <DescriptionColumn title={t('title')} description={t('description')} />
        <div className="flex flex-col gap-10">
          {educationData.map((edu: EducationData, idx: number) => (
            <ExperienceCard
              key={idx}
              {...edu}
              startMonth={localizeDate(edu.startMonth)}
              endMonth={edu.endMonth ? localizeDate(edu.endMonth) : undefined}
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

export default EducationSection;
