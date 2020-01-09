import React from "react";
import { Link } from "gatsby";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      to={href}
      className="block mt-8 text-gray-200 hover:text-blue-400 hover:underline no-underline"
    >
      {children}
    </Link>
  );
};

export default NavLink;
