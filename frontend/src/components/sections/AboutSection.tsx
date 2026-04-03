import { Link } from 'react-router-dom';
import Button from '../ui/Button';

import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import GlowImage from '../../assets/Group 2087323989.png';
import ChatImage1 from '../../assets/image 16.png';
import ChatImage2 from '../../assets/image 17.png';
import ChatImage3 from '../../assets/image 18.png';
import RobotAvatar from '../../assets/robot-small.png';

const AboutSection = () => {
  return (
    <section className="w-full bg-black flex justify-center relative z-20">
      <div className="w-full max-w-[1448px] min-h-screen bg-black rounded-t-[32px] md:rounded-t-[25px] pt-[80px] md:pt-[100px] lg:pt-[120px] pb-20 -mt-[100px] sm:-mt-[150px] md:-mt-[220px] lg:-mt-[296px] relative overflow-hidden">

        {/* ✅ Glow INSIDE the box */}
        <img
          src={GlowImage}
          alt=""
          className="absolute right-[-100px] top-[10%] w-[800px] sm:w-[1000px] opacity-105 pointer-events-none z-0"
        />

        {/* CENTER CONTAINER */}
        <div className="w-full relative px-4 sm:px-6 lg:px-8">

          {/* INNER BOX */}
          <div className="relative mt-1">

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">

              {/* LEFT SIDE */}
              <div className="w-full lg:w-[46%] flex flex-col gap-6">

                <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-semibold leading-tight text-white">
                  <span className="text-orange-500 font-[Montserrat]">AI</span>
                  <span className="font-[Montserrat]"> That Works for Your </span>
                  <span className="text-orange-500 font-[Montserrat]">Business</span>
                </h2>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80 leading-relaxed">
                  We help companies integrate powerful AI chatbots into their platforms, enabling automated support, smarter engagement, and seamless customer experiences.
                </p>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80">
                  Making conversations faster, smarter, and available
                  <span className="text-orange-500"> 24/7</span>
                </p>

                <Link to="/chat">
                  <Button className="w-fit flex items-center gap-2">
                    <span>Try Now</span>
                    <img src="/images/img_vector.svg" alt="" className="w-[8px] h-[6px]" />
                  </Button>
                </Link>

              </div>

              {/* RIGHT SIDE (Chat Box) */}
              <div className="w-full lg:w-[54%] flex justify-center">
                <div className="w-full max-w-[900px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  
                  {/* CSS for hiding scrollbar */}
                  <style dangerouslySetInnerHTML={{ __html: `
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                  `}} />

                  <div className="bg-[#1e1c1b] flex h-[520px] relative font-sans text-white overflow-hidden">
                    
                    {/* 1. Left Sidebar */}
                    <div className="w-[50px] sm:w-[60px] border-r border-white/5 flex flex-col items-center py-8 gap-8 bg-[#0a0a0a]/40">
                      <div className="p-2 cursor-pointer text-white/40 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/></svg>
                      </div>
                      <div className="p-2 cursor-pointer text-white/40 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      </div>
                      <div className="p-2 cursor-pointer text-white/40 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <div className="p-2 cursor-pointer text-white/40 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13l-6 6-6-6M12 19V5"/></svg>
                      </div>
                      <div className="mt-auto p-2 cursor-pointer text-white/40 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2-0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
                      </div>
                    </div>

                    {/* 2. Main Chat Area */}
                    <div className="flex-1 flex flex-col relative border-r border-white/5 bg-[#141414]/20">
                      
                      {/* Entire chat in one screen - no scroll */}
                      <div className="flex-1 flex flex-col justify-center space-y-3 p-4 sm:p-5 pb-20 overflow-hidden">
                        
                        {/* 1. User Message */}
                        <div className="flex justify-end">
                          <div className="flex flex-col items-end gap-1 max-w-[80%]">
                            <div className="bg-[#efefef] text-black px-4 py-1.5 rounded-[20px] rounded-tr-[4px] text-[12px] sm:text-[13px] font-medium shadow-lg">
                              Can you help me visualize a 3D scene?
                            </div>
                            <span className="text-[9px] text-white/30 mr-1">7:53pm</span>
                          </div>
                        </div>

                        {/* 2. Bot Message */}
                        <div className="flex justify-start">
                          <div className="flex flex-col items-start gap-1 max-w-[85%] relative">
                             <div className="absolute -left-3.5 top-3 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,115,0,0.5)]"></div>
                             <div className="bg-[#2a2a2a] text-white px-4 py-1.5 rounded-[20px] rounded-tl-[4px] text-[12px] sm:text-[13px] font-medium shadow-md border border-white/5">
                               Sure! 😊 Please provide more details about your request.
                             </div>
                             <span className="text-[9px] text-white/30 ml-1">7:54pm</span>
                          </div>
                        </div>

                        {/* 3. User Voice Message */}
                        <div className="flex justify-end scale-90 sm:scale-95 origin-right">
                           <div className="flex flex-col items-end gap-1">
                             <div className="bg-[#2a2a2a] border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
                               <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center cursor-pointer shadow-inner">
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                               </div>
                               <div className="flex items-center gap-1">
                                 {[1,2,3.5,2,4,3,2,3,2].map((h, i) => (
                                   <div key={i} className="w-[3px] bg-white/30 rounded-full" style={{ height: `${h * 3}px` }}></div>
                                 ))}
                               </div>
                               <span className="text-[10px] text-white/60 font-mono">13</span>
                             </div>
                             <span className="text-[9px] text-white/30 mr-1">7:55pm</span>
                           </div>
                        </div>

                        {/* 4. Bot Image Response */}
                        <div className="flex justify-start">
                          <div className="flex flex-col items-start gap-1 max-w-full relative">
                             <div className="absolute -left-3.5 top-3 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,115,0,0.5)]"></div>
                             <div className="bg-[#2a2a2a] text-white px-4 py-1.5 rounded-[20px] rounded-tl-[4px] text-[12px] sm:text-[13px] font-medium shadow-md border border-white/5">
                               Here's what I created;
                             </div>
                             
                             {/* Image Stack */}
                             <div className="relative w-full h-[150px] sm:h-[160px] mt-2 flex items-center justify-center">
                                <img
                                  src={ChatImage2}
                                  alt=""
                                  className="absolute w-[110px] sm:w-[130px] h-[75px] sm:h-[90px] object-cover rounded-[12px] -rotate-[14deg] -translate-x-10 translate-y-4 z-0 opacity-60"
                                />
                                <img
                                  src={ChatImage1}
                                  alt=""
                                  className="absolute w-[120px] sm:w-[150px] h-[85px] sm:h-[110px] object-cover rounded-[14px] rotate-[4deg] -translate-y-4 z-20 shadow-2xl"
                                />
                                <img
                                  src={ChatImage3}
                                  alt=""
                                  className="absolute w-[110px] sm:w-[130px] h-[75px] sm:h-[90px] object-cover rounded-[12px] rotate-[12deg] translate-x-10 translate-y-6 z-10"
                                />
                             </div>

                             {/* Actions + Timestamp */}
                             <div className="flex items-center gap-2 mt-1 ml-2 w-full">
                               <div className="flex gap-1.5">
                                 <div className="p-1 cursor-pointer bg-white/5 rounded-lg border border-white/5 text-white/40 hover:text-white/80 transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                                 </div>
                                 <div className="p-1 cursor-pointer bg-white/5 rounded-lg border border-white/5 text-white/40 hover:text-white/80 transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                                 </div>
                               </div>
                               <span className="text-[9px] text-white/30 ml-auto mr-4">7:57pm</span>
                             </div>

                          </div>
                        </div>

                      </div>

                      {/* Floating Input Area */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-white rounded-full flex items-center px-4 gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-50">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <input
                          type="text"
                          placeholder="Search for ideas..."
                          className="flex-1 bg-transparent border-none outline-none text-black text-[12px] placeholder:text-black/30 font-medium"
                        />
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 cursor-pointer"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                      </div>
                    </div>

                    {/* 3. Right Panel (Robot) */}
                    <div className="w-[160px] sm:w-[220px] bg-[#2a2726] border-l border-white/5 flex flex-col justify-end p-4 relative">
                       
                       {/* Thought Bubble */}
                       <div className="absolute right-6 bottom-[180px] sm:bottom-[220px] w-[140px] sm:w-[160px] z-20">
                          <div className="bg-[#efefef] text-black text-[10px] sm:text-[11px] font-bold p-3 sm:p-4 rounded-[20px] rounded-br-none shadow-2xl leading-snug">
                            Stuck on something? Let me help, get a quick assist! 😊
                          </div>
                          <div className="absolute right-4 -bottom-2 flex flex-col items-center gap-1">
                             <div className="w-1.5 h-1.5 bg-[#efefef]/60 rounded-full"></div>
                             <div className="w-1 h-1 bg-[#efefef]/30 rounded-full"></div>
                          </div>
                       </div>

                       {/* Robot */}
                       <div className="flex justify-center items-end h-[180px] sm:h-[220px]">
                          <img 
                            src={RobotAvatar} 
                            alt="Robot" 
                            className="w-[120px] sm:w-[140px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-x-[-1]" 
                          />
                       </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <FeaturesSection />
          <PricingSection />
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;