import React from "react";
import NavLink from "./NavLink";
import Bitmoji from "../images/jason-bitmoji.png";

interface Props {
  isMenuOpen: boolean;
  setMenuOpen: (isMenuOpen: boolean) => void;
}

const Header: React.FC<Props> = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <nav className="bg-orange-600 min-h-screen flex flex-col justify-center shadow-xl">
      <div className="">
        <NavLink href="./">
          <img
            className="w-32 h-auto ml-0 pl-0 mt-2"
            src={Bitmoji}
            alt="riceboyler.com"
          />
        </NavLink>
      </div>
      <div className="justify-start flex items-start w-auto pl-2">
        <div className="text-md flex-col ">
          <NavLink href="playground">Playground</NavLink>
          <NavLink href="resume">Resumé/CV</NavLink>
          <NavLink href="#responsive-header">Portfolio</NavLink>
          <NavLink href="#responsive-header">About Me</NavLink>
          <NavLink href="#responsive-header">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
