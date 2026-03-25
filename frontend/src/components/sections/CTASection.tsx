import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-20 bg-black">
      <div className="w-full max-w-[1100px] relative min-h-[300px] sm:min-h-[350px] rounded-[32px] sm:rounded-[48px] overflow-hidden border border-white/10 flex flex-col items-center justify-center bg-black group/container">
        
        {/* Background Glows and Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-orange-600/15 blur-[100px] rounded-full opacity-60 group-hover/container:opacity-80 transition-opacity duration-700" />
          
          {/* Subtle mesh/waves effect */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%), 
                                  linear-gradient(45deg, transparent 48%, rgba(234, 88, 12, 0.1) 50%, transparent 52%),
                                  linear-gradient(-45deg, transparent 48%, rgba(234, 88, 12, 0.05) 50%, transparent 52%)`,
                 backgroundSize: '100% 100%, 60px 60px, 60px 60px'
               }}
          />

          {/* Wispy flow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 mix-blend-screen overflow-hidden">
             <div className="absolute top-[20%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent rotate-[-15deg] blur-3xl animate-pulse" />
             <div className="absolute bottom-[20%] right-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent rotate-[15deg] blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 gap-8 sm:gap-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-white/70 text-lg sm:text-xl md:text-2xl font-medium tracking-tight font-[Montserrat]">
              Step Into the Future of
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight font-[Montserrat] leading-tight">
              Customer Interaction
            </h2>
          </div>

          <Link to="/chat">
            <button className="group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] active:scale-95 hover:-translate-y-1">
              <span>Try Now</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white group-hover:text-orange-600 transition-colors group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;