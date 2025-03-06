import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#734060] p-4 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">YUM RECIPE</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/saved" className="hover:text-gray-300">Saved Recipes</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 mt-4 text-center">
          <Link to="/" className="block py-2 hover:bg-[#9333]">Home</Link>
          <Link to="/about" className="block py-2 hover:bg-[#9333]">About</Link>
          <Link to="/saved" className="block py-2 hover:bg-[#9333]">Saved Recipes</Link>
          <Link to="/login" className="block py-2 hover:bg-[#9333]">Login</Link>
          <Link to="/register" className="block py-2 hover:bg-[#9333]">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
