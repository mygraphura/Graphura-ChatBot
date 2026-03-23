import Card1 from "../../assets/Card front.png";
import Card2 from "../../assets/Card front(1).png";
import Card3 from "../../assets/Card front(2).png";

const FeaturesSection = () => {
  return (
    <section className="w-full py-[140px] flex justify-center relative">

      {/* ORANGE GLOW BACKGROUND */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full z-0"></div>

      {/* CONTENT */}
      <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white font-[Montserrat]">
            TRANSFORM THE WAY YOU
          </h2>
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-orange-500 font-[Montserrat]">
            COMMUNICATE
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-10">

          {/* LEFT CARD */}
          <div className="bg-[#0d0d0d] rounded-[28px] p-6 w-[260px] h-[380px] text-center border border-white/10 flex flex-col justify-between">
            <img src={Card1} alt="" className="rounded-[20px]" />
            
            <div>
              <p className="text-white/60 text-lg">Instant</p>
              <h3 className="text-white text-2xl font-semibold">Intelligence</h3>
            </div>

            <div className="flex justify-between text-sm text-white/50">
              <span>Fast Responses</span>
              <span>AI Powered</span>
            </div>
          </div>

          {/* CENTER CARD (BIGGER + LIFTED) */}
          <div className="bg-[#111] rounded-[32px] p-6 w-[300px] h-[430px] text-center border border-white/20 shadow-[0_0_60px_#ff7a0025] flex flex-col justify-between -translate-y-6">
            <img src={Card2} alt="" className="rounded-[20px]" />
            
            <div>
              <p className="text-white/60 text-lg">Smart</p>
              <h3 className="text-white text-3xl font-semibold">Conversation</h3>
            </div>

            <div className="flex justify-between text-sm text-white/50">
              <span>Context Aware</span>
              <span>Human-Like Chat</span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0d0d0d] rounded-[28px] p-6 w-[260px] h-[380px] text-center border border-white/10 flex flex-col justify-between">
            <img src={Card3} alt="" className="rounded-[20px]" />
            
            <div>
              <p className="text-white/60 text-lg">AI</p>
              <h3 className="text-white text-2xl font-semibold">Automation</h3>
            </div>

            <div className="flex justify-between text-sm text-white/50">
              <span>Task Automation</span>
              <span>24/7 Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;