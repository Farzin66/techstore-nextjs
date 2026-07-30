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
  return <div>
    <Hero/>
    <br />
    <BrandSection/>
    <br />
    <FeaturedCategories/>
    <br />
    <FeaturedProducts/>
    <br />
    <FeaturesSection/>
    <br />
    <SpotlightSection/>
    <br />
    <br />
    <br />
    <ClubSection/>
    <br />
    <JournalSection/>
    <br />
    <InfoSection/>
    <br />
  </div>;
};

export default Home;
