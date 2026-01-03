import Image from "next/image";

const Header = () => {
  return (
    /* h-auto use kiya hai taake image jitni lambi ho, container khud adjust ho jaye */
    <div className="w-full relative h-auto overflow-hidden bg-white">
      
      {/* Background Image - fill ke bajaye responsive width use ki hai */}
      <Image
        src="/HeaderImg.png"
        width={1920}
        height={120}
        alt="Header Curve"
        className="w-full h-auto z-0 block" // h-auto se poori image nazar aayegi
        priority
      />
      
      {/* Navigation Container - content ko image ke bottom par align kiya hai */}
      <nav className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-4 sm:px-8 pb-2">
        
        {/* 1. Logo (Left) */}
        <div className="flex-shrink-0 mt-2 ">
          <Image 
            src='/Logo.png' 
            height={40} 
            width={120} 
            alt="Danime Logo" 
            className="w-[80px] sm:w-[130px] h-auto object-contain"
          />
        </div>

        {/* 2. Nav Links (Center) */}
        <ul className="flex items-center gap-3 sm:gap-8 sm:text-lg lg:text-2xl text-white font-medium mb-1.5 sm:mb-4">
          <li className="cursor-pointer hover:opacity-70 transition-all">Home</li>
          <li className="cursor-pointer hover:opacity-70 transition-all whitespace-nowrap">Design Custom</li>
          <li className="cursor-pointer hover:opacity-70 transition-all">Collections</li>
          <li className="cursor-pointer hover:opacity-70 transition-all">About</li>
        </ul>

        {/* 3. Icons (Right) */}
        <div className="flex items-center gap-1.5 sm:gap-3 mt-2">
          <span className="p-1 sm:p-2 border border-red-500 rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image src='/notification.svg' height={16} width={16} alt="notif" className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          </span>
          <span className="p-1 sm:p-2 border border-red-500 rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image src='/heart.svg' height={16} width={16} alt="wishlist" className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          </span>
          <span className="p-1 sm:p-2 border border-red-500 rounded-full cursor-pointer hover:bg-red-50 transition-all">
            <Image src='/bag-2.svg' height={16} width={16} alt="cart" className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          </span>
        </div>

      </nav>
    </div>
  );
};

export default Header;