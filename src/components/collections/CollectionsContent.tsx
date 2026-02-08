import { Product } from "@/lib/constant";
import React from "react";
import IconButton from "../ui/IconButton";
import { HeartIcon } from "../ui/Icons";

interface CollectionsContentProps {
  products: Product[];
  activeIndex: number;
  title: string;
}

const CollectionsContent: React.FC<CollectionsContentProps> = ({
  products,
  activeIndex,
  title,
}) => {
  const product = products[activeIndex];

  if (!product) return null;

  return (
    <div className="w-full md:w-[32%] order-1 md:order-0 text-center md:text-left">
      <div className="flex items-center justify-center mb-2 gap-3 md:hidden">
        <span className="text-xs md:text-lg page-font">{title}</span>
        <IconButton>
          <HeartIcon />
        </IconButton>
      </div>
      {product?.bestSeller && (
        <p className="text-foreground mb-0.5 gilmor-regular">Best Sellers</p>
      )}
      <h3 className="text-2xl page-font text-black mb-4">{product?.price}</h3>
      <p className="text-black md:text-xs md:leading-4 lg:text-base gilmor-regular leading-5.5 lg:leading-5.5 md:max-w-[320px] mx-auto md:mx-0 break-words">
        {product?.description}
      </p>
    </div>
  );
};

export default CollectionsContent;
