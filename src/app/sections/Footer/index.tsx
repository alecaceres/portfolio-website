import Link from "next/link";
import React from "react";
import { getTranslations } from 'next-intl/server';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className="border-t-primary-600 border-t-2 mx-3 pt-8 text-white md:text-lg flex flex-col text-center gap-6 mb-8 mt-4">
      <a href="mailto:aleda997@gmail.com">aleda997@gmail.com</a>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://github.com/alecaceres/portfolio-website"
          target="_blank"
          aria-label={t('githubLabel')}
        >
          <i className="ri-github-fill text-lg"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/caceresale/"
          target="_blank"
          aria-label={t('linkedinLabel')}
        >
          <i className="ri-linkedin-fill text-lg"></i>
        </Link>
      </div>
      <span>
        {t('designedBy')}&nbsp;
        <Link
          href="https://erika.engineer/"
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text"
          target="_blank"
        >
          Erika Aquino
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
