"use client";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const IconButton = ({
  children,
  onClick,
  disabled = false,
  className = "",
}: IconButtonProps) => {
  return (
    <span
      onClick={!disabled ? onClick : undefined}
      className={`
        group
        p-1 sm:p-2
        border border-foreground
        rounded-full
        transition-all
        ${disabled
          ? "cursor-default opacity-40"
          : "cursor-pointer hover:bg-foreground hover:scale-95"}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default IconButton;
