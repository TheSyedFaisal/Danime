// ShopNowButton.tsx
import React, { ButtonHTMLAttributes, FC} from "react";

interface ShopNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

const ShopNowButton: FC<ShopNowButtonProps> = ({ children, className = "", ...props }) => {
  const baseStyle =
    "mt-2 page-font cursor-pointer text-white text-[8px] md:text-xs border border-white px-3 py-2 rounded-md hover:bg-foreground transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ShopNowButton;
