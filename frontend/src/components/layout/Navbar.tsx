import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="text-xl font-semibold text-gray-900">
        G
      </div>

      {/* Links */}
      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-black"><Link to="/">Home</Link></li>
        <li className="cursor-pointer hover:text-black"><Link to="/about">About</Link></li>
        <li className="cursor-pointer hover:text-black"><Link to="/pricing">Pricing</Link></li>
        <li className="cursor-pointer hover:text-black"><Link to="/contact">Contact</Link></li>
        <li className="cursor-pointer hover:text-black"><Link to="/chat">Chat</Link></li>
      </ul>

      {/* CTA Button */}
      <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;