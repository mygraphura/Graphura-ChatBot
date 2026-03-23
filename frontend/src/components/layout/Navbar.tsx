
import Button from "../../components/ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-[56px]">
      <div
        className="flex items-center justify-center w-[563px] h-[74px] rounded-[32px]"
        style={{
          background: 'linear-gradient(219deg, #ff6c0033 0%, #04040433 100%)',
          boxShadow: '0px 4px 4px #888888ff'
        }}
      >
        <div className="flex items-center justify-between w-full px-10">

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-base font-medium text-white hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="/about" className="text-base font-medium text-white hover:text-orange-500 transition-colors">
              About us
            </a>
            <a href="/pricing" className="text-base font-medium text-white hover:text-orange-500 transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-base font-medium text-white hover:text-orange-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Button */}
          <Button
            text="Join Now"
            variant="primary"
            size="md"
            className="border-0 border-transparent"
            onClick={() => { }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;