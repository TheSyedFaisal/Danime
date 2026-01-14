import Image from "next/image";
import React from "react";

const HotSellers = () => {
  const products = [
    {
      id: 1,
      category: "JACKETS",
      name: "DENIM JACKET",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
      price: "RS 1500",
      image: "/jacket1.png",
      colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
      sizes: ["L", "M", "S"],
    },
    {
      id: 2,
      category: "JACKETS",
      name: "DENIM JACKET",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
      price: "RS 1500",
      image: "/jacket1.png",
      colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
      sizes: ["L", "M", "S"],
    },
    {
      id: 3,
      category: "JACKETS",
      name: "DENIM JACKET",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit laoreet.",
      price: "RS 1500",
      image: "/jacket1.png",
      colors: ["#1a1a2e", "#8b1a1a", "#f5f5f5"],
      sizes: ["L", "M", "S"],
    },
    
  ];

  return (
    <div className="mt-12 mb-12">
      <h2 className="text-center page-font text-2xl md:text-3xl lg:text-4xl">
        HOT SELLERS
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 place-items-center
        mt-10 px-4 md:px-8"
      >
        {products.map((item) => (
          <div key={item.id} className="w-full sm:max-w-[350px] ">
            {/* IMAGE CARD */}
            <div className="card clippath py-10 md:py-12 rounded px-3 group">
              <Image
                src={item.image}
                height={495}
                width={300}
                alt=""
                className="mx-auto custom-shadow"
              />
            </div>

            {/* CONTENT */}
            <div className=" mt-2">
              <div className="flex gap-4 pt-4 pb-2 w-full">
                {/* LEFT */}
                <div className="flex-1">
                  <h2 className="gilmer-heavy text-sm md:text-base leading-none tracking-wide">
                    {item.category}
                  </h2>

                  <h3 className="font-semibold text-[#D43642] text-xs md:text-sm mb-2 mt-4 header-font">
                    {item.name}
                  </h3>

                  <p className="text-[11px] md:text-xs leading-snug text-[#7D7D7D] mb-2">
                    {item.description}
                  </p>
                  <span className="font-bold text-sm md:text-base gilmer-heavy text-[#F54F5F]">
                    {item.price}
                  </span>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-3">
                  {/* COLORS */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] md:text-xs black-han text-[#00000099]">
                      COLOR
                    </span>
                    <div className="flex gap-1">
                      {item.colors.map((color, i) => (
                        <button
                          key={i}
                          className="w-2.5 h-2.5 rounded-full border hover:scale-110 transition"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* SIZES */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] md:text-xs black-han text-[#00000099]">
                      SIZE
                    </span>
                    <div className="flex gap-1">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          className="w-6 h-6 text-[10px] md:text-xs border rounded-full hover:bg-black hover:text-white transition"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <button className="text-xs md:text-sm mt-3 text-left header-font font-medium text-[#D43642] hover:underline">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>

              {/* PRICE + CTA */}
              <div className="flex justify-between items-center mt-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSellers;
