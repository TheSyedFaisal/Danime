import React from "react";
import IconButton from "../ui/IconButton";
import { HeartIcon } from "../ui/Icons";
import Link from "next/link";

interface CollectionsActionsProps {
  title: string;
  collectionSlug: string;
  productSlug: string;
}

const CollectionsActions: React.FC<CollectionsActionsProps> = ({title, collectionSlug, productSlug}) => {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-between ">
      <button className="mt-2 page-font cursor-pointer text-black text-[8px] md:text-xs border-2 border-black px-3 py-2 rounded-md hover:bg-foreground hover:text-white transition-all duration-300">
        add to cart
      </button>
      <div className=" items-center gap-3 hidden md:flex">
        <span className="text-xs md:text-lg page-font">{title}</span>
        <IconButton>
          <HeartIcon />
        </IconButton>
      </div>
      <Link href={`/collections/${collectionSlug}/${productSlug}`} className="mt-2 page-font cursor-pointer text-black text-[8px] md:text-xs border-2 border-black px-3 py-2 rounded-md hover:bg-foreground hover:text-white transition-all duration-300">
        shop now
      </Link >
    </div>
  );
};

export default CollectionsActions;
