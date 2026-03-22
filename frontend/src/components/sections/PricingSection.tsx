import { useState } from 'react';
import Button from '../../components/ui/Button';

const PricingSection = () => {
  const [billingType, setBillingType] = useState('yearly');

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        'Unlimited transfer with priority processing',
        'Unlimited transfer with priority processing'
      ],
      buttonVariant: 'secondary'
    },
    {
      name: 'Standard', 
      price: '$19.99',
      badge: 'Best seller',
      features: [
        'Unlimited transfer with priority processing',
        'Unlimited transfer with priority processing', 
        'Unlimited transfer with priority processing'
      ],
      buttonVariant: 'primary'
    },
    {
      name: 'Business',
      price: '$49.99', 
      features: [
        'Unlimited transfer with priority processing',
        'Unlimited transfer with priority processing',
        'Unlimited transfer with priority processing',
        'Unlimited transfer with priority processing'
      ],
      buttonVariant: 'secondary'
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[56px] -mt-[66px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="w-[80%] mx-auto flex flex-col gap-[90px] items-center mb-16">
          <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[36px] sm:leading-[52px] md:leading-[62px] lg:leading-14xl text-center text-text-white font-[Inter] w-full">
            <span className="font-light">FROM QUESTION TO SOLUTION</span>
            <span className="font-semibold"> UNLOCK THE FULL </span>
            <span 
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #ff6c0099 0%, #f2701099 50%, #fef1f199 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              POWER OF AI
            </span>
          </h2>

          {/* Billing Toggle */}
          <div className="w-[34%] max-w-[400px]">
            <div 
              className="flex justify-between items-center bg-text-secondary rounded-8xl p-1"
              style={{ boxShadow: '0px 4px 4px #0000003f' }}
            >
              <button
                onClick={() => setBillingType('monthly')}
                className={`px-6 py-3 text-6xl font-semibold leading-7xl font-[Montserrat] transition-colors ${
                  billingType === 'monthly' ?'text-text-white' :'text-text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingType('yearly')}
                className={`px-8 py-4 text-6xl font-semibold leading-7xl font-[Montserrat] rounded-8xl transition-colors ${
                  billingType === 'yearly' ?'text-text-white bg-accent-primary border border-text-white' :'text-text-white'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-stretch w-[80%] mx-auto">
          {pricingPlans?.map((plan, index) => (
            <div 
              key={plan?.name}
              className="w-full lg:w-[326px] mx-auto"
              style={{
                background: 'linear-gradient(180deg, #713001 0%, #131313 100%)',
                border: '1px solid #ffffffb2',
                borderRadius: '30px',
                boxShadow: '0px 4px 25px #888888ff'
              }}
            >
              <div className="p-4">
                {/* Plan Header */}
                <div className="px-4 py-4 mb-4">
                  {index === 1 ? (
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-8xl font-semibold leading-10xl text-text-white font-[Montserrat] mb-2">
                          {plan?.name}
                        </h3>
                        <p className="text-10xl font-semibold leading-12xl text-text-white font-[Inter]">
                          {plan?.price}
                        </p>
                      </div>
                      <span className="bg-accent-primary text-text-white text-md font-semibold leading-lg font-[Inter] px-[10px] py-[2px] rounded-3xl">
                        {plan?.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="px-4 mb-4">
                      <h3 className="text-8xl font-semibold leading-10xl text-text-white font-[Montserrat] mb-2">
                        {plan?.name}
                      </h3>
                      <p className="text-10xl font-semibold leading-12xl text-text-white font-[Inter]">
                        {plan?.price}
                      </p>
                    </div>
                  )}

                  {/* Divider Line */}
                  <div className="w-full h-[1px] bg-text-white mt-2 mb-12" />

                  {/* Features */}
                  <div className="px-6 flex flex-col gap-2 lg:gap-2">
                    {plan?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-[14px] mb-4 lg:mb-2">
                        <img 
                          src="/images/img_group_2087324030.png"
                          alt="Check"
                          className="w-[22px] h-[22px] flex-shrink-0"
                        />
                        <p className="text-2xl font-light leading-2xl text-text-white font-[Inter] flex-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Button */}
                  <div 
                    className="w-full rounded-circular px-1 py-1 mt-16 lg:mt-20 mb-4"
                    style={{
                      background: 'linear-gradient(90deg, #000000 0%, #000000 100%)',
                      boxShadow: '0px 4px 100px #888888ff'
                    }}
                  >
                    <div className="w-full flex justify-center">
                      <Button
                        text="Get Started"
                        text_font_size="text-lg"
                        text_font_family="Inter"
                        text_font_weight="font-extrabold"
                        text_line_height="leading-xl"
                        text_color="text-text-white"
                        fill_background_color={plan?.buttonVariant === 'primary' ? "bg-accent-primary" : "bg-secondary-background-slate"}
                        border_border="1px solid #ffffff66"
                        border_border_radius="rounded-7xl"
                        border_border_image=""
                        effect_box_shadow=""
                        layout_align_self="auto"
                        layout_width="auto"
                        margin=""
                        position="relative"
                        layout_gap=""
                        variant={plan?.buttonVariant}
                        size="md"
                        onClick={() => {}}
                        padding="t-[10px] r-[34px] b-[10px] l-[34px]"
                        className="w-auto"
                      />
                    </div>
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

export default PricingSection;