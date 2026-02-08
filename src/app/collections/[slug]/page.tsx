"use client";
import CollectionImageSliders from "@/components/collections/CollectionImageSliders";
import CollectionsActions from "@/components/collections/CollectionsActions";
import CollectionsContent from "@/components/collections/CollectionsContent";
import { getCollectionBySlug } from "@/lib/api";
import { Card } from "@/lib/constant";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState<Card | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchCollection = async () => {
      if (typeof slug === "string") {
        setLoading(true);
        const data = await getCollectionBySlug(slug);
        setCollection(data);
        console.log("collections", collection)
        setLoading(false);
      }
    };
    fetchCollection();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="page-font text-2xl">Loading...</p>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="h-screen flex items-center my-8 justify-center">
        <h1 className="text-foreground page-font text-5xl">{slug} not found</h1>
      </div>
    );
  }

  const activeProduct = collection.products?.[activeIndex];

  return (
    <div className="w-full h-full container">
      <div className=" mt-10 px-4 md:px-10 mb-10">
        <div className=" ">
          <div className=" text-center">
            <h2 className="text-black text-sm md:text-2xl lg:text-[35px] leading-[100%] page-font ml-1 lg:ml-2">
              Collections
            </h2>
            <h1 className="text-foreground text-2xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
              {collection.title}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-end gap-4 md:gap-12 mt-10 mb-4">
            <CollectionsContent
              title={activeProduct?.title || ""}
              products={collection.products || []}
              activeIndex={activeIndex}
            />
            <CollectionImageSliders
              products={collection.products || []}
              slug={collection.slug}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
          <CollectionsActions
            collectionSlug={collection.slug}
            productSlug={activeProduct?.slug ?? ""}
            title={activeProduct?.title || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
