import Navbar from "../../components/layout/Navbar";
import GroupImage from "../../assets/Group.png";
import RobotImage from "../../assets/Group 2087324067.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-start px-4 pt-0">

      {/* CENTER BOX */}
      <div className="relative w-full max-w-[1442px] min-h-[787px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden bg-black">

        {/* Background Image */}
        <img
          src={GroupImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">

          {/* Navbar */}
          <div className="w-full flex justify-end pt-4 sm:pt-6">
            <Navbar />
          </div>

          {/* Hero Content */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] px-10 sm:px-12 md:px-15 ">

            {/* 🤖 Robot (ON TOP) */}
            <div className="absolute 
    left-[10%] sm:left-[8%] md:left-[1%] 
    bottom-[0%] sm:bottom-[5%] md:bottom-[20%] 
    z-20"
            >
              <img
                src={RobotImage}
                alt="Robot"
                className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] xl:w-[380px] object-contain"
              />
            </div>

            {/* 📝 Text (BEHIND robot) */}
            <div className="absolute 
    left-[20%] sm:left-[25%] md:left-[10%] lg:left-[18%] 
    bottom-[10%] sm:bottom-[15%] md:bottom-[32%] 
    z-10"
            >
              <h1 className="text-[32px] sm:text-[48px] md:text-[80px] lg:text-[110px] xl:text-[140px] 
      font-bold text-white font-[Montserrat] leading-none tracking-tight">
                GRAPHOBOT
              </h1>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;