
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section className="w-full bg-primary-background rounded-t-[20px] -mt-[300px] pt-[138px] pb-[138px] relative z-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 mt-6">
          
          {/* Left Content */}
          <div className="w-full lg:w-[46%] flex flex-col gap-8">
            <div className="w-full max-w-[528px] flex flex-col gap-[34px] items-center">
              <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[32px] sm:leading-[48px] md:leading-[58px] lg:leading-13xl text-left text-text-white font-[Inter] w-full">
                <span className="text-accent-secondary font-[Montserrat]">AI</span>
                <span className="text-text-white font-[Montserrat]"> That Works for Your </span>
                <span className="text-accent-secondary font-[Montserrat]">Business </span>
              </h2>
              
              <div className="w-full flex flex-col gap-[34px] items-center">
                <p className="text-[16px] sm:text-[20px] md:text-[23px] lg:text-7xl font-normal leading-[20px] sm:leading-[26px] md:leading-[29px] lg:leading-8xl text-left text-text-white font-[Inter] w-full">
                  We help companies integrate powerful AI chatbots into their platforms, enabling automated support, smarter engagement, and seamless customer experiences.
                </p>
                
                <p className="text-[16px] sm:text-[20px] md:text-[23px] lg:text-7xl font-normal leading-[20px] sm:leading-[26px] md:leading-[29px] lg:leading-8xl text-left text-text-white font-[Inter] w-full">
                  <span className="text-text-white font-[Inter]">Making conversations faster, smarter, and available </span>
                  <span className="text-accent-secondary font-[Inter]">24/7</span>
                </p>
              </div>
            </div>

            <Button
              text="Try Now "
              text_font_size="text-2xl"
              text_font_family="Inter"
              text_font_weight="font-medium"
              text_line_height="leading-3xl"
              text_color="text-text-white"
              fill_background_color="bg-accent-primary"
              border_border="1px solid transparent"
              border_border_radius="rounded-7xl"
              border_border_image="linear-gradient(180deg, #ffffff14 0%, #ffffff7f 100%)"
              padding="t-[10px] r-[24px] b-[10px] l-[16px]"
              layout_gap="4px"
              layout_align_self="auto"
              layout_width="auto"
              margin="0"
              position="relative"
              variant="primary"
              size="md"
              onClick={() => {}}
              effect_box_shadow="-1px -3px 9px #ffb85451"
              className="w-auto flex items-center"
            >
              <span>Try Now</span>
              <img src="/images/img_vector.svg" alt="" className="w-[8px] h-[6px] ml-1" />
            </Button>
          </div>

          {/* Right Content - Chat Interface */}
          <div className="w-full lg:w-[54%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[694px]">
              {/* Chat container with border and background */}
              <div 
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[484px] bg-secondary-background-warm rounded-[20px] p-4 sm:p-6 lg:p-8 mr-5"
                style={{
                  border: '1px solid #f9f9f9'
                }}
              >
                {/* Left sidebar with icons */}
                <div className="absolute left-0 top-[320px] w-[40px] h-[200px] bg-secondary-background-muted rounded-tr-[20px] rounded-br-[20px] border-t border-r border-b border-text-white p-2">
                  <div className="flex flex-col gap-2 mt-[286px] ml-2">
                    {[
                      '/images/img_trash.svg',
                      '/images/img_sun.svg', 
                      '/images/img_user.svg',
                      '/images/img_arrowsquareout.svg',
                      '/images/img_signout.svg'
                    ]?.map((icon, index) => (
                      <div key={index} className="w-[18px] h-[18px] flex items-center justify-center p-1">
                        <img src={icon} alt="" className="w-[10px] h-[10px]" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat messages area */}
                <div className="ml-[60px] h-full flex flex-col justify-between">
                  {/* Top message */}
                  <div className="flex flex-col items-end mt-4">
                    <div className="bg-secondary-background-gray rounded-[12px] p-2 max-w-[200px]">
                      <p className="text-base font-semibold leading-base text-text-primary font-[Inter]">
                        Can you help me visualize a 3D scene?
                      </p>
                    </div>
                    <span className="text-sm font-semibold leading-sm text-text-white font-[Inter] mt-1 mr-[170px]">
                      7.53pm
                    </span>
                  </div>

                  {/* Response message */}
                  <div className="flex flex-col items-start mt-6">
                    <div className="bg-secondary-background-gray rounded-[16px] p-2 max-w-[250px]">
                      <p className="text-base font-semibold leading-md text-text-primary font-[Inter]">
                        Sure! 😊 Please provide more details about your request, and I would be happy to assist!
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-2">
                      <span className="text-sm font-semibold leading-sm text-text-white font-[Inter]">
                        7.54pm
                      </span>
                      <div className="bg-secondary-background-gray rounded-[12px] p-2 flex items-center gap-2 mr-[152px]">
                        <img src="/images/img_media_playcircle.svg" alt="" className="w-[10px] h-[10px]" />
                        <span className="text-base font-semibold leading-base text-text-primary font-[Inter]">
                          |..|||||...|||||.|။ 13
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom message */}
                  <div className="flex flex-col items-end mb-8">
                    <div className="bg-secondary-background-gray rounded-[16px] p-2 max-w-[150px]">
                      <p className="text-base font-semibold leading-base text-text-primary font-[Inter] text-right">
                        Here is what I created;
                      </p>
                    </div>
                    <span className="text-sm font-semibold leading-sm text-text-white font-[Inter] mt-1 ml-[14px]">
                      7.57pm
                    </span>
                  </div>

                  {/* Image gallery */}
                  <div className="flex items-center gap-4 mb-12">
                    <img 
                      src="/images/img_image_17.png" 
                      alt="Generated image 1" 
                      className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[154px] h-[100px] sm:h-[120px] md:h-[140px] lg:h-[154px] rounded-[14px] object-cover"
                    />
                    <div className="flex flex-col gap-4 -ml-[62px]">
                      <img 
                        src="/images/img_image_18.png" 
                        alt="Generated image 2" 
                        className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[206px] h-[90px] sm:h-[110px] md:h-[130px] lg:h-[140px] rounded-[14px] object-cover"
                      />
                      <img 
                        src="/images/img_image_16.png" 
                        alt="Generated image 3" 
                        className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[142px] h-[80px] sm:h-[95px] md:h-[108px] lg:h-[118px] rounded-[14px] object-cover ml-8 -mt-10"
                      />
                    </div>
                  </div>

                  {/* Search input */}
                  <div className="absolute bottom-4 left-[80px] right-4">
                    <div 
                      className="w-full max-w-[300px] bg-text-white rounded-md border-0 border-border-light p-2"
                      style={{ boxShadow: '0px 0px 5px #33333319' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img src="/images/img_search_icon_md.svg" alt="" className="w-[8px] h-[8px]" />
                          <span className="text-sm font-normal leading-sm text-text-secondary font-[Inter]">Search for</span>
                          <span className="text-sm font-normal leading-sm text-text-secondary font-[Inter]">ideas...</span>
                        </div>
                        <img src="/images/img_mic_icon_md.svg" alt="" className="w-[8px] h-[8px]" />
                      </div>
                      <div className="ml-12">
                        <span className="text-xs font-normal leading-xs text-text-secondary font-[Inter]">albums</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbs up/down */}
                  <div className="absolute bottom-[60px] right-[140px] flex items-center gap-1">
                    <img src="/images/img_thumbs_up.svg" alt="Thumbs up" className="w-[14px] h-[14px]" />
                    <img src="/images/img_thumbs_up_blue_gray_100.svg" alt="Thumbs down" className="w-[14px] h-[14px]" />
                  </div>

                  {/* Chat bubble */}
                  <div className="absolute top-[120px] right-[40px] bg-secondary-background-gray rounded-[18px] p-3 max-w-[160px]">
                    <p className="text-base font-normal leading-base text-text-primary font-[Inter] mb-2">
                      Stuck on something?
                    </p>
                    <p className="text-base font-semibold leading-md text-text-primary font-[Inter] text-right">
                      Let me help, get a quick assist! 😉
                    </p>
                  </div>
                </div>

                {/* Right sidebar with image */}
                <div className="absolute top-0 right-0 w-[148px] h-full bg-secondary-background-muted rounded-tr-[20px] rounded-br-[20px] border border-border-subtle p-1">
                  <div className="flex flex-col items-end h-full">
                    <div className="relative w-[126px] h-[190px] mt-[292px] mr-2">
                      <img 
                        src="/images/img_78efc838_aab4_4_190x126.png" 
                        alt="AI assistant" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-[70px] left-[14px] w-[2px] h-[2px] bg-secondary-background-gray rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Decoration dots */}
                <div className="absolute top-[12px] left-[720px] flex flex-col gap-[66px] items-center">
                  <div className="w-[14px] h-[14px] bg-accent-secondary rounded-lg" />
                  <div className="w-[14px] h-[14px] bg-accent-secondary rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;