"use client";

import { useState } from "react";
import { Product } from "@/lib/constant";

interface ProductInfoProps {
  product: Product;
}

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 border-t border-foreground">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex gap-2 items-center bg-transparent border-none cursor-pointer p-0"
      >
        {/* Plus / Minus Icon */}
        <div
          className="relative flex items-center justify-center flex-shrink-0"
          style={{ width: "16px", height: "16px" }}
        >
          {/* Horizontal line — always visible */}
          <div
            className="absolute bg-foreground rounded-sm"
            style={{
              width: "12px",
              height: "1.5px",
            }}
          />
          <div
            className="absolute bg-foreground rounded-sm"
            style={{
              width: "1.5px",
              height: "12px",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>

        <span className="text-[11px] font-bold tracking-widest uppercase text-foreground">
          {title}
        </span>
      </button>

      {/* Collapsible body */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "200px" : "0px",
          transition: "max-height 0.35s ease",
        }}
      >
        <div className="pt-3 text-sm leading-[110%] max-w-[500px] gilmor-regular ml-6 mr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const hasDiscount = !!product.discountPrice;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice!) / product.price) * 100,
      )
    : 0;

  const formatPrice = (val: number) => `$${(val / 100).toFixed(2)}`;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div>
      {/* Best Seller Badge */}
      <div className="mb-4 md:mb-7 hidden md:block">
        {product.bestSeller && (
          <p className="text-[11px] leading-[100%] md:text-base gilmor-regular mb-2 text-foreground">
            Best Seller
          </p>
        )}

        {/* Title */}
        <h1 className="text-lg md:text-[24px] uppercase  page-font leading-[100%]">
          {product.title}
        </h1>
      </div>

      {/* Price Row */}
      <div
        className={`flex items-end gap-2.5 ${hasDiscount ? "mb-2" : "mb-5"}`}
      >
        <span className="text-[24px] page-font leading-[100%]">
          {formatPrice(hasDiscount ? product.discountPrice! : product.price)}
        </span>
        {hasDiscount && (
          <span className="text-[12px] leading-none line-through text-black/60">
            {formatPrice(product.price)}
          </span>
        )}
      </div>

      {/* Discount label */}
      {hasDiscount && (
        <p className="text-[11px] md:text-[16px] gilmor-regular mb-4 md:mb-7 text-foreground">
          {discountPercent}% off Price as Marked
        </p>
      )}

      {/* ── Size Selector ── */}
      <div className="mb-4 md:mb-7">
        <p className="text-[16px] page-font uppercase mb-2.5">Select Size</p>
        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`gilmor-regular text-[11px] md:text-base transition-all duration-200 text-[13px] font-medium cursor-pointer ${selectedSize === size ? "text-foreground border-b" : "text-black"}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* ── Quantity ── */}
      <div className="mb-4 md:mb-7">
        <div
          className="flex items-center overflow-hidden rounded-xl border-[1.5px] border-gainsboro"
          style={{ width: "fit-content" }}
        >
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="flex items-center justify-center cursor-pointer text-[18px] py-1 px-3 border-r-[1.5px] border-gainsboro"
          >
            −
          </button>
          <span className="text-[14px] font-semibold text-center px-4">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="flex items-center justify-center cursor-pointer text-[18px] p-1 px-3 border-l-[1.5px] border-gainsboro"
          >
            +
          </button>
        </div>
      </div>

      {/* ── Add to Cart Button ── */}
      <button
        onClick={handleAddToCart}
        className={`${addedToCart ? "bg-green-600" : "bg-foreground"} w-full rounded-lg border-none text-white text-[12px] md:text-base page-font tracking-widest uppercase cursor-pointer flex items-center justify-between gap-2 transition-colors duration-300 p-2 md:p-4`}
      >
        {/* Cart Icon */}

        {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </button>

      {/* ── Product Description ── */}
      <div className="mt-4 md:mt-7">
        <p className="text-[11px] md:text-base page-font mb-2">
          Product Description
        </p>
        <p
          className="text-[13px] leading-[100%] gilmor-regular max-w-140 "
          style={{ color: "#555" }}
        >
          {product.description}
        </p>
      </div>

      {/* ── Accordions ── */}
      <div className="mt-4 md:mt-7">
        <Accordion title="Size Guide">
          <p>
            Our sizes follow international standards. We recommend measuring
            your chest, waist, and inseam for the best fit. If you are between
            sizes, we suggest sizing up for a relaxed fit or down for a snug
            fit. Refer to the full size chart for detailed measurements.
          </p>
        </Accordion>

        <Accordion title="Product Details & Composition">
          <p>
            Material: 98% Cotton, 2% Elastane. Lining: 100% Polyester. Care:
            Machine wash cold, tumble dry low. Do not iron directly on print.
            This product is made with sustainable practices and eco-friendly
            dyes.
          </p>
        </Accordion>

        <Accordion title="Deliveries & Returns">
          <p>
            Free shipping on orders over ₹3,000. Standard delivery takes 3–5
            business days. Express delivery (1–2 days) is available at checkout.
            Returns are accepted within 30 days of purchase in original
            condition with tags attached.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
