import Brand from "@/components/home-page/brand-story";
import Features from "@/components/home-page/features-section";
import HeroSection from "@/components/home-page/hero-section";
import HotSellers from "@/components/home-page/hot-sellers";
import CollectionsSection from "@/components/collections/CollectionsSection";

const Home = () => {
  return (
    <div className="relative z-0 ">
      <HeroSection />
      <CollectionsSection />
      <Features />
      <HotSellers />
      <Brand />
    </div>
  );
};

export default Home;
