import { Product } from "@/lib/constant";
import React from "react";

interface CollectionsContentProps {
  products: Product[];
  activeIndex: number;
}

const CollectionsContent: React.FC<CollectionsContentProps> = ({ products, activeIndex }) => {
  const product = products[activeIndex];

  if (!product) return null;
  
  return (
    <div className="w-full md:w-[32%] order-1 md:order-0 text-center md:text-left">
      {product?.bestSeller && (
        <p className="text-foreground mb-0.5 gilmor-regular">Best Sellers</p>
      )}
      <h3 className="text-2xl page-font text-black mb-4">{product?.price}</h3>
      <p className="text-black md:text-xs md:leading-4 lg:text-base  gilmor-regular leading-5.5 lg:leading-5.5">
        {product?.description}
      </p>
    </div>
  );
};

export default CollectionsContent;
