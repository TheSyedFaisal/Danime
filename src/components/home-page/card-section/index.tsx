import Image from "next/image";

const CardSection = () => {
  return (
    <section className="px-4 md:px-6 container">
      <div
        className=" mt-6 rounded lg:rounded-2xl relative overflow-hidden px-6 "
        style={{
          backgroundImage: "url('/Group-20.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute right-0 top-30 rotate-10 pointer-events-none z-0">
          <Image
            src="/Vector-11.svg"
            alt=""
            width={600}
            height={600}
            className="w-[80vw]"
          />
        </div>

        {/* Heading */}
        <h2 className="page-font text-center text-white text-xl md:text-4xl pt-12">
          NEW COLLECTION
        </h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 my-10 items-stretch relative z-100">
          {/* LEFT BIG CARD */}
          <div className="flex flex-col ">
            <div className="flex flex-col min-h-[350px] lg:min-h-[636px] rounded-2xl overflow-hidden bg-white relative">
              <Image
                src="/card-1-img-1.jpg"
                alt=""
                fill
                className="object-cover"
                priority
              />

              <Image
                src="/card-1-img-2.png"
                alt=""
                width={240}
                height={240}
                className="absolute top-6 md:w-[300px] md:h-[300px] lg:w-[240px] lg:h-[240] right-0 lg:right-22 rotate-12 z-10"
              />

              <div className="absolute top-7 -right-1 z-20 w-[500px] h-[600px] hidden lg:block">
                <Image
                  src="/crop-image.png"
                  alt=""
                  fill
                  className="object-contain "
                />
              </div>

              <div className="absolute z-20 w-[350px] h-[500px] h-[500px] md:w-[700px] md:h-[670px] -bottom-30 md:-bottom-50 -left-30 lg:hidden">
                <Image
                  src="/card-1-img-3.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <Image
                src="/cardred.png"
                alt=""
                fill
                className="object-cover z-30 pointer-events-none hidden lg:block"
              />  
              <Image
                src="/rectangel-2.png"
                alt=""
                fill
                className=" z-30 pointer-events-none lg:hidden"
              />
            </div>

            {/* LEFT TEXT */}
            <div className="mt-3 text-center lg:text-left">
              <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
                CREATE CUSTOM
              </h4>
              <button className="mt-2 page-font text-white text-[8px] md:text-xs border border-white px-4 py-2 rounded-lg">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {[
              { title: "JACKETS", img: "/card-2.jpg" },
              { title: "TOTE BAGS", img: "/card-3.jpg" },
              { title: "JEANS", img: "/card-4.png" },
              { title: "CROCHET DOL", img: "/card-5.jpg" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col">
                <div
                  className="bg-white rounded-2xl overflow-hidden
               "
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="w-full h-[210px] md:h-[270px] object-cover transition-transform duration-500 ease-out
               hover:scale-105 hover:shadow-xl"
                  />
                </div>

                {/* RIGHT TEXT */}
                <div className="mt-3 text-center lg:text-left">
                  <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
                    {item.title}
                  </h4>
                  <button className="mt-2 page-font text-white text-[8px] md:text-xs border border-white px-3 py-1.5 rounded-md">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
