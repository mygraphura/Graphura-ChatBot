
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex justify-center px-4 w-full relative">
      <div
        className="flex items-center justify-center w-full max-w-[600px] h-[60px] sm:h-[74px] rounded-full sm:rounded-[32px] overflow-visible"
        style={{
          background: 'linear-gradient(219deg, rgba(255, 108, 0, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-10 gap-4">

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              About us
            </Link>
            <Link to="/pricing" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile: Hamburger + Logo */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
            <span className="font-bold text-orange-500 text-sm">GRAPHOBOT</span>
          </div>

          {/* Premium Button */}
          <Link to="/chat" className="group relative">
            <span className="absolute inset-0 rounded-full bg-orange-500/40 blur-lg group-hover:bg-orange-500/60 transition-all duration-300 scale-90 sm:scale-100" />
            <span className="relative flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-4 px-6 flex flex-col gap-3 z-50 md:hidden shadow-xl shadow-black/50">
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white/80 hover:text-orange-500 transition-colors py-2">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white/80 hover:text-orange-500 transition-colors py-2">About us</Link>
          <Link to="/pricing" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white/80 hover:text-orange-500 transition-colors py-2">Pricing</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white/80 hover:text-orange-500 transition-colors py-2">Contact</Link>
          <Link to="/chat" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors py-2">Live Chat</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;