import Image from "next/image";

const Features = () => {
  return (
    <section className="relative bg-white overflow-hidden h-[320px] sm:h-[400px] md:h-[550px] lg:h-[700px] container">
      
      {/* Top bold FEATURED */}
      <h1 className="page-font text-[12.7vw] leading-none lg:leading-33 text-black -ml-[11px]">
        FEATURED
      </h1>

      {/* Repeated faded FEATURED background */}
      <div className="absolute left-0 w-full pointer-events-none -ml-[11px] z-0">
        {[1, 2, 3].map((_, i) => (
          <h1
            key={i}
            className="page-font text-[12.7vw] leading-none lg:leading-35 text-black/10 whitespace-nowrap"
          >
            FEATURED
          </h1>
        ))}
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        
        {/* Vectors */}
        <div className="absolute sm:flex gap-32 z-0 hidden">
          <Image
            src="/feature-vector2.svg"
            width={360}
            height={220}
            alt=""
            className="translate-y-10 -translate-x-30"
          />
          <Image
            src="/feature-vector.svg"
            width={300}
            height={220}
            alt=""
            className=" "
          />
        </div>

        {/* Main image */}
        <div className="relative z-10 top-30 lg:top-20 mb-40">
          <Image
            src="/feature-img.svg"
            width={900}
            height={900}
            alt="Featured Models"
            priority
            className="w-[400px] sm:w-[550px] md:w-[700px] lg:w-full h-[800px] object-contain lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
