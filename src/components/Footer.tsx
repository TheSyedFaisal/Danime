"use client";
import { footerLinks } from "@/lib/constant";
import Image from "next/image";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[url('/footerImg.png')] bg-cover bg-center w-full container">
      <div className="bg-[#0B0B0B]/70 h-full px-4 md:px-10">
        <div className="flex items-start justify-between text-white pt-10 pb-6 md:pb-14">
          {footerLinks.map((item) => (
            <div key={item.id}>
              <h4 className="page-font text-[8px] sm:text-base md:text-xl lg:text-2xl">
                {item.heading}
              </h4>
              <div className="mt-2.5 md:mt-5 flex flex-col">
                {item.links.map((links, idx) => (
                  <p
                    key={idx}
                    className="relative inline-block w-fit cursor-pointer leading-2 sm:leading-4 md:leading-6.5
                      text-[6px] sm:text-[10px] md:text-xl text-white/70 hover:text-gray-300 transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full
                      after:bg-current after:transition-all after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)]  "
                  >
                    {links.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent p-0.5 md:p-2 md:p-1 cursor-pointer transition-all duration-300 ease-out
            relative overflow-hidden rounded-full border-2 border-foreground text-foreground hover:bg-white/60
            hover:backdrop-blur-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:scale-105 text-xs sm:text-xl md:text-[30px]"
          >
            <IoIosArrowRoundUp  />
          </button>
        </div>

        <hr className="text-foreground" />
        <div className="text-center flex flex-col items-center text-white mt-8 md:mt-12 pb-4">
          <Image
            className="w-[280px] md:w-[500px] h-full"
            src="/Logo.png"
            height={600}
            width={500}
            alt=""
          />
          <p className="text-xs md:text-base">
            2025 © Privacy. All copyright reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
