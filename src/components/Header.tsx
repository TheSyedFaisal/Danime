"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden"; // scroll disable
  } else {
    document.body.style.overflow = "auto"; // scroll enable
  }
}, [menuOpen]);
  return (
    /* h-auto use kiya hai taake image jitni lambi ho, container khud adjust ho jaye */
    <div className="w-full relative h-auto overflow-hidden bg-[#eaeaea]">
      {/* Background Image - fill ke bajaye responsive width use ki hai */}
      <Image
        src="/HeaderImg.png"
        width={1920}
        height={120}
        alt="Header Curve"
        className="w-full md:h-auto z-0 h-[60px]"
        priority
      />

      {/* Navigation Container - content ko image ke bottom par align kiya hai */}
      <nav className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center md:justify-between px-4 lg:px-8">
        {/* 1. Logo (Left) */}
        <div className="flex-shrink-0 mb-4 md:mb-0 ">
          <Image
            src="/Logo.png"
            height={40}
            width={120}
            alt="Danime Logo"
            className="w-[130px] md:w-[100px] lg:w-[130px] h-auto object-contain"
          />
        </div>

        {/* 2. Nav Links (Center) */}
        <ul className="md:flex items-center gap-6 lg:gap-12 md:text-lg lg:text-xl text-white font-medium mb-3 lg:mb-5 hidden">
          <li className="cursor-pointer hover:opacity-70 transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:opacity-70 transition-all whitespace-nowrap">
            Design Custom
          </li>
          <li className="cursor-pointer hover:opacity-70 transition-all">
            Collections
          </li>
          <li className="cursor-pointer hover:opacity-70 transition-all">
            About
          </li>
        </ul>

        {/* 3. Icons (Right) */}
        <div className="flex items-center gap-1.5 sm:gap-3 hidden md:flex md:mt-10">
          <span className="p-1.5 border border-secondary rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image
              src="/notification.svg"
              height={16}
              width={16}
              alt="notif"
              className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
            />
          </span>
          <span className="p-1.5 border border-secondary rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image
              src="/heart.svg"
              height={16}
              width={16}
              alt="wishlist"
              className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
            />
          </span>
          <span className="p-1.5 border border-secondary rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image
              src="/bag-2.svg"
              height={16}
              width={16}
              alt="cart"
              className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
            />
          </span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden secondary text-2xl z-50 absolute right-4 bottom-2 cursor-pointer"
        >
          {menuOpen ? <IoClose size={32} /> : <IoMdMenu size={32} />}
        </button>
      </nav>
      {/* mobile nav */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-1 flex flex-col items-center justify-center transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
          <li
            className="cursor-pointer hover:secondary transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:secondary transition"
            onClick={() => setMenuOpen(false)}
          >
            Design Custom
          </li>
          <li
            className="cursor-pointer hover:secondary transition"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </li>
          <li
            className="cursor-pointer hover:secondary transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="flex gap-6 mt-10">
          {["notification", "heart", "bag-2"].map((icon) => (
            <div className="p-2 border border-secondary rounded-full cursor-pointer hover:bg-red-50 transition-all">
              <Image
              key={icon}
              src={`/${icon}.svg`}
              width={20}
              height={20}
              alt={icon}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
