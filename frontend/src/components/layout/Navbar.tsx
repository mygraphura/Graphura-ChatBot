
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-center px-4 w-full">
      <div
        className="flex items-center justify-center w-full max-w-[600px] h-[60px] sm:h-[74px] rounded-full sm:rounded-[32px] overflow-hidden"
        style={{
          background: 'linear-gradient(219deg, rgba(255, 108, 0, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-10 gap-4">

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              About us
            </a>
            <a href="/#pricing" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-sm sm:text-base font-medium text-white hover:text-orange-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile "Nav" - just a logo or name if links are hidden */}
          <div className="md:hidden font-bold text-orange-500 text-sm">
            GRAPHOBOT
          </div>

          {/* Button */}
          <Link to="/chat">
            <Button
              text="Join Now"
              variant="primary"
              size="md"
              className="border-0 border-transparent scale-90 sm:scale-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;