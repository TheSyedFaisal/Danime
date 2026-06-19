import Image from "next/image";
import ShopNowButton from "./ui/Button";
import { cards } from "@/lib/constant";
import Link from "next/link";

const RightCollectionsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
      {cards.map((item) => (
        <Link key={item.id} href={`/collections/${item.slug}`} className="flex flex-col">
          <div className="relative group bg-white rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={150}
              className="w-full h-[120px] sm:h-[220px] md:h-[270px] object-cover
               transition-transform duration-1400 ease-in-out
               hover:scale-120 hover:shadow-xl"
            />

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

          <div className="mt-2 text-center lg:text-left">
            <h4 className="page-font text-white text-sm md:text-lg tracking-wide">
              {item.title}
            </h4>
            <ShopNowButton>shop now</ShopNowButton>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RightCollectionsCard;
