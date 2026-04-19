"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from 'next-intl';

interface ButtonProps {
  className: string;
  label: string;
}

const HireMeButton: React.FC<ButtonProps> = ({ className, label }) => (
  <div className={className}>
    <Link
      href="#contact"
      className="h-full px-4 md:px-6 inline-block py-2 md:py-3 w-full sm:w-fit rounded-lg md:rounded-2xl mr-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:bg-slate-200 text-white md:text-xl lg:text-2xl font-medium hover:opacity-95"
    >
      {label}
    </Link>
  </div>
);

const DownloadCVButton: React.FC<ButtonProps> = ({ className, label }) => (
  <div className={className}>
    <Link
      href="/documents/AC_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 md:px-6 inline-block py-2 md:py-3 w-full sm:w-fit rounded-lg md:rounded-2xl hover:bg-slate-800 border-2 border-slate-500 text-white md:text-xl lg:text-2xl font-medium"
      prefetch={false}
      download
    >
      {label}
    </Link>
  </div>
);

const HeroSection: React.FC = () => {
  const t = useTranslations('hero');
  const loves = t.raw('loves') as string[];

  return (
    <section className="lg:py-16 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="flex flex-col text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold">
            <span>{t('greeting')}</span>
            <span>{t('myNameIs')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-700">
              Alejandro Cáceres
            </span>
            <span>{t('role')}</span>
          </h1>
          {loves.length > 0 && (
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
              {t('lovePrefix')}{" "}
              <em className="text-primary-50">
                <TypeAnimation
                  sequence={loves.flatMap((item) => [item, 1000])}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </em>
            </p>
          )}
          <div className="flex space-x-4">
            <HireMeButton className="hidden sm:block" label={t('hireMe')} />
            <DownloadCVButton className="hidden sm:block" label={t('downloadCV')} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full border-9 border-solid bg-gradient-to-r from-primary-600 to-secondary-600 w-[261px] h-[261px] lg:w-[418px] lg:h-[418px] flex justify-center items-center">
            <Image
              priority
              src="/images/profile.jpeg"
              alt="hero image"
              className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
              width="300"
              height="300"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6 sm:hidden">
            <HireMeButton className="sm:hidden text-center mt-6" label={t('hireMe')} />
            <DownloadCVButton className="sm:hidden text-center mt-6" label={t('downloadCV')} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
