import Navbar from "../../components/layout/Navbar";
import GroupImage from "../../assets/Group.png";
import RobotImage from "../../assets/Group 2087324067.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-start px-4">

      {/* CENTER BOX */}
      <div className="w-full max-w-[1442px] h-[500px] sm:h-[600px] md:h-[750px] lg:h-[800px] bg-black relative overflow-visible flex flex-col items-center rounded-[48px] sm:rounded-[64px] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.9)] mb-1">

        {/* Background Image */}
        <img
          src={GroupImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">

          {/* Navbar */}
          <div className="w-full flex justify-center pt-4 sm:pt-6 translate-x-[10%] sm:translate-x-[15%] md:translate-x-[15%] lg:translate-x-[20%]">
            <Navbar />
          </div>

          {/* Hero Content */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] px-10 sm:px-12 md:px-15 ">

            {/* 🤖 Robot (ON TOP) */}
            <div className="absolute 
    left-[10%] sm:left-[8%] md:left-[5%] 
    bottom-[5%] sm:bottom-[10%] md:bottom-[35%] 
    z-20"
            >
              <img
                src={RobotImage}
                alt="Robot"
                className="w-[130px] sm:w-[180px] md:w-[210px] lg:w-[290px] xl:w-[330px] object-contain"
              />
            </div>

            {/* 📝 Text (BEHIND robot) */}
            <div className="absolute 
    left-[20%] sm:left-[25%] md:left-[12%] lg:left-[20%] 
    bottom-[15%] sm:bottom-[20%] md:bottom-[47%] 
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