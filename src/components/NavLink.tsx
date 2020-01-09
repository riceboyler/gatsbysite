import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block mt-8 text-gray-200 hover:text-blue-400 hover:underline no-underline"
    >
      {children}
    </a>
  );
};

export default NavLink;
