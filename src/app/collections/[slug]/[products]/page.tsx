"use client";

import { cards } from "@/lib/constant";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductImageGallery from "@/components/products/ProductsImageGalery";
import ProductInfo from "@/components/products/ProductInfo";

const ProductDetailPage = () => {
  const params = useParams();

  // useParams can return string | string[] — take first value safely
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const productSlug = Array.isArray(params.products)
    ? params.products[0]
    : params.products;

  // Case-insensitive matching — Next.js lowercases URLs automatically
  // but your constant.ts has mixed-case slugs like "Leather-Jacket"
  const collection = cards.find(
    (c) => c.slug.toLowerCase() === slug?.toLowerCase(),
  );

  const product = collection?.products.find(
    (p) => p.slug.toLowerCase() === productSlug?.toLowerCase(),
  );

  if (!collection || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 px-4">
        <p className="text-lg text-gray-500">Product not found</p>
        <Link
          href="/collections"
          className="mt-2 text-sm text-blue-600 underline"
        >
          ← Back to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      {/* Breadcrumb Nav */}
      {/* <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-3.5 flex items-center gap-2 overflow-hidden">
        <Link
          href={`/collections/${slug}`}
          className="flex items-center gap-1.5 text-gray-800 hover:text-gray-500 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span className="text-xs font-medium">Back</span>
        </Link>

        <span className="text-gray-300 text-xs">›</span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          {collection.title}
        </span>
        <span className="text-gray-300 text-xs">›</span>
        <span className="text-xs text-gray-700 font-semibold uppercase tracking-wide">
          {product.title}
        </span>
      </nav> */}

      <div className=" px-4 pt-6 block md:hidden">
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

      {/* Product Layout */}
      <div className="max-w-5xl container px-4 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row gap-10">
        {/* LEFT — Image Gallery */}

        <div
          className="flex-1"
          style={{ minWidth: "200px", maxWidth: "700px" }}
        >
          <ProductImageGallery
            images={product.productImages}
            title={product.title}
          />
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex-1" style={{ minWidth: "300px" }}>
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
