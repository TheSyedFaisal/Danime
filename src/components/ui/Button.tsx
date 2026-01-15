// Button.jsx
const ShopNowButton = ({ children, className = "", ...props }) => {
  const baseStyle =
    "mt-2 page-font cursor-pointer text-white text-[8px] md:text-xs border border-white px-3 py-2 rounded-md hover:bg-foreground transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ShopNowButton;
