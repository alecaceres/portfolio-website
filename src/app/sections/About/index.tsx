import React from "react";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import DescriptionColumn from "@/components/DescriptionColumn";
import programmer from "images/programmer.png";
import { TwoColumns } from "@/layouts";

const About = async () => {
  const t = await getTranslations('about');

  return (
    <section id="about">
      <TwoColumns reverse>
        <Image src={programmer} alt="programmer" />
        <DescriptionColumn title={t('title')} description={t('description')} />
      </TwoColumns>
    </section>
  );
};

export default About;
