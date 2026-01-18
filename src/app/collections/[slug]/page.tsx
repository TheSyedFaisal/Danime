"use client";
import CollectionImageSliders from "@/components/collections/CollectionImageSliders";
import CollectionsActions from "@/components/collections/CollectionsActions";
import CollectionsContent from "@/components/collections/CollectionsContent";
import { cards } from "@/lib/constant";
import { useParams } from "next/navigation";
import { useState } from "react";

const page = () => {
  const { slug } = useParams();
  const collections = cards.find((item) => item.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTitle = collections?.products[activeIndex]

  if (!collections) {
    return (
      <div className="h-screen flex items-center my-8 justify-center">
        <h1 className="text-foreground page-font text-5xl">
          {slug} not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className=" mt-10 px-10 mb-10">
        <div className=" ">
          <div className=" text-center">
            <h2 className="text-black text-sm md:text-2xl lg:text-[35px] leading-[100%] page-font ml-1 lg:ml-2">
              Collections
            </h2>
            <h1 className="text-foreground text-2xl md:text-6xl lg:text-[70px] leading-[70%] page-font">
              {collections.title}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-end gap-12 mt-10 mb-4">
            <CollectionsContent products={collections.products} activeIndex={activeIndex} />
            <CollectionImageSliders products={collections.products} slug={collections.slug} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
          </div>
          <CollectionsActions title={activeTitle?.title || ""} />
        </div>
      </div>
    </div>
  );
};

export default page;
