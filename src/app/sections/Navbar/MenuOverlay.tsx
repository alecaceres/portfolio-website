import React from "react";
import NavLink from "./NavLink";

interface NavLink {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLink[];
  closeNavbar: () => void;
}


const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeNavbar }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index: number) => (
        <li key={index} onClick={closeNavbar}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;