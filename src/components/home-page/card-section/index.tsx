import ShopNowButton from "@/components/ui/Button";
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

              <div className="relative group w-full h-full">
                {/* Card 1 image - top rotated */}
                <div className="group-hover:scale-110 transition-transform duration-2000 ease-in-out">
                  <Image
                    src="/card-1-img-2.png"
                    alt=""
                    width={240}
                    height={240}
                    className="absolute top-6 md:w-[300px] md:h-[300px] lg:w-[240px] lg:h-[240px] right-0 lg:right-16 rotate-12 z-10
                  transition-transform duration-2000 ease-in-out 
                  lg:group-hover:translate-x-30 "
                  />

                  {/* Card 1 image 3 - height increased */}
                  <div
                    className="absolute -left-60 z-20 w-[500px] h-[680px] 
                  transition-transform duration-2000 ease-in-out
                  group-hover:translate-x-30 hidden lg:block "
                  >
                    <Image src="/card-1-img-3.png" alt="" fill className="" />
                  </div>
                </div>

                {/* Cardred image - fade in on hover */}
                <div
                  className="absolute inset-0 z-30 hidden lg:block
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700 ease-in-out "
                >
                  <Image
                    src="/cardred.png"
                    alt=""
                    fill
                    className="object-cover pointer-events-none"
                  />
                </div>

                {/* Rectangle for small screens - fade in on hover */}
                <div className="absolute inset-0 z-30 lg:hidden">
                  <Image
                    src="/rectangel-2.png"
                    alt=""
                    fill
                    className="pointer-events-none"
                  />
                </div>
              </div>

              <div className="absolute z-20 w-[350px] h-[500px] h-[500px] md:w-[700px] md:h-[670px] -bottom-30 md:-bottom-50 -left-30 lg:hidden">
                <Image
                  src="/card-1-img-3.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* LEFT TEXT */}
            <div className="mt-3 text-center lg:text-left">
              <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
                CREATE CUSTOM
              </h4>
              <ShopNowButton>shop now</ShopNowButton>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
            {[
              { title: "JACKETS", img: "/card-2.jpg" },
              { title: "TOTE BAGS", img: "/card-3.jpg" },
              { title: "JEANS", img: "/doll.png" },
              { title: "CROCHET DOL", img: "/card-5.jpg" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="relative group bg-white rounded-2xl overflow-hidden">
                  {/* Main card image */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="w-full h-[120px] sm:h-[220px] md:h-[270px] object-cover
               transition-transform duration-1400 ease-in-out
               hover:scale-120 hover:shadow-xl"
                  />

                  {/* Cardred overlay image on hover */}
                  <div
                    className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100
               transition-opacity duration-700 ease-in-out pointer-events-none"
                  >
                    <Image
                      src="/rectangel-2.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* RIGHT TEXT */}
                <div className="mt-2 text-center lg:text-left">
                  <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
                    {item.title}
                  </h4>
                  <ShopNowButton>shop now</ShopNowButton>
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
