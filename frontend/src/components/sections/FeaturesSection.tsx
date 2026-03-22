// import Card1 from "../../assets/Card front.png";
// import Card2 from "../../assets/Card front1.png";
// import Card3 from "../../assets/Card front2.png";


const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      image: '/assests/Card front.png',
      title: 'Instant \nIntelligence',
      titleStyles: {
        instant: 'font-normal',
        intelligence: 'font-medium text-[48px]'
      },
      leftText: 'Fast Responses',
      rightText: 'AI Powered'
    },
    {
      id: 2, 
      image: 'Cardpng',
      title: 'Smart\n Conversation',
      titleStyles: {
        smart: 'font-normal',
        conversation: 'font-medium text-[48px]'
      },
      leftText: 'Context Aware',
      rightText: 'Human-Like Chat'
    },
    {
      id: 3,
      image: '/images/img_img_1.png', 
      title: 'AI \nAutomation',
      titleStyles: {
        ai: 'font-normal',
        automation: 'font-semibold text-[48px]'
      },
      leftText: 'Task Automation',
      rightText: '24/7 Support'
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[56px] mb-[1034px]">
      {/* Section Title */}
      <div className="w-full flex justify-center mb-[130px]">
        <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-light leading-[36px] sm:leading-[52px] md:leading-[62px] lg:leading-14xl text-center text-text-white font-[Montserrat] max-w-4xl">
          <span className="font-light">TRANSFORM THE WAY YOU </span>
          <span 
            className="font-semibold"
            style={{
              background: 'linear-gradient(90deg, #ff6c00 0%, #909090 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            COMMUNICATE
          </span>
        </h2>
      </div>
      {/* Features Slider */}
      <div className="w-full max-w-[1280px] mx-auto overflow-x-auto">
        <div className="flex gap-8 lg:gap-12 min-w-max lg:min-w-0">
          {features?.map((feature, index) => (
            <div 
              key={feature?.id}
              className={`flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[390px] ${
                index === 0 ? 'self-end' : 
                index === 1 ? 'self-start': 'self-end mt-[90px] ml-10'
              }`}
            >
              <div 
                className="w-full bg-primary-background-deep rounded-10xl p-3 sm:p-4"
                style={{
                  border: '1px solid transparent',
                  borderImage: 'linear-gradient(298deg, #ffffff 0%, #ffffff00 100%)'
                }}
              >
                {/* Feature Image */}
                <div className="w-full flex justify-center mb-7">
                  <img 
                    src={feature?.image}
                    alt={`Feature ${feature?.id}`}
                    className="w-[280px] sm:w-[320px] lg:w-[362px] h-[280px] sm:h-[320px] lg:h-[362px] rounded-10xl object-cover"
                  />
                </div>

                {/* Feature Content */}
                <div className="px-2 sm:px-4 pb-4">
                  {/* Feature Title */}
                  <div className="text-center mb-8 lg:mb-10">
                    <h3 
                      className="text-[32px] sm:text-[36px] lg:text-9xl leading-[40px] sm:leading-[44px] lg:leading-11xl text-center font-[Montserrat]"
                      style={{
                        background: 'linear-gradient(117deg, #ffffff 0%, #909090 100%)',
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {feature?.title?.split('\n')?.map((line, idx) => (
                        <span key={idx} className={idx === 0 ? feature?.titleStyles?.instant || feature?.titleStyles?.smart || feature?.titleStyles?.ai : feature?.titleStyles?.intelligence || feature?.titleStyles?.conversation || feature?.titleStyles?.automation}>
                          {line}
                          {idx === 0 && <br />}
                        </span>
                      ))}
                    </h3>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-normal leading-5xl text-text-white font-[Montserrat]">
                      {feature?.leftText}
                    </span>
                    <span className="text-4xl font-normal leading-5xl text-text-white font-[Montserrat]">
                      {feature?.rightText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;