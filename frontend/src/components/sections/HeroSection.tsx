//import React from 'react';
import Button from '../../components/ui/Button';
import GroupImage from "../../assets/Group.png"; 
import RobotImage from "../../assets/Group 2087324067.png";    

const HeroSection = () => {
  return (
    <section className="relative w-full h-[956px] bg-black overflow-hidden">
      {/* Background image */}
     <img 
    src={GroupImage} 
    alt="Background" 
    className="absolute pointer-events-none max-w-none left-1/2"
    style={{
      width: '3269.65px',
      height: '1042px',
      top: '-86px',    // Figma Y
      left: '-556px',  // Figma X
      transform: 'rotate(-10deg)', // Add the tilt from Figma
      opacity: 0.8,    // Adjust based on your visual preference
    }}
  />

      
      {/* Navigation */}
      <div className="relative z-10 pt-[56px] pb-[56px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-[246px] sm:mb-[200px] md:mb-[220px] lg:mb-[246px]">
            {/* Header Navigation */}
            <div className="flex justify-center">
              <div 
                className="flex items-center justify-center w-full max-w-[562px] h-[114px] sm:h-[100px] md:h-[110px] lg:h-[114px] rounded-9xl px-6xl py-6xl"
                style={{
                  background: 'linear-gradient(219deg, #ff6c0033 0%, #04040433 100%)',
                  boxShadow: '0px 4px 4px #888888ff'
                }}
              >
                <div className="flex items-center justify-between w-full max-w-[480px] px-6xl">
                  {/* Navigation Links */}
                  <div className="flex items-center gap-6 lg:gap-8">
                    <a href="/" className="text-2xl font-medium leading-4xl text-text-white font-[Inter] hover:text-accent-primary transition-colors">
                      Home
                    </a>
                    <a href="/about" className="text-2xl font-medium leading-4xl text-text-white font-[Inter] hover:text-accent-primary transition-colors ml-8">
                      About us
                    </a>
                    <a href="/pricing" className="text-2xl font-medium leading-4xl text-text-white font-[Inter] hover:text-accent-primary transition-colors ml-7">
                      Pricing
                    </a>
                    <a href="/contact" className="text-2xl font-medium leading-4xl text-text-white font-[Inter] hover:text-accent-primary transition-colors ml-10">
                      Contact
                    </a>
                  </div>

                  {/* Join Now Button */}
                  <Button
                    text="Join Now"
                    text_font_size="text-md"
                    text_font_family="Inter"
                    text_font_weight="font-medium"
                    text_line_height="leading-lg"
                    text_color="text-text-white"
                    fill_background_color="bg-accent-primary"
                    border_border_radius="rounded-xl"
                    border_border_image="linear-gradient(180deg, #ffffff14 0%, #ffffff7f 100%)"
                    padding="t-[6px] r-[12px] b-[6px] l-[12px]"
                    margin="mr-[6px]"
                    effect_box_shadow="0px -2px 5px #ffb85451"
                    layout_align_self="auto"
                    layout_width="auto"
                    layout_gap="0"
                    position="relative"
                    variant="primary"
                    size="md"
                    onClick={() => {}}
                    className="border-0 border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex justify-center items-center mt-[56px] lg:mt-0">
              <div className="relative w-full max-w-[1384px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[596px]">
                {/* Left side content */}
                <div className="absolute left-0 top-[69px] w-full max-w-[366px]">
                  <img 
                    src={RobotImage}
                    alt="AI Robot" 
                    className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[366px] h-[300px] sm:h-[420px] md:h-[480px] lg:h-[548px] object-contain"
                  />
                  <div 
                    className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[210px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[86px] bg-primary-background-dark rounded-full mt-[-54px] ml-[88px]"
                    style={{ boxShadow: '0px 4px 53px #888888ff' }}
                  />
                </div>

                {/* Main heading */}
                <div className="absolute right-[62px] top-[300px] sm:top-[350px] md:top-[400px] lg:top-[444px]">
                  <h1 className="text-[80px] sm:text-[120px] md:text-[140px] lg:text-[160px] font-bold leading-display text-secondary-background-light font-[Montserrat]">
                    GRAPHOBOT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;