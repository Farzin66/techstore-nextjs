import BrandSection from "@/components/BrandSection";
import FeaturesSection from "@/components/FeatueresSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import SpotlightSection from "@/components/SpotlightSection";
import ClubSection from "@/components/ClubSection";
import JournalSection from "@/components/JournalSection";
import InfoSection from "@/components/InfoSection";

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
