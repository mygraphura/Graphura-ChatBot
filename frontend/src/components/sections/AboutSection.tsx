import Button from '../../components/ui/Button';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import Footer from '../layout/Footer';

const AboutSection = () => {
  return (
    <section className="w-full  min-h-screen bg-black py-[120px] -mt-[340px] relative z-20 ">

      {/* CENTER CONTAINER (same as hero) */}
      <div className="w-full max-w-[1515px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* INNER BOX (THIS WAS MISSING) */}
        <div className="bg-black  rounded-[24px] lg:-mt-[129px] px-6 sm:px-10 lg:px-14 py-40">

          <div className="flex flex-col lg:flex-row items-center gap-12">

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

              {/* MATCH HERO BOX SIZE */}
              <div className="w-full max-w-[600px] rounded-[20px] overflow-hidden border border-white/20">

                {/* KEEP YOUR EXISTING CHAT UI HERE */}
                <div className="bg-secondary-background-warm p-6 h-[450px] relative">
                  {/* 👉 Paste your full chat UI here (unchanged) */}
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Integrated Sections */}
        <FeaturesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </section>
  );
};

export default AboutSection;