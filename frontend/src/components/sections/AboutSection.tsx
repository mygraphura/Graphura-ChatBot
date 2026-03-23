import Button from '../../components/ui/Button';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import Footer from '../layout/Footer';
import GlowImage from '../../assets/Group 2087323989.png';

const AboutSection = () => {
  return (
    <section className="w-full bg-black flex justify-center relative z-20">
      <div className="w-full max-w-[1448px] min-h-screen bg-black rounded-t-[150px] md:rounded-t-[25px] py-[120px] -mt-[300px] relative overflow-hidden">

       {/* ✅ Glow INSIDE the box */}
          <img
            src={GlowImage}
            alt=""
            className="absolute right-[-100px] top-[10%] w-[800px] sm:w-[1000px] opacity-105 pointer-events-none z-0"
          />

      {/* CENTER CONTAINER */}
      <div className="w-full relative px-4 sm:px-6 lg:px-8">

        {/* INNER BOX */}
        <div className="relative bg-transparent rounded-[24px] lg:-mt-[129px] px-6 sm:px-10 lg:px-14 py-40 overflow-hidden">

         

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-[46%] flex flex-col gap-6">

              <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-semibold leading-tight text-white">
                <span className="text-orange-500 font-[Montserrat]">AI</span>
                <span className="font-[Montserrat]"> That Works for Your </span>
                <span className="text-orange-500 font-[Montserrat]">Business</span>
              </h2>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80 leading-relaxed">
                We help companies integrate powerful AI chatbots into their platforms, enabling automated support, smarter engagement, and seamless customer experiences.
              </p>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80">
                Making conversations faster, smarter, and available
                <span className="text-orange-500"> 24/7</span>
              </p>

              <Button className="w-fit flex items-center gap-2">
                <span>Try Now</span>
                <img src="/images/img_vector.svg" alt="" className="w-[8px] h-[6px]" />
              </Button>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[54%] flex justify-center">

              <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden border border-white/20">

                <div className="bg-secondary-background-warm p-6 h-[450px] relative">
                  {/* Chat UI */}
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* OTHER SECTIONS */}
        <FeaturesSection />
        <PricingSection />
        <CTASection />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;