"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCollectionBySlug } from "@/lib/api";
import { Product, BASE_URL } from "@/lib/constant";
import ProductImageGallery from "@/components/products/ProductsImageGalery";
import ProductInfo from "@/components/products/ProductInfo";

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const productSlug = Array.isArray(params.products)
    ? params.products[0]
    : params.products;

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug && productSlug) {
        setLoading(true);
        try {
          const collectionData = await getCollectionBySlug(slug);
          console.log("DEBUG: Collection Data fetched:", collectionData);

          if (collectionData && collectionData.products) {
            const foundProduct = collectionData.products.find(
              (p: Product) => p.slug.toLowerCase() === productSlug.toLowerCase()
            );

            if (foundProduct) {
              // Ensure sizes are mapped correctly from API field productSize
              if (foundProduct.productSize && !foundProduct.sizes) {
                foundProduct.sizes = foundProduct.productSize;
              }
              setProduct(foundProduct);
            } else {
              setProduct(null);
            }
          } else {
            setProduct(null);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          setProduct(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [slug, productSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
          <p className="page-font text-xl uppercase tracking-widest text-foreground">
            Loading Product...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 px-4">
        <p className="text-lg page-font text-gray-500">Product not found</p>
        <Link
          href={`/collections/${slug}`}
          className="mt-2 text-sm text-foreground underline"
        >
          ← Back to Collection
        </Link>
      </div>
    );
  }

  // Map Strapi image structures to string arrays for the gallery
  const galleryImages: string[] = [];

  // Check additional images (productImages)
  if (product.productImages && Array.isArray(product.productImages)) {
    product.productImages.forEach((img: any) => {
      if (typeof img === "string") {
        galleryImages.push(img);
      } else if (img && typeof img === "object" && img.url) {
        galleryImages.push(`${BASE_URL}${img.url}`);
      }
    });
  }

  // Extract video URL if available from Strapi
  let finalVideoUrl = "";
  if (product.video?.url) {
    finalVideoUrl = `${BASE_URL}${product.video.url}`;
  } else if (product.videoUrl) {
    if (typeof product.videoUrl === "string") {
      finalVideoUrl = product.videoUrl;
    } else if (typeof product.videoUrl === "object" && product.videoUrl.url) {
      finalVideoUrl = `${BASE_URL}${product.videoUrl.url}`;
    }
  }

  return (
    <div className="">
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
            images={
              galleryImages.length > 0 ? galleryImages : ["/placeholder.png"]
            }
            title={product.title}
            videoUrl={finalVideoUrl}
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
