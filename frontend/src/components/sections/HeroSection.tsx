import Navbar from "../../components/layout/Navbar";
import GroupImage from "../../assets/Group.png";
import RobotImage from "../../assets/Group 2087324067.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-start pt-4 px-4 sm:pt-6">

      {/* CENTER BOX */}
      <div className="w-full max-w-[1442px] h-[550px] sm:h-[650px] md:h-[750px] lg:h-[800px] bg-black relative flex flex-col items-center rounded-[32px] sm:rounded-[56px] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.9)] mb-1">

        {/* Background Image Wrapper (Crops the uneven bottom part) */}
        <div className="absolute inset-0 w-full h-full rounded-[32px] sm:rounded-[56px] overflow-hidden">
          <img
            src={GroupImage}
            alt="Background"
            className="absolute top-0 left-0 w-full h-[250%] sm:h-[180%] md:h-[140%] lg:h-[120%] object-cover object-top opacity-90"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">

          {/* Navbar */}
          <div className="w-full flex justify-end md:justify-center lg:justify-end pt-4 sm:pt-8 px-4 sm:px-8 lg:px-16">
            <Navbar />
          </div>

          {/* Hero Content */}
          <div className="relative w-full flex-grow flex items-center justify-center pb-12 sm:pb-24">

            {/* Content Wrapper for Text and Robot */}
            <div className="relative flex items-center justify-center w-full max-w-[1200px] px-4">

              <div className="relative flex flex-col md:inline-flex items-center justify-center md:pl-[30px] lg:pl-[50px] xl:pl-[60px]">
                
                {/* Robot (Centered on Mobile, Absolute on Desktop) */}
                <div className="relative md:absolute z-20 
                  md:-left-[15%] lg:-left-[12%] xl:-left-[14%] 
                  md:-bottom-[12%] lg:-bottom-[16%] xl:-bottom-[36%] 
                  pointer-events-none 
                  mb-0 md:mb-0 translate-y-4 sm:translate-y-6 md:translate-y-0"
                >
                  <img
                    src={RobotImage}
                    alt="Robot"
                    className="max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] md:drop-shadow-2xl"
                  />
                </div>

                {/* Text */}
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[80px] lg:text-[110px] xl:text-[160px] 
                  font-bold text-white font-[Montserrat] leading-none tracking-tight z-10 text-center select-none shadow-black drop-shadow-2xl"
                >
                  GRAPHOBOT
                </h1>
                
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;