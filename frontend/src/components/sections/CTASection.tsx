import { Link } from 'react-router-dom';
import FireImage from "../../assets/Pasted image (2).png";

const CTASection = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-20 bg-black">
      <div className="w-full max-w-[950px] relative min-h-[260px] sm:min-h-[320px] rounded-[32px] overflow-hidden border border-orange-500/50 flex flex-col items-center justify-center bg-black group/container shadow-[0_0_40px_rgba(234,88,12,0.15)]">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={FireImage}
            alt="Background Waves"
            className="w-full h-[200%] sm:h-[150%] object-cover object-center opacity-60 blur-[3px] scale-105"
          />
          {/* Subtle gradient to darken edges for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 gap-6 sm:gap-8">
          
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[#d1d5db] text-lg sm:text-xl md:text-2xl font-medium tracking-wide font-[Montserrat]">
              Step Into the Future of
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[Montserrat] leading-tight drop-shadow-lg">
              Customer Interaction
            </h2>
          </div>

          <Link to="/chat">
            <button className="group flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 active:scale-95">
              <span>Try Now</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-[#f97316] group-hover:translate-x-0.5 transition-transform"
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