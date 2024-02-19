import React from "react";
import NavLink from "./NavLink";

interface NavLink {
  title: string;
  path: string;
}

type links = NavLink[];

const MenuOverlay = ({ links }: {links: links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;