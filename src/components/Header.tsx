"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import IconGroup from "./ui/IconGroup";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [menuOpen]);
  return (
    <div className="w-full relative h-auto overflow-hidden bg-[#eaeaea] container">
      <Image
        src="/HeaderImage.png"
        width={1920}
        height={120}
        alt="Header Curve"
        className="w-full md:h-auto z-0 h-[60px]"
        priority
      />

      <nav className="absolute inset-x-0 bottom-0 z-100 flex items-end justify-center md:justify-between px-4 lg:px-8">
        <div className="flex-shrink-0 mb-4 md:mb-0 ">
          <Image
            src="/Logo.png"
            height={40}
            width={120}
            alt="Danime Logo"
            className="w-[130px] md:w-[100px] lg:w-[130px] h-auto object-contain"
          />
        </div>

        <ul className="md:flex items-center gap-1 lg:gap-4 md:text-lg lg:text-xl text-white font-medium mb-1.5 lg:mb-3 hidden">
          <li className="cursor-pointer transition-all bg-transparent hover:bg-white hover:text-foreground px-3 lg:px-6 py-1 lg:py-2 rounded-full">
            Home
          </li>
          <li className="cursor-pointer bg-transparent hover:bg-white hover:text-foreground px-3 lg:px-6 py-1 lg:py-2 rounded-full transition-all whitespace-nowrap">
            Design Custom
          </li>
          <Link href='/collections' className="cursor-pointer bg-transparent hover:bg-white hover:text-foreground px-3 lg:px-6 py-1 lg:py-2 rounded-full transition-all">
            Collections
          </Link>
          <li className="cursor-pointer bg-transparent hover:bg-white hover:text-foreground px-3 lg:px-6 py-1 lg:py-2 rounded-full transition-all">
            About
          </li>
        </ul>

        <IconGroup />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground text-2xl z-50 absolute left-4 cursor-pointer"
        >
          {menuOpen ? <IoClose size={32} /> : <IoMdMenu size={32} />}
        </button>
      </nav>
      {/* mobile nav */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-99 flex flex-col items-center justify-center transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
          <li
            className="cursor-pointer hover:text-foreground transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-foreground transition"
            onClick={() => setMenuOpen(false)}
          >
            Design Custom
          </li>
          <Link href='/collections'
            className="cursor-pointer hover:text-foreground transition"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </Link>
          <li
            className="cursor-pointer hover:text-foreground transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
