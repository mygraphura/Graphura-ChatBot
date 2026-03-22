
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="w-full mb-[6px]" role="contentinfo">
      <div className="relative w-full">
        {/* Main footer container with gradient borders */}
        <div 
          className="w-full h-[448px] relative"
          style={{
            borderTop: '2px solid transparent',
            borderLeft: '2px solid transparent', 
            borderRight: '2px solid transparent',
            borderImage: 'linear-gradient(180deg, #ff6c00 0%, #ff6c0000 100%)',
            borderRadius: '62px 62px 0px 0px'
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0 ml-[20px]">
            <img 
              src="/images/img_image_w_full.png" 
              alt="Footer background" 
              className="w-full h-[186px] rounded-[60px] object-cover"
            />
            
            {/* Join Now section with image and button */}
            <div className="absolute top-[40px] right-[114px] flex items-start -mt-[146px]">
              <img 
                src="/images/img_image_8.png" 
                alt="Join illustration" 
                className="w-[170px] h-[318px] object-cover"
              />
              <Button
                text="Join Now"
                text_font_size="text-3xl"
                text_font_family="Montserrat"
                text_font_weight="font-medium"
                text_line_height="leading-4xl"
                text_color="text-button-text-primary"
                fill_background_color="bg-accent-primary"
                border_border_radius="rounded-7xl"
                border_border_image=""
                effect_box_shadow=""
                layout_align_self="self-center"
                layout_width="auto"
                position="relative"
                layout_gap="0"
                variant="default"
                size="md"
                padding="t-[8px] r-[18px] b-[8px] l-[24px]"
                margin="mt-[34px] -ml-[12px]"
                className="self-center"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Main content area */}
          <div className="absolute inset-0 flex flex-col lg:flex-row w-full h-full overflow-x-auto lg:overflow-x-visible">
            {/* Navigation and content section */}
            <div className="flex flex-col w-full">
              {/* Navigation menu */}
              <nav 
                className="w-full px-[122px] pt-[32px] pr-[56px] pb-[32px] ml-[12px] max-w-[1440px]"
                style={{
                  background: 'linear-gradient(0deg, #040404 0%, #040404 50%, #00000000 100%)'
                }}
                role="navigation"
                aria-label="Footer navigation"
              >
                <ul className="flex flex-col space-y-4 mt-[48px]" role="menubar">
                  <li role="none">
                    <a 
                      href="/" 
                      className="text-5xl font-normal leading-6xl text-text-muted font-[Montserrat] hover:text-accent-primary transition-colors"
                      role="menuitem"
                    >
                      Home
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/about" 
                      className="text-5xl font-normal leading-6xl text-text-muted font-[Montserrat] hover:text-accent-primary transition-colors"
                      role="menuitem"
                    >
                      About
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/pricing" 
                      className="text-5xl font-normal leading-6xl text-text-muted font-[Montserrat] hover:text-accent-primary transition-colors"
                      role="menuitem"
                    >
                      Pricing
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/contact" 
                      className="text-5xl font-normal leading-6xl text-text-muted font-[Montserrat] hover:text-accent-primary transition-colors"
                      role="menuitem"
                    >
                      Contact
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/live-chats" 
                      className="text-5xl font-normal leading-6xl text-text-muted font-[Montserrat] hover:text-accent-primary transition-colors"
                      role="menuitem"
                    >
                      Live Chats
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Footer bottom section */}
              <div className="w-full bg-primary-background-charcoal px-[24px] py-[24px] -mt-[80px]">
                <div className="flex flex-col sm:flex-row justify-center items-end gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <span className="text-2xl font-normal leading-3xl text-text-muted font-[Montserrat] mt-[128px] mb-[10px]">
                      Terms and Condition
                    </span>
                    <a 
                      href="/privacy-policy" 
                      className="text-2xl font-normal leading-3xl text-text-muted font-[Montserrat] mb-[8px] hover:text-accent-primary transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <span className="text-2xl font-normal leading-3xl text-text-muted font-[Montserrat] ml-auto">
                    © 2026 BOVOX.ai - AI-bot All Right Reserved
                  </span>
                </div>
              </div>
            </div>

            {/* Large brand text */}
            <div className="absolute right-0 bottom-[76px]">
              <h2 className="text-hero font-bold leading-hero text-secondary-background-light font-[Montserrat]">
                GRAPHOBOT
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;