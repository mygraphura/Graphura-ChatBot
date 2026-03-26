import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";

import FooterEnhanced from "../components/layout/FooterEnhanced";

const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <AboutSection />
      <FooterEnhanced />
    </div>
  );
};

export default Home;   