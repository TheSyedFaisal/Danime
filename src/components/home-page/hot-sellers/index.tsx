"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { getHotSellersProducts } from "@/lib/api";
import { BASE_URL } from "@/lib/constant";

interface ImageItem {
  id: number;
  url: string;
}

interface HotSellerProduct {
  id: number;
  documentId: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: ImageItem[];
  productColor: Color[];
  productSize: Size[];
}

export interface Size {
  id: number;
  size: string;
}

interface Color {
  id: number;
  color: string;
}

const HotSellerCard = ({ item }: { item: HotSellerProduct }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  // Initialize defaults when item loads
  useEffect(() => {
    if (item.productSize?.length > 0) setSelectedSize(item.productSize[0]);
    if (item.productColor?.length > 0) setSelectedColor(item.productColor[0]);
  }, [item]);

  const imageUrl = item.image?.[0]?.url
    ? `${BASE_URL}${item.image[0].url}`
    : "";

  const handleAddToCart = () => {
    const sizeToUse = selectedSize?.size || "Standard";

    addToCart({
      productId: item.documentId,
      title: item.name,
      price: parseInt(item.price.replace(/[^0-9]/g, "")) * 100,
      size: sizeToUse,
      color: selectedColor?.color,
      image: imageUrl,
      slug: `product-${item.documentId}`,
    });
  };

  return (
    <div className="w-full sm:max-w-[350px] ">
      {/* IMAGE CARD */}
      <div className="card clippath py-10 md:py-12 rounded px-3 group hidden md:block">
        {imageUrl && (
          <Image
            src={imageUrl}
            height={495}
            width={300}
            alt={item.name}
            className="mx-auto custom-shadow"
            unoptimized={true}
          />
        )}
      </div>

      {imageUrl && (
        <Image
          src={imageUrl}
          height={495}
          width={300}
          alt={item.name}
          className="mx-auto custom-shadow block md:hidden w-[200px] h-auto object-contain"
          unoptimized={true}
        />
      )}

      {/* CONTENT */}
      <div className="mt-2">
        <div className="flex gap-1 md:gap-4 md:pt-4 pb-1 md:pb-2 w-full">
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="gilmer-heavy text-[7.2px] sm:text-xs md:text-base leading-none tracking-wide">
              {item.category}
            </h2>

            <h3 className="font-semibold text-foreground text-[5.5px] sm:text-[10px] md:text-sm mb-0.5 md:mb-2 mt-1 md:mt-4 header-font">
              {item.name}
            </h3>

            <p className="text-[5px] sm:text-[6px] md:text-xs leading-snug text-[#7D7D7D] mb-1 md:mb-2">
              {item.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between gap-2 md:gap-3">
            {/* COLORS */}
            <div className="flex flex-col gap-1">
              <span className="text-[6px] sm:text-[8px] md:text-xs black-han text-muted leading-[100%]">
                COLOR
              </span>
              <div className="flex gap-1">
                {item.productColor?.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-[5px] h-[5px] sm:w-1.5 sm:h-1.5 md:w-2.5 md:h-2.5 rounded-full border transition hover:scale-110 ${
                      selectedColor?.id === color.id ? "border-white" : ""
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* SIZES */}
            <div className="flex flex-col gap-1 md:mb-4">
              <span className="text-[6px] sm:text-[8px] md:text-xs black-han text-muted leading-[100%]">
                SIZE
              </span>
              <div className="flex gap-1">
                {item.productSize?.map((sizeItem) => (
                  <button
                    key={sizeItem.id}
                    onClick={() => setSelectedSize(sizeItem)}
                    className={`w-[8px] h-[8px] sm:w-3 sm:h-3 sm:text-[8px] md:w-6 md:h-6 text-[6px] text-[#7D7D7D] md:text-xs rounded-full transition cursor-pointer ${
                      selectedSize?.id === sizeItem.id
                        ? "bg-white text-black"
                        : ""
                    }`}
                  >
                    {sizeItem.size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PRICE + CTA */}
        <div className="flex justify-between ">
          <span className="font-bold text-[8px] sm:text-sm md:text-base fatura text-[#F54F5F]">
            {item.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="text-[7px] sm:text-xs md:text-sm text-left header-font font-medium text-foreground hover:underline"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const HotSellers = () => {
  const [products, setproducts] = useState<HotSellerProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const productsList = await getHotSellersProducts();
        if (productsList && productsList.length > 0) {
          setproducts(productsList);
        } else {
          console.error("No hot seller products found");
          setproducts([]);
          setError("Hot seller products failed to fetch");
        }
      } catch (error) {
        console.error("Error fetching hot sellers products:", error);
        setproducts([]);
        setError("Hot seller products failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-5 pb-5 md:pt-12 md:pb-12 container">
      <h2 className="text-center page-font text-2xl md:text-3xl lg:text-4xl uppercase">
        HOT SELLERS
      </h2>

      <div className="mt-10 px-2 md:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[100px] gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-foreground/10 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-foreground/60 animate-pulse gilmer-medium tracking-[0.2em] text-[10px] md:text-xs">
              LOADING PRODUCTS...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[100px] gap-4">
            <p className="text-[#F54F5F] gilmer-heavy tracking-widest text-xs md:text-sm text-center px-4">
              {error.toUpperCase()}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-8 py-2 border border-foreground text-foreground gilmer-heavy text-[10px] tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 rounded-full cursor-pointer"
            >
              TRY AGAIN
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-y-12 gap-x-4 sm:gap-x-8 place-items-center">
            {products.map((item) => (
              <HotSellerCard key={item.documentId || item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotSellers;
