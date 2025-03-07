import { FaFacebook, FaInstagram, FaPinterest, FaTiktok, FaYoutube, FaFlipboard } from 'react-icons/fa';
const Footer = () => {
    
  return (
    <footer className="bg-gray-100 py-10 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Newsletter */}
        <div>
          <h2 className="text-2xl px-5 font-bold text-orange-600">allrecipes<span className="text-yellow-500">.</span></h2>
          <button className="mt-4 border border-orange-600 text-orange-600 px-8 py-2 rounded hover:bg-orange-600 hover:text-white transition">
            NEWSLETTERS
          </button>
          <div className="flex space-x-4 mt-4 text-2xl">
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer transition" />
            <FaPinterest className="hover:text-red-600 cursor-pointer transition" />
            <FaTiktok className="hover:text-[#25F4EE] cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
            <FaFlipboard className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Categories</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer transition">Dinners</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Meals</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Ingredients</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Occasions</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Cuisines</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Kitchen Tips</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer transition">About Us</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Careers</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Advertise</li>
              <li className="hover:text-orange-600 cursor-pointer transition">Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-sm text-gray-500">
          <p>Allrecipes is part of the Dotdash Meredith publishing family.</p>
          <div className="mt-5">
            <a href="https://privacy.truste.com/privacy-seal/validation?rid=7c04f997-515d-4179-a53b-1ccbee37bd62">
            <img src="https://privacy-policy.truste.com/privacy-seal/seal?rid=7c04f997-515d-4179-a53b-1ccbee37bd62" alt="Dotdash Meredith" className="w-32" />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





