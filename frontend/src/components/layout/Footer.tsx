
import footer_robot from "../../assets/78efc838-aab4-438b-a63d-8ebf53f0bcea copy 2.png";
const Footer = () => {
  return (
  <footer className="relative w-[1637px] bg-[#050505] text-white overflow-hidden px-10 md:px-20 py-2 flex flex-col justify-between font-sans border-t border-orange-500/50">
      
      {/* --- Background Effects --- */}
      {/* Top right orange glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />

      {/* Diagonal Light Streaks (SVG Pattern) */}
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

      <div className="relative z-10 flex justify-between items-start ">
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 text-gray-400 font-medium ">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Live Chats</a>
        </nav>

        {/* Join Now Button */}
        <button className="bg-[#ff6a00] hover:bg-[#ff8400] text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-orange-600/30 transition-transform active:scale-95">
          Join Now
        </button>
      </div>


      {/* --- Middle Section: GRAPHOBOT --- */}
      <div className="relative z-10 mt-10 md:mt-0 flex items-center justify-center">
        <h1 className="text-[10vw] md:text-[8rem] leading-none font-black tracking-tighter opacity-90 select-none">
      <div className="relative z-10 mt-10 md:mt-0 flex items-center justify-center">
        <h1 className="text-[10vw] md:text-[8rem] leading-none font-black tracking-tighter opacity-90 select-none">
          GRAPHOBOT
        </h1>
      </div>

      {/* --- Character Image --- */}
      {/* Positioned absolutely to sit on top of the text and bottom edge */}
      {/* <img 
        src="https://via.placeholder.com/400x600/000000/FFFFFF?text=Robot+Character" 
        alt="Robot"
        className="absolute bottom-10 right-10 md:right-40 h-[300px] md:h-[500px] z-20 pointer-events-none object-contain"
      /> */}

      {/* --- Bottom Section --- */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white/5 pt-8 text-sm text-gray-500">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline underline-offset-4">Terms and Condition</a>
          <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
        </div>
        <p>
          © 2026 BOVOX.ai - AI-bot All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;