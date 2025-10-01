import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Company", "Services", "Contact"];

  // helper function for smooth scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-jakarta flex items-center">
            <a href="#" className="inline-flex space-x-2 items-center">
              <img
                src="./images/eggsnmore.jpg"
                alt="logo"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <p className="text-lg font-semibold">Eggs n More</p>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-jakarta">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 font-jakarta">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
