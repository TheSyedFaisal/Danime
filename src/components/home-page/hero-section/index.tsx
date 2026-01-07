import { url } from "inspector";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" mx-4 md:mx-8 mt-10 md:mt-20">
      <div className="flex items-center justify-between md:px-6 lg:px-25">
        <div>
          <h2 className="text-black text-lg md:text-2xl lg:text-[35px] leading-[100%] page-font ml-1 lg:ml-2">
            Be the
          </h2>
          <h1 className="secondary text-4xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
            only
          </h1>
        </div>
        <div>
          <h2 className="text-black text-lg md:text-2xl lg:text-[35px] leading-[100%] page-font">
            one in the
          </h2>
          <h1 className="secondary text-4xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
            ROOM
          </h1>
        </div>
      </div>

      <div className=" bg-[#D93444] w-full max-w-[1801px] h-[450px] md:h-[350px] md:h-[460px] mx-auto mt-10 mb-2 rounded-2xl relative px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Background Image */}
        <div className="absolute left-0 top-5 pointer-events-none rounded-l-2xl h-full">
          <Image
            src="/vector-1.svg"
            alt="Left Background"
            width={400}
            height={400}
            className="w-[180px] md:w-[280px] lg:w-[550px] h-auto"
          />
        </div>

        {/* Right Background Image */}
        <div className="absolute right-0 top-5 pointer-events-none h-[120%]">
          <Image
            src="/vector-2.svg"
            alt="Right Background"
            width={500}
            height={500}
            className="w-[250px] md:w-[450px] lg:w-[840px] h-auto"
          />
        </div>

        {/* TEXT (LEFT SIDE) */}
        <div className="flex items-end justify-between w-full mt-3 md:mt-0">
          <div className="relative z-10  md:max-w-[350px] text-white space-y-3">
            <div className=" md:mb-28">
              <h2 className="text-xl md:text-3xl text-center md:text-left font-bold page-font mb-1.5 md:mb-3">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-xs md:text-lg text-center md:text-left md:max-w-[285px]">
                Ditch the mass-produced merch. We create 1-of-1, hand-painted
                denim masterpieces that ensure your style is as unique as your
                fandom.
              </p>
            </div>

            <div>
              <button className="border px-4 py-4 md:py-2 page-font text-xs w-full md:w-auto">
                shop now{" "}
              </button>
            </div>
          </div>

          <div>
            <div className="relative z-100 bg-[#F54F5F] rounded-xl p-3 hidden md:block">
            <div className="flex">
              <Image src="/user.png" alt="" height={30} width={30} />
              <Image src="/user.png" alt="" height={30} width={30} />
              <Image src="/user.png" alt="" height={30} width={30} />
            </div>
            <p className="max-w-[150px] text-white mt-1 text-xs">
              Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu
              blandit laoreet.{" "}
            </p>
          </div>
          </div>
        </div>

        <div className="md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 sm:-translate-y-1/2 z-20">
          <Image
            src="/hero-imagee.png"
            width={400}
            height={400}
            alt="Hero Image"
            className="w-[160px] sm:w-[190px] md:w-[400px] drop-shadow-2xl relative sm:top-[145.8px] md:-top-19"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
