import { Link } from "react-router-dom";
import footer_robot from "../../assets/78efc838-aab4-438b-a63d-8ebf53f0bcea copy 2.png";

const Footer = () => {


  return (
    <footer className="relative w-full max-w-[1400px] mx-auto bg-[#050505] text-white overflow-hidden px-6 sm:px-10 md:px-20 py-8 flex flex-col justify-between font-sans border-t border-orange-500/50 rounded-t-[40px] sm:rounded-t-[60px]">

      {/* --- Background Effects --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />

      {/* Diagonal Light Streaks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonal-lines-enhanced" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="#ff7300" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines-enhanced)" />
        </svg>
      </div>

      {/* --- Top Section: Multi-Column Layout --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6">

        {/* Pages Column */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Pages</h4>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
          <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
          <Link to="/chat" className="text-gray-400 hover:text-white transition-colors text-sm">Live Chats</Link>
        </div>

        {/* Social Column */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Social</h4>
          <a href="https://www.instagram.com/graphura.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/graphura-india-private-limited/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
          </a>
          <a href="https://x.com/Graphura" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            Twitter / X
          </a>
          <a href="https://www.facebook.com/Graphura.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            Facebook
          </a>
        </div>

        {/* Contact & Location Column */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Contact</h4>
          <a href="tel:+917378021327" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            +91 7378021327
          </a>
          <a href="mailto:placement@graphura.online" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 break-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            placement@graphura.online
          </a>
          <div className="text-gray-400 text-sm flex items-start gap-2 mt-2 max-w-[200px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>Graphura India Private Limited, near RSF, Pataudi, Gurgaon, Haryana 122503</span>
          </div>
        </div>

        {/* Premium Join Now Button */}
        <div className="flex flex-col items-start sm:items-end col-span-2 sm:col-span-2 md:col-span-1">
          <Link to="/chat" className="group relative">
            <span className="absolute inset-0 rounded-full bg-orange-500/40 blur-lg group-hover:bg-orange-500/60 transition-all duration-300" />
            <span className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
              Join Now
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </Link>
        </div>
      </div>
    

      {/* --- Middle Section: GRAPHOBOT --- */}
      <div className="relative z-10 flex items-center justify-center">
        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8rem] leading-none font-black tracking-tighter opacity-90 select-none">
          GRAPHOBOT
        </h1>
      </div>

      {/* --- Character Image --- */}
      <img
        src={footer_robot}
        alt="Robot"
        className="absolute hidden md:block bottom-16 sm:bottom-25 right-4 sm:right-10 md:right-28 h-[140px] sm:h-[200px] md:h-[300px] z-20 pointer-events-none object-contain"
      />

      {/* --- Bottom Section --- */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-white/5 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-500 gap-3">
        <div className="flex space-x-4 sm:space-x-6">
          <Link to="/terms-conditions" className="hover:underline underline-offset-4">Terms and Condition</Link>
          <Link to="/privacy-policy" className="hover:underline underline-offset-4">Privacy Policy</Link>
        </div>
        <p className="text-center">
          © 2026 BOVOX.ai - AI-bot All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;