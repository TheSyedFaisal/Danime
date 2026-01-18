"use client";
import IconButton from "./IconButton";
import { BellIcon, HeartIcon, BagIcon } from "./Icons";

const IconGroup = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-3 absolute bottom-1 md:static right-2 md:mt-10">
      <IconButton>
        <BellIcon />
      </IconButton>

      <IconButton>
        <HeartIcon />
      </IconButton>

      <IconButton>
        <BagIcon />
      </IconButton>
    </div>
  );
};

export default IconGroup;
