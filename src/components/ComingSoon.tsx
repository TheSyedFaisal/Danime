import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/launcing.png"
        alt="Background"
        fill
        priority
        unoptimized // Ye Vercel ki compression ko bypass kar dega
        className="object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 ">
        {/* Logo */}
        <div className="mb-5 flex items-center justify-center">
          <img
            src="/Logo.png"
            alt="danime"
            className="w-[150px] sm:w-[200px] md:w-[250px]"
          />
        </div>

        {/* Main Text - LAUNCHING SOON (Bebas Neue - Impact style) */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white text-center mb-5 font-maken">
          LAUNCHING SOON
        </h2>

        {/* Subtitle - ART MEETS ANIME (Permanent Marker - Brush style) */}
        <p className=" w-text-base sm:text-lg lg:text-xl text-white  anime">
          ANIME MEETS ART
        </p>
      </div>
    </div>
  );
}
