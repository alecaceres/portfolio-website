"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Hamburger from 'hamburger-react';    
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import logo from "images/logo.svg";

const navLinks = [
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Education",
    path: "#education",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gradient-to-r from-black to-black/85 backdrop-blur">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            priority
            src={logo}
            alt="personal-logo"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={15}/>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} closeNavbar={() => setNavbarOpen(false)}/>
      ) : null}
    </nav>
  );
};

export default Navbar;