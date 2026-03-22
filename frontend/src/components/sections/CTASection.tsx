//import Button from '../../components/ui/Button';

const CallToActionSection = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mx-[292px] max-w-[856px] w-full">
        <div 
          className="w-full h-[270px] rounded-9xl px-[56px] py-[66px] relative"
          style={{
            backgroundImage: "url('/images/img_rectangle_1430106636.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-background-overlay rounded-9xl" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center h-full justify-center">
            <h2 className="text-[20px] sm:text-[28px] md:text-[35px] lg:text-9xl font-bold leading-[24px] sm:text-[32px] md:leading-[40px] lg:leading-9xl text-text-white font-[Montserrat] max-w-[600px]">
              <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-6xl font-normal leading-9xl font-[Montserrat]">
                Step Into the Future of
              </span>
              <br />
              <span className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-9xl font-semibold leading-9xl font-[Montserrat]">
                Customer Interaction
              </span>
            </h2>

            {/* <Button
              text="Try Now"
              text_font_size="text-xl"
              text_font_family="Inter"
              text_font_weight="font-medium"
              text_line_height="leading-3xl"
              text_color="text-text-white"
              fill_background_color="bg-accent-primary"
              border_border="0px solid transparent"
              border_border_radius="rounded-2xl"
              border_border_image="linear-gradient(180deg, #ffffff14 0%, #ffffff7f 100%)"
              padding="t-[6px] r-[34px] b-[6px] l-[22px]"
              layout_gap="10px"
              layout_align_self="auto"
              layout_width="auto"
              margin="0px"
              position="relative"
              variant="primary"
              size="md"
              onClick={() => {}}
              effect_box_shadow="0px -2px 7px #ffb85451"
              className="flex items-center"
            > */}
              {/* <span>Try Now</span>
              <img src="/images/img_vector.svg" alt="" className="w-[12px] h-[8px] ml-2" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;