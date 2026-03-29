
import { Link } from "react-router-dom";
import footer_robot from "../../assets/78efc838-aab4-438b-a63d-8ebf53f0bcea copy 2.png";

const Footer = () => {


  return (
    <footer className="relative w-full max-w-[1400px] mx-auto bg-[#050505] h-auto min-h-[380px] sm:min-h-[454px] text-white overflow-hidden px-6 sm:px-10 md:px-20 py-6 sm:py-2 flex flex-col justify-between font-sans border-t border-orange-500/50 rounded-t-[40px] sm:rounded-t-[60px]">
      {/* --- Background Effects --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />

      {/* Diagonal Light Streaks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonal-lines" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="#ff7300" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* --- Top Section --- */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
        {/* Navigation Links */}
        <nav className="flex flex-row sm:flex-col flex-wrap gap-3 sm:space-y-4 text-gray-400 font-medium text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/chat" className="hover:text-white transition-colors">Live Chats</Link>
        </nav>

        {/* Premium Join Now Button */}
        <Link to="/chat" className="group relative">
          <span className="absolute inset-0 rounded-full bg-orange-500/40 blur-lg group-hover:bg-orange-500/60 transition-all duration-300" />
          <span className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
            Join Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </span>
        </Link>
      </div>

      {/* --- Middle Section: GRAPHOBOT --- */}
      <div className="relative z-10 mt-6 sm:mt-10 md:mt-0 flex items-center justify-center">
        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8rem] leading-none font-black tracking-tighter opacity-90 select-none">
          GRAPHOBOT
        </h1>
      </div>

      {/* --- Character Image --- */}
      <img
        src={footer_robot}
        alt="Robot"
        className="absolute bottom-16 sm:bottom-25 right-4 sm:right-10 md:right-45 h-[140px] sm:h-[200px] md:h-[300px] z-20 pointer-events-none object-contain"
      />

      {/* --- Bottom Section --- */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-10 border-t border-white/5 pt-4 sm:pt-8 text-xs sm:text-sm text-gray-500 gap-3">
        <div className="flex space-x-4 sm:space-x-6">
          <Link to="/" className="hover:underline underline-offset-4">Terms and Condition</Link>
          <Link to="/" className="hover:underline underline-offset-4">Privacy Policy</Link>
        </div>
        <p className="text-center">
          © 2026 BOVOX.ai - AI-bot All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;