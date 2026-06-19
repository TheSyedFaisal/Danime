import LeftCollectionCards from "@/components/LeftCollectionCards";
import RightCollectionsCard from "@/components/RightCollectionsCard";
import Image from "next/image";

const CardSection = () => {
  return (
    <section className="px-4 md:px-6 container pb-6">
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

        <h2 className="page-font text-center text-white text-xl md:text-4xl pt-12">
          NEW COLLECTION
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 
            my-10 items-stretch relative z-98"
        >
          <LeftCollectionCards />

          <RightCollectionsCard />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
