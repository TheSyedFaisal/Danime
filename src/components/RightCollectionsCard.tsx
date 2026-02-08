"use client";

import Image from "next/image";
import ShopNowButton from "./ui/Button";
import { BASE_URL, Card } from "@/lib/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";

const RightCollectionsCard = () => {
  const [products, setProducts] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setError("failed to fetch others collections");
        }
      } catch (err) {
        console.error("Error in RightCollectionsCard:", err);
        setError("failed to fetch others collections");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100px] gap-4 w-full">
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white/60 animate-pulse gilmer-medium tracking-[0.2em] text-[10px]">
          LOADING COLLECTIONS...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100px] gap-3 w-full">
        <p className="text-[#F54F5F] gilmer-heavy tracking-widest text-[10px] md:text-xs text-center px-4 uppercase">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-1.5 border border-white text-white gilmer-heavy text-[9px] tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer uppercase"
        >
          TRY AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
      {products?.slice(0, 4).map((item: Card) => {
        const imageUrl =
          typeof item.image === "string"
            ? item.image
            : item.image?.url
              ? `${BASE_URL}${item.image.url}`
              : "";

        return (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="flex flex-col"
          >
            <div className="relative group bg-white rounded-2xl overflow-hidden">
              <Image
                src={imageUrl || "/placeholder.png"}
                alt={item.title || "Product"}
                width={200}
                height={150}
                className="w-full h-[160px] sm:h-[250px] md:h-[270px] object-cover
               transition-transform duration-1400 ease-in-out
               hover:scale-120 hover:shadow-xl"
                unoptimized={true}
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
        );
      })}
    </div>
  );
};

export default RightCollectionsCard;
