import React from "react";
import IconButton from "../ui/IconButton";
import { HeartIcon } from "../ui/Icons";

interface CollectionsActionsProps {
  title: string;
}

const CollectionsActions: React.FC<CollectionsActionsProps> = ({title}) => {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-between ">
      <button className="mt-2 page-font cursor-pointer text-black text-[8px] md:text-xs border-2 border-black px-3 py-2 rounded-md hover:bg-foreground transition-all duration-300">
        add to cart
      </button>
      <div className=" items-center gap-3 hidden md:flex">
        <span className="text-xs md:text-lg page-font">{title}</span>
        <IconButton>
          <HeartIcon />
        </IconButton>
      </div>
      <button className="mt-2 page-font cursor-pointer text-black text-[8px] md:text-xs border-2 border-black px-3 py-2 rounded-md hover:bg-foreground transition-all duration-300">
        shop now
      </button>
    </div>
  );
};

export default CollectionsActions;
