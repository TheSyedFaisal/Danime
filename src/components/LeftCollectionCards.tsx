import Image from "next/image";
import React from "react";
import ShopNowButton from "./ui/Button";

const LeftCollectionCards = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col min-h-[350px] lg:min-h-[636px] rounded-2xl overflow-hidden bg-white relative">
        <Image
          src="/card-1-img-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        <div className="relative group w-full h-full">
          {/* Card 1 image - top rotated */}
          <div className="group-hover:scale-110 transition-transform duration-2000 ease-in-out">
            <Image
              src="/card-1-img-2.png"
              alt=""
              width={240}
              height={240}
              className="absolute top-6 md:w-[300px] md:h-[300px] lg:w-[240px] lg:h-[240px] right-0 lg:right-16 rotate-12 z-10
                  transition-transform duration-2000 ease-in-out 
                  lg:group-hover:translate-x-30 "
            />

            {/* Card 1 image 3 - height increased */}
            <div
              className="absolute -left-60 z-20 w-[500px] h-[680px] 
                  transition-transform duration-2000 ease-in-out
                  group-hover:translate-x-30 hidden lg:block "
            >
              <Image src="/card-1-img-3.png" alt="" fill className="" />
            </div>
          </div>

          {/* Cardred image - fade in on hover */}
          <div
            className="absolute inset-0 z-30 hidden lg:block
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700 ease-in-out "
          >
            <Image
              src="/cardred.png"
              alt=""
              fill
              className="object-cover pointer-events-none"
            />
          </div>

          {/* Rectangle for small screens - fade in on hover */}
          <div className="absolute inset-0 z-30 lg:hidden">
            <Image
              src="/rectangel-2.png"
              alt=""
              fill
              className="pointer-events-none"
            />
          </div>
        </div>

        <div className="absolute z-20 w-[350px] h-[500px] h-[500px] md:w-[700px] md:h-[670px] -bottom-30 md:-bottom-50 -left-30 lg:hidden">
          <Image
            src="/card-1-img-3.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* LEFT TEXT */}
      <div className="mt-3 text-center lg:text-left">
        <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
          CREATE CUSTOM
        </h4>
        <ShopNowButton>shop now</ShopNowButton>
      </div>
    </div>
  );
};

export default LeftCollectionCards;
