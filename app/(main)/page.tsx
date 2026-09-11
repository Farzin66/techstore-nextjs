import Hero from "@/components/home/Hero";
import BrandSection from "@/components/home/BrandSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesSection from "@/components/home/FeaturesSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import ClubSection from "@/components/home/ClubSection";
import JournalSection from "@/components/home/JournalSection";
import InfoSection from "@/components/home/InfoSection";


const Home = () => {
  return <div className="p-5">
    <Hero/>
    <BrandSection/>
    <div className="container-custom py-12 lg:py-16 relative z-20 flex flex-col gap-12 lg:gap-16">
      <FeaturedCategories/>
      <FeaturedProducts/>
      <FeaturesSection/>
      <SpotlightSection/>
      <ClubSection/>
      <JournalSection/>
      <InfoSection/>
    </div>
  </div>;
};

export default Home;
