"use client"
import { footerLinks } from "@/lib/constant";
import Image from "next/image";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {

  return (
    <div className="bg-[url('/footerImg.png')] bg-cover bg-center w-full ">
      <div className="bg-[#0B0B0B]/70 h-full px-4 md:px-10">
        <div className="flex items-start justify-between text-white pt-10 pb-6 md:pb-14">
          {footerLinks.map((item) => (
            <div key={item.id}>
              <h4 className="page-font text-[8px] sm:text-base md:text-xl lg:text-2xl">
                {item.heading}
              </h4>
              <div className="mt-2.5 md:mt-5">
                {item.links.map((links, idx) => (
                  <p
                    key={idx}
                    className="leading-2 sm:leading-4 md:leading-6.5 cursor-pointer  
                    text-[6px] sm:text-[10px] md:text-xl hover:underline hover:text-gray-300"
                  >
                    {links.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border border-foreground text-foreground rounded-full 
            md:p-1 hover:border-background cursor-pointer"
          >
            <IoIosArrowRoundUp color="foreground" size={35} />
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
