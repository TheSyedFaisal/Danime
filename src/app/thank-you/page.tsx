"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// Sub-component for individual product rating
const RatedProductItem = ({ item, index }: { item: any; index: number }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col items-center">
      {/* Product Name */}
      <h3 className="text-base md:text-lg uppercase page-font mb-2 md:mb-4">
        {item.title || "Unknown Product"}
      </h3>

      {/* Star Rating per product */}
      <div className="flex justify-center gap-2 mb-6 md:mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="text-3xl md:text-4xl text-foreground hover:scale-110 transition-transform cursor-pointer"
            aria-label={`Rate ${star} stars`}
          >
          {star <= (hoverRating || rating) ? "★" : "☆"}
          </button>
        ))}
      </div>

      {/* Product Image */}
      <div className="relative w-65 md:w-55 lg:w-65 h-80 mx-auto mb-6">
        <Image
          src={item.image || "/products/collections-jeans.png"}
          alt={item.title || "Product"}
          fill
          className="object-contain"
          priority={index === 0}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

const ThankYouContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerName = searchParams.get("name") || "John";

  // State to store all ordered items
  const [orderItems, setOrderItems] = useState<any[]>([]);

  useEffect(() => {
    // Get all items from the last order in localStorage
    const lastOrderData = localStorage.getItem("danime_last_order");
    if (lastOrderData) {
      const lastOrder = JSON.parse(lastOrderData);
      if (Array.isArray(lastOrder) && lastOrder.length > 0) {
        setOrderItems(lastOrder);
      }
    }
  }, []);

  return (
    <div className="">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Thank You Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground page-font">THANK YOU</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-[17px] md:mb-8 page-font">
            LET US KNOW WHAT YOU THINK
          </h2>

          {/* Customer Greeting */}
          <p className="text-lg md:text-2xl header-font mb-1 md:mb-2">
            Hey {customerName},
          </p>

          <p className="text-sm md:text-xl gilmor-regular text-gray-700 mx-auto">
            We&apos;d love to hear what you think about your purchase from
            Danime, 14 days ago,
          </p>

          <p className="text-sm md:text-xl gilmor-regular text-gray-700 mb-4 md:mb-6">
            It&apos;ll only takes few minutes.
          </p>

          {/* Ordered Items List */}
          <div className="flex flex-wrap justify-center gap-8">
            {orderItems.map((item, index) => (
              <RatedProductItem
                key={item.id || index}
                item={item}
                index={index}
                
              />
            ))}
          </div>

          {orderItems.length === 0 && (
            <p className="text-center text-gray-500 mb-8">
              No items found in recent order.
            </p>
          )}

          {/* Footer Text */}
          <p className="text-sm md:text-lg gilmor-regular font-bold mb-4">
            The Danime Team
          </p>

          <p className="text-xs md:text-sm gilmor-regular text-gray-600 max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit
            laoreet. Dictum eget est hac est. Facilisi odio neque at dis
            pulvinar lacus morbi. Volutpat eu elit est commodo at viverra
            consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis
            id arcu.
          </p>

          {/* Back to Home Button */}
          <button
            onClick={() => router.push("/")}
            className="mt-8 bg-foreground text-white px-8 py-3 rounded-lg page-font text-sm md:text-base font-bold uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

const ThankYouPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </React.Suspense>
  );
};

export default ThankYouPage;
