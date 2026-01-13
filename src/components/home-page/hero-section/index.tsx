import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-6 pt-8 md:pt-20 container  ">
      <div className="flex items-center justify-between px-3 sm:px-22 lg:px-25 ">
        <div>
          <h2 className="text-black text-sm md:text-2xl lg:text-[35px] leading-[100%] page-font ml-1 lg:ml-2">
            Be the
          </h2>
          <h1 className="secondary text-2xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
            only
          </h1>
        </div>
        <div>
          <h2 className="text-black text-sm md:text-2xl lg:text-[35px] leading-[100%] page-font">
            one in the
          </h2>
          <h1 className="secondary text-2xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
            ROOM
          </h1>
        </div>
      </div>

      <div className=" bg-[#D43642] w-full max-w-[1801px] h-[178px] sm:h-[260] md:h-[460px] mx-auto mt-5 md:mt-10 mb-2 rounded lg:rounded-2xl relative px-4 md:px-6 flex justify-between items-center">
        {/* Left Background Image */}
        <div className="absolute left-0 top-5 pointer-events-none rounded-l-2xl h-full hidden md:block">
          <Image
            src="/vector-1.svg"
            alt="Left Background"
            width={400}
            height={400}
            className="w-[180px] md:w-[280px] lg:w-[550px] h-auto"
          />
        </div>

        {/* Right Background Image */}
        <div className="absolute right-0 top-5 pointer-events-none h-[120%] hidden md:block">
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
          <div className="relative z-10  text-white space-y-3 ">
            <div className="mb-10 md:mb-40 lg:mb-26">
              <h2 className="text-[8px] sm:text-base md:text-2xl lg:text-3xl max-w-[90px] sm:max-w-[180px] md:max-w-[260px] lg:max-w-[350px] text-left font-bold page-font mb-1.5 md:mb-3">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-[4px] sm:text-xs lg:text-base text-left max-w-[70px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-[285px]">
                Ditch the mass-produced merch. We create 1-of-1, hand-painted
                denim masterpieces that ensure your style is as unique as your
                fandom.
              </p>
            </div>

            <div>
              <button className="border px-2 md:px-4 py-1 md:py-2 lg:py-4 md:py-2 page-font text-[8px] md:text-xs w-auto">
                shop now{" "}
              </button>
            </div>
          </div>

          <div>
            <div className="relative z-100 md:bg-[#F54F5F] rounded md:rounded-xl p-1 md:p-3 ">
            <div className="flex">
              <Image src="/user.png" alt="" height={30} width={30} className="w-[10px] h-[10px] sm:w-[30px] sm:h-[30px]" />
              <Image src="/user.png" alt="" height={30} width={30} className="w-[10px] h-[10px] sm:w-[30px] sm:h-[30px]" />
              <Image src="/user.png" alt="" height={30} width={30} className="w-[10px] h-[10px] sm:w-[30px] sm:h-[30px]" />
            </div>
            <p className="max-w-[50px] sm:max-w-[150px] text-white mt-1 text-[4px] sm:text-xs">
              Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu
              blandit laoreet.{" "}
            </p>
          </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 z-20 w-[155px] sm:w-auto">
          <Image
            src="/hero-imagee.png"
            width={600}
            height={600}
            alt="Hero Image"
            className="w-[100%] sm:w-[190px] md:w-[300px] lg:w-[400px] drop-shadow-2xl relative -top-[30px] sm:-top-4 md:top-0 lg:-top-19 image"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
