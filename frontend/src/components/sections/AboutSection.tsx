import Button from '../../components/ui/Button';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import CTASection from './CTASection';
import GlowImage from '../../assets/Group 2087323989.png';
import ChatImage1 from '../../assets/image 16.png';
import ChatImage2 from '../../assets/image 17.png';
import ChatImage3 from '../../assets/image 18.png';
import RobotAvatar from '../../assets/robot-small.png';
import ChatImage1 from '../../assets/image 16.png';
import ChatImage2 from '../../assets/image 17.png';
import ChatImage3 from '../../assets/image 18.png';
import RobotAvatar from '../../assets/robot-small.png';

const AboutSection = () => {
  return (
    <section className="w-full bg-black flex justify-center relative z-20 ">
      <div className="w-full max-w-[1448px] min-h-screen bg-black rounded-t-[20px] md:rounded-t-[25px] pt-[80px] sm:pt-[120px] pb-20 -mt-[150px] sm:-mt-[300px] relative overflow-hidden">

        {/* ✅ Glow INSIDE the box */}
        <img
          src={GlowImage}
          alt=""
          className="absolute right-[-100px] top-[10%] w-[600px] sm:w-[800px] md:w-[1000px] opacity-105 pointer-events-none z-0"
        />

        {/* CENTER CONTAINER */}
        <div className="w-full relative px-4 sm:px-6 lg:px-8">
        {/* CENTER CONTAINER */}
        <div className="w-full relative px-4 sm:px-6 lg:px-8">

          {/* INNER BOX */}
          <div className="relative bg-transparent rounded-[24px] lg:-mt-[129px] px-4 sm:px-10 lg:px-14 py-20 sm:py-40 overflow-hidden">

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-12">

              {/* LEFT SIDE */}
              <div className="w-full lg:w-[46%] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

                <h2 className="text-[28px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-semibold leading-tight text-white max-w-[600px]">
                  <span className="text-orange-500 font-[Montserrat]">AI</span>
                  <span className="font-[Montserrat]"> That Works for Your </span>
                  <span className="text-orange-500 font-[Montserrat]">Business</span>
                </h2>

                <p className="text-[15px] sm:text-[18px] md:text-[20px] text-white/80 leading-relaxed max-w-[550px]">
                  We help companies integrate powerful AI chatbots into their platforms, enabling automated support, smarter engagement, and seamless customer experiences.
                </p>

                <p className="text-[15px] sm:text-[18px] md:text-[20px] text-white/80">
                  Making conversations faster, smarter, and available
                  <span className="text-orange-500"> 24/7</span>
                </p>

                <Button className="w-fit flex items-center gap-2 hover:scale-105 transition-transform">
                  <span>Try Now</span>
                  <img src="/images/img_vector.svg" alt="" className="w-[8px] h-[6px]" />
                </Button>

              </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-[54%] flex justify-center px-2 sm:px-0">

                <div className="w-full max-w-[600px] rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">

                  <div className="bg-[#1e1c1b] flex h-[400px] sm:h-[480px] relative font-sans text-white overflow-hidden">
                    {/* Left Sidebar */}
                    <div className="w-[50px] sm:w-[60px] border-r border-white/10 flex flex-col items-center py-4 sm:py-6 gap-4 sm:gap-6 bg-[#2a2726] shrink-0">
                      <div className="p-1.5 sm:p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/></svg>
                      </div>
                      <div className="p-1.5 sm:p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      </div>
                      <div className="p-1.5 sm:p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <div className="mt-auto p-1.5 sm:p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
                      </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col p-3 sm:p-4 relative min-w-0">
                      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6 px-1 sm:px-2 pb-16 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {/* User Message */}
                        <div className="flex flex-col items-end gap-1">
                          <div className="bg-[#4a4744] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[18px] rounded-tr-none max-w-[90%] sm:max-w-[80%] text-[12px] sm:text-[13px]">
                            Can you help me visualize a 3D scene?
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-white/40 mr-1">7:53pm</span>
                        </div>

                        {/* Bot Message */}
                        <div className="flex flex-col gap-1">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                            <div className="bg-[#3a3735] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[18px] rounded-tl-none max-w-[90%] sm:max-w-[80%] text-[12px] sm:text-[13px]">
                              Sure! 😊 Please provide more details about your request!
                            </div>
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-white/40 ml-5 sm:ml-6">7:54pm</span>
                        </div>

                        {/* User Voice Message */}
                        <div className="flex flex-col items-end gap-1">
                          <div className="bg-[#4a4744] text-white p-2 rounded-[20px] rounded-tr-none flex items-center gap-2 sm:gap-3 w-[130px] sm:w-[176px]">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/10 rounded-full flex items-center justify-center cursor-pointer text-[10px]">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <div className="flex-1 flex items-end gap-[1.5px] sm:gap-[2px] h-2.5 sm:h-3">
                              {[1,2,3,4,3,2,4,2,3].map((h, i) => (
                                <div key={i} className="w-[1.5px] sm:w-[2px] bg-white/40 rounded-full" style={{ height: `${h * 20}%` }}></div>
                              ))}
                            </div>
                            <span className="text-[10px] sm:text-[11px] text-white/60 font-medium font-mono">13s</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-white/40 mr-1">7:55pm</span>
                        </div>

                        {/* Bot Image Output */}
                        <div className="flex flex-col gap-1">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                            <div className="bg-[#3a3735] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[18px] rounded-tl-none max-w-[90%] sm:max-w-[80%] text-[12px] sm:text-[13px]">
                              Here's what I created;
                            </div>
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-white/40 ml-5 sm:ml-6">7:57pm</span>

                          {/* Image Stack */}
                          <div className="relative h-32 sm:h-44 mt-4 ml-5 sm:ml-6 mr-6 sm:mr-10">
                            <img
                              src={ChatImage1}
                              alt="Generation 1"
                              className="absolute left-0 top-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border border-white/20 -rotate-[8deg] z-10 shadow-xl"
                            />
                            <img
                              src={ChatImage2}
                              alt="Generation 2"
                              className="absolute left-[50px] sm:left-[80px] -top-3 sm:-top-4 w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border border-white/20 rotate-[4deg] z-0 shadow-xl"
                            />
                            <img
                              src={ChatImage3}
                              alt="Generation 3"
                              className="absolute left-[80px] sm:left-[130px] top-3 sm:top-4 w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border border-white/20 -rotate-[2deg] z-20 shadow-xl"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Input Area */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 h-10 sm:h-11 bg-white rounded-full flex items-center px-3 sm:px-4 gap-2 sm:gap-3 shadow-lg">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/40"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <input
                          type="text"
                          placeholder="Search for ideas..."
                          className="flex-1 bg-transparent border-none outline-none text-black text-[12px] sm:text-[13px] placeholder:text-black/40 font-medium min-w-0"
                        />
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/40 cursor-pointer hidden sm:block"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                      </div>
                    </div>

                    {/* Robot Overlay */}
                    <div className="absolute right-[-10px] sm:right-0 bottom-6 sm:bottom-0 w-[100px] sm:w-[150px] md:w-[180px] pointer-events-none z-30 translate-y-4">
                      <div className="relative">
                        {/* Speech Bubble */}
                        <div className="absolute -left-[80px] sm:-left-[120px] md:-left-[140px] top-[10px] sm:top-[30px] md:top-[40px] bg-white text-black text-[8px] sm:text-[10px] md:text-[11px] font-bold p-1.5 sm:p-2.5 md:p-3 rounded-2xl rounded-tr-none shadow-xl leading-snug w-[85px] sm:w-[120px] md:w-[140px]">
                          Get quick AI assist! 😊
                          <div className="absolute -right-[6px] sm:-right-[8px] top-0 w-0 h-0 border-t-[8px] sm:border-t-[10px] border-t-white border-r-[8px] sm:border-r-[10px] border-r-transparent"></div>
                        </div>
                        <img
                          src={RobotAvatar}
                          alt="AI Assistant"
                          className="w-full drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Feedback Icons */}
                    <div className="absolute right-[110px] sm:right-[160px] md:right-[195px] bottom-[70px] sm:bottom-[95px] md:bottom-[115px] flex gap-1.5 sm:gap-2 z-20 scale-75 sm:scale-100 opacity-60 sm:opacity-100">
                      <div className="p-1 px-1.5 bg-white/5 rounded-md border border-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                      </div>
                      <div className="p-1 px-1.5 bg-white/5 rounded-md border border-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                      </div>
                    </div>
                  </div>

                </div>
                </div>

              </div>
              </div>

            </div>
          </div>
            </div>
          </div>

          {/* OTHER SECTIONS */}
          <FeaturesSection />
          <PricingSection />
          <CTASection />
          {/* OTHER SECTIONS */}
          <FeaturesSection />
          <PricingSection />
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;