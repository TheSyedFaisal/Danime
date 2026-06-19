"use client";
import IconButton from "./IconButton";
import { BellIcon, HeartIcon, BagIcon } from "./Icons";
import { useCart } from "@/context/CartContext";

const IconGroup = () => {
  const { totalItems, openCart } = useCart();

  return (
    <div className="flex items-center gap-1 sm:gap-3 absolute bottom-1 md:static right-2 md:mt-10">
      <IconButton>
        <BellIcon />
      </IconButton>

      <IconButton>
        <HeartIcon />
      </IconButton>

      <IconButton onClick={openCart}>
        <div className="relative">
          <BagIcon />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </IconButton>
    </div>
  );
};

export default IconGroup;
