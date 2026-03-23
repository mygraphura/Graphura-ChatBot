// import {Link} from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      
//       {/* Logo */}
//       <div className="text-xl font-semibold text-gray-900">
//         G
//       </div>

//       {/* Links */}
//       <ul className="flex items-center gap-8 text-gray-700 font-medium">
//         <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
//         <li className="cursor-pointer hover:text-black"><Link to="/about">About</Link></li>
//         <li className="cursor-pointer hover:text-black"><Link to="/pricing">Pricing</Link></li>
//         <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact</Link></li>
//         <li className="cursor-pointer hover:text-black"><Link to="/chat">Chat</Link></li>
//       </ul>

//       {/* CTA Button */}
//       <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
//         Get Started
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import Button from "../../components/ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div 
        className="flex items-center justify-center w-full max-w-[562px] h-[114px] sm:h-[100px] md:h-[110px] lg:h-[114px] rounded-9xl px-6xl py-6xl"
        style={{
          background: 'linear-gradient(219deg, #ff6c0033 0%, #04040433 100%)',
          boxShadow: '0px 4px 4px #888888ff'
        }}
      >
        <div className="flex items-center justify-between w-full max-w-[480px] px-6xl">
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="/" className="text-2xl font-medium text-text-white hover:text-accent-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-2xl font-medium text-text-white hover:text-accent-primary transition-colors">
              About us
            </a>
            <a href="/pricing" className="text-2xl font-medium text-text-white hover:text-accent-primary transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-2xl font-medium text-text-white hover:text-accent-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Button */}
          <Button
            text="Join Now"
            variant="primary"
            size="md"
            className="border-0 border-transparent"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;