import React, { useState } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-row bg-gray-200">
      <div className="w-36 mr-2">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="w-full p-2 md:p-10">
        <div className="bg-white mx-auto flex flex-col justify-center align-middle shadow-lg min-h-full p-2 md:p-10 rounded">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
