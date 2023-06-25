import React from "react";

//Simple Header to navigate the user back to start
//Can be extended upon to add several pages if needed
const Header: React.FC = () => {
  return (
    <header className="flex">
      <h1 className="text-3xl">
        <a href="/">My Beer Pal</a>
      </h1>
    </header>
  );
};

export default Header;
