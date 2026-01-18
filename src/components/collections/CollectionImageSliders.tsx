"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/constant";

interface CollectionImageSlidersProps {
  products: Product[];
  slug: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CollectionImageSliders: React.FC<CollectionImageSlidersProps> = ({products, slug, activeIndex, setActiveIndex}) => {

  const images = products.flatMap((p)=> p.images)
  console.log("Images array:", images);

  const total = images.length;

  const imageVariants = {
    center: {
      z: "0%",
      scale: 0.9,
      opacity: 1,
      zIndex: 5,
    },
    right1: {
      x: "70%",
      scale: 0.6,
      opacity: 0.7,
      zIndex: 3,
    },
    right2: {
      x: "120%",
      scale: 0.45,
      opacity: 0.4,
      zIndex: 2,
    },
    hidden: {
      x: "10%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
    },
  };
  const imgWidth = slug === "jeans"? "70%": slug === "jackets" ? "90%": slug === "doll" ? "55%" : "50%";
  const shadowBottom = slug === "jeans" ? "-1.75rem" : "-3.75rem";

  return (
    <div className="relative h-45 sm:h-60 md:h-100 overflow-hidden w-[70%] ">
      {images.map((images, index) => {
        let state = "hidden";

        if (index === activeIndex) state = "center";
        if (index === (activeIndex + 1) % total) state = "right1";
        if (index === (activeIndex + 2) % total) state = "right2";

        return (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center"
            variants={imageVariants}
            animate={state}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ width: "50%", }}
          >
            {state === "center" && (
              <div
                className="absolute w-[55%] h-4 z-0 rounded-full"
                
                
                style={{
                  bottom: shadowBottom,
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.20) 50%, transparent 100%)",
                  filter: "blur(7px)",
                }}
              />
            )}

            <motion.img
              onClick={() => setActiveIndex(index)}
              src={images}
              alt="slider "
              className="rounded-[12px] relative z-0 cursor-pointer"
              style={{ width: imgWidth }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default CollectionImageSliders;
