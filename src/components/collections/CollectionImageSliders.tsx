"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Product, BASE_URL } from "@/lib/constant";

interface CollectionImageSlidersProps {
  products: Product[];
  slug: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CollectionImageSliders: React.FC<CollectionImageSlidersProps> = ({
  products,
  slug,
  activeIndex,
  setActiveIndex,
}) => {
  const images = products
    .map((p) => {
      if (!p.images) return "";
      if (typeof p.images === "string") return p.images;
      return p.images?.url ? `${BASE_URL}${p.images.url}` : "";
    })
    .filter((img) => img !== "");
  console.log("Images array:", images);

  const total = images.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getImageVariants = (slug: string, isMobile: boolean) => {
    switch (slug) {
      case "jeans":
        return {
          center: {
            x: isMobile ? "50%" : 0,
            scale: isMobile ? 1 : 0.75,
            opacity: 1,
            zIndex: 5,
          },
          right1: {
            x: isMobile ? "120%" : "65%",
            scale: isMobile ? 0.7 : 0.5,
            opacity: 0.7,
            zIndex: 3,
          },
          right2: {
            x: "115%",
            scale: 0.4,
            opacity: isMobile ? 0 : 0.4,
            zIndex: 2,
          },
          hidden: {
            x: "10%",
            scale: 0.4,
            opacity: 0,
            zIndex: 0,
          },
        };

      case "jackets":
        return {
          center: {
            x: isMobile ? "50%" : 0,
            scale: isMobile ? 1 : 0.75,
            opacity: 1,
            zIndex: 5,
          },
          right1: {
            x: isMobile ? "120%" : "70%",
            scale: isMobile ? 0.6 : 0.55,
            opacity: 0.7,
            zIndex: 3,
          },
          right2: {
            x: "125%",
            scale: 0.45,
            opacity: isMobile ? 0 : 0.4,
            zIndex: 2,
          },
          hidden: {
            x: "15%",
            scale: 0.5,
            opacity: 0,
            zIndex: 0,
          },
        };

      case "doll":
        return {
          center: {
            x: isMobile ? "50%" : 0,
            scale: isMobile ? 0.8 : 0.6,
            opacity: 1,
            zIndex: 5,
          },
          right1: {
            x: isMobile ? "120%" : "60%",
            scale: isMobile ? 0.5 : 0.4,
            opacity: 0.7,
            zIndex: 3,
          },
          right2: {
            x: "110%",
            scale: 0.3,
            opacity: isMobile ? 0 : 0.4,
            zIndex: 2,
          },
          hidden: {
            x: "10%",
            scale: 0.35,
            opacity: 0,
            zIndex: 0,
          },
        };

      default:
        return {
          center: {
            x: isMobile ? "50%" : 0,
            scale: isMobile ? 0.75 : 0.56,
            opacity: 1,
            zIndex: 5,
          },
          right1: {
            x: isMobile ? "120%" : "65%",
            scale: isMobile ? 0.55 : 0.45,
            opacity: 0.7,
            zIndex: 3,
          },
          right2: {
            x: "115%",
            scale: 0.35,
            opacity: isMobile ? 0 : 0.4,
            zIndex: 2,
          },
          hidden: {
            x: "10%",
            scale: 0.4,
            opacity: 0,
            zIndex: 0,
          },
        };
    }
  };

  const imageVariants = getImageVariants(slug, isMobile);
  const imgWidth =
    slug === "jeans"
      ? "aspect-[506/641]"
      : slug === "jackets"
        ? "aspect-[598/603]"
        : slug === "doll"
          ? "aspect-[394/629]"
        : "aspect-[372/643]";
  const shadowBottom = slug === "jeans" ? "-1.75rem" : "-3.75rem";

  return (
    <div
      className={`relative product-height sm:h-60 md:h-80 lg:h-100 overflow-hidden ${isMobile ? "w-full" : "w-[70%]"}`}
    >
      {images.map((images, index) => {
        let state = "hidden";

        if (index === activeIndex) {
          state = "center";
        } else if (total > 1 && index === (activeIndex + 1) % total) {
          state = "right1";
        } else if (total > 2 && index === (activeIndex + 2) % total) {
          state = "right2";
        }

        return (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center p-4"
            variants={imageVariants}
            animate={state}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              width: "50%",
              height: "100%",
              pointerEvents: state === "hidden" ? "none" : "auto",
              zIndex: state === "center" ? 10 : 5,
            }}
          >
            <div className="relative flex flex-col items-center justify-center ">
              {state === "center" && (
                <div
                  className="absolute w-[80px] md:w-[140px] h-3 md:h-4 blur-[4px] md:blur-[7px] z-0 rounded-full  "
                  style={{
                    bottom: shadowBottom === "-1.75rem" ? "-30px" : "-40px",
                    background:
                      "radial-gradient(ellipse 100% 100% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.20) 50%, transparent 100%)",
                  }}
                />
              )}

              <motion.img
                onClick={() => setActiveIndex(index)}
                src={images}
                alt="slider "
                className={`relative z-10 cursor-pointer ${imgWidth}`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CollectionImageSliders;
