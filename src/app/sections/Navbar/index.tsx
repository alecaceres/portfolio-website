"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import NavLink from "./NavLink";
import Hamburger from 'hamburger-react';
import MenuOverlay from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "images/logo.svg";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations('nav');

  const navLinks = [
    { title: t('skills'), path: "#skills" },
    { title: t('about'), path: "#about" },
    { title: t('experience'), path: "#experience" },
    { title: t('education'), path: "#education" },
    { title: t('projects'), path: "#projects" },
    { title: t('contact'), path: "#contact" },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gradient-to-r from-black to-black/85 backdrop-blur">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image priority src={logo} alt="personal-logo" />
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <Hamburger label="hamburger-icon" toggled={navbarOpen} toggle={setNavbarOpen} size={15} />
        </div>
        <div className="menu hidden md:flex md:items-center md:gap-4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay links={navLinks} closeNavbar={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
