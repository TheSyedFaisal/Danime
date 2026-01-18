import { products } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const HotSellers = () => {

  return (
    <div className="mt-12 mb-12">
      <h2 className="text-center page-font text-2xl md:text-3xl lg:text-4xl">
        HOT SELLERS
      </h2>

      <div
        className="grid grid-cols-3 gap-y-12 gap-x-8 place-items-center
        mt-10 px-4 md:px-8"
      >
        {products.map((item) => (
          <div key={item.id} className="w-full sm:max-w-[350px] ">
            {/* IMAGE CARD */}
            <div className="card clippath py-10 md:py-12 rounded px-3 group hidden md:block">
              <Image
                src={item.image}
                height={495}
                width={300}
                alt=""
                className="mx-auto custom-shadow"
              />
            </div>

            <Image
              src={item.image}
              height={495}
              width={300}
              alt=""
              className="mx-auto custom-shadow block md:hidden w-[200px] h-auto object-contain"
            />

            {/* CONTENT */}
            <div className="mt-2">
              <div className="flex gap-1 md:gap-4 md:pt-4 pb-2 w-full">
                {/* LEFT */}
                <div className="flex-1">
                  <h2 className="gilmer-heavy text-[7.2px] md:text-base leading-none tracking-wide">
                    {item.category}
                  </h2>

                  <h3 className="font-semibold text-foreground text-[4.3px] md:text-sm mb-0.5 md:mb-2 mt-1 md:mt-4 header-font">
                    {item.name}
                  </h3>

                  <p className="text-[4.3px] md:text-xs leading-snug text-[#7D7D7D] mb-1 md:mb-2">
                    {item.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-between md:justify-center gap-1 md:gap-3">
                  {/* COLORS */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[4.3px] md:text-xs black-han text-muted">
                      COLOR
                    </span>
                    <div className="flex gap-1">
                      {item.colors.map((color, i) => (
                        <button
                          key={i}
                          className="w-[4.3px] h-[4.3px] md:w-2.5 md:h-2.5 rounded-full border hover:scale-110 transition"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* SIZES */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[4.3px] md:text-xs black-han text-muted">
                      SIZE
                    </span>
                    <div className="flex gap-1">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          className="w-[5.8px] h-[5.8px] md:w-6 md:h-6 text-[4px] md:text-xs md:border rounded-full hover:bg-black hover:text-white transition"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* PRICE + CTA */}
              <div className="flex justify-between ">
                <span className="font-bold text-[6.1px] md:text-base gilmer-heavy text-[#F54F5F]">
                  {item.price}
                </span>
                <button className="text-[5.33px] md:text-sm text-left header-font font-medium text-foreground hover:underline">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSellers;
