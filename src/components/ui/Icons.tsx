import { FC } from "react";

interface IconProps {
  className?: string;
}

export const BellIcon: FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 2 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className={`w-[9px] h-[9px] sm:w-[14px] sm:h-[14px] lg:w-[20px] lg:h-[20px]
      text-foreground transition-colors duration-300 group-hover:text-white ${className}`}
  >
    <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

export const HeartIcon: FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 0 22 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    className={`w-[9px] h-[9px] sm:w-[14px] sm:h-[14px] lg:w-[20px] lg:h-[20px]
      text-foreground transition-colors duration-300 group-hover:text-white ${className}`}
  >
    <path d="M14.5405 0.918721C12.7382 0.903561 10.9809 1.85206 9.99466 3.35023C9.00904 1.85264 7.2508 0.903521 5.45036 0.918721C4.04482 0.914853 2.72084 1.45988 1.7253 2.453C0.638053 3.53739 0.0114008 5.08698 0.00319547 6.70867C-0.16388 12.2832 6.26139 17.243 9.73088 19.0244C10.1526 19.2973 11.1385 18.518 11.706 18.219C13.9436 16.9256 17.183 14.0747 18.4595 11.7195C19.4817 9.98486 20 8.18606 20 6.37303C20 3.36551 17.5509 0.918721 14.5405 0.918721Z" />
  </svg>
);

export const BagIcon: FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 0 22 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className={`w-[9px] h-[9px] sm:w-[14px] sm:h-[14px] lg:w-[20px] lg:h-[20px]
      text-foreground transition-colors duration-300 group-hover:text-white ${className}`}
  >
    <path d="M6.25 6.39167V5.58333C6.25 3.70833 7.75833 1.86667 9.63333 1.69167C11.8667 1.475 13.75 3.23333 13.75 5.425V6.575" />
    <path d="M7.5001 18.3333H12.5001C15.8501 18.3333 16.4501 16.9917 16.6251 15.3583L17.2501 10.3583C17.4751 8.325 16.8918 6.66667 13.3334 6.66667H6.66677C3.10843 6.66667 2.5251 8.325 2.7501 10.3583L3.3751 15.3583C3.5501 16.9917 4.1501 18.3333 7.5001 18.3333Z" />
    <path
      d="M12.9128 10H12.9203"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.07884 10H7.08632"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
