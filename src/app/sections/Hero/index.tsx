"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const thingsILove: string[] = [
  "coding",
  "travelling",
  "coffee",
  "numbers",
  "sports",
  "stats",
  "books",
  "cats",
  "history",
  "music",
  "snow",
  "languages",
];

interface HireMeButtonProps {
  className: string;
}

const HireMeButton: React.FC<HireMeButtonProps> = ({className}) => (
  <div className={className}>
    <Link
      href="https://www.linkedin.com/in/caceresale/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 inline-block py-3 w-full sm:w-fit rounded-2xl mr-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:bg-slate-200 text-white text-2xl font-medium"
    >
      Hire Me!
  </Link>
</div>
)

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="flex flex-col text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold">
            <span>Hi,</span>
            <span>my name is</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-700">
              Alejandro Caceres
            </span>
            <span>I&apos;m a fullstack engineer</span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            ... and I love{" "}
            <em className="text-primary-50">
              <TypeAnimation
                sequence={thingsILove.map((item) => [item, 1000]).flat()}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </em>
          </p>
          <HireMeButton className="hidden sm:block"/>
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
          <HireMeButton className="sm:hidden text-center mt-6"/>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
