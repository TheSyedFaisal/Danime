import Image from "next/image";

export default function ComingSoonPage() {
  return (
    // Main Container
    <div className="relative min-h-screen w-full overflow-hidden bg-[#cc3333]">
      
      {/* Background Image - Isko absolute rakhein taake ye niche rahe */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/ComingSoon.png')",
        }}
      />

      {/* Content Overlay - Isko z-10 de dein taake ye upar rahe */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 bg-black/20"> 
        {/* Logo */}
        <div className="mb-5 flex items-center justify-center">
          <img
            src="/Logo.png"
            alt="danime"
            className="w-[150px] sm:w-[200px] md:w-[250px]"
          />
        </div>

        {/* Main Text */}
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white text-center mb-2 font-maken tracking-tighter leading-none">
          LAUNCHING SOON
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-white anime uppercase tracking-[0.2em]">
          ANIME MEETS ART
        </p>
      </div>
    </div>
  );
}