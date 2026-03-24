import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";

import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;   