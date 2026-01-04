import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <Image src='/HeaderImg.png' height={120} width={1920} alt=""/>
      <nav>
        <li className="flex items-center gap-6 justify-center absolute top-7 left-1/2 -translate-x-1/2 text-2xl text-white header-font">
          <span>Home</span>
          <span>Design Custom</span>
          <span>Collections</span>
          <span>About</span>
        </li>
      </nav>
    </div>
  );
};

export default Header;
