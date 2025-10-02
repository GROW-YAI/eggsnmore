import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const menuItems = [
    { label: "Home", target: "#home" },
    { label: "About", target: "#about" },
    { label: "Company", target: "#company" },
      { label: "Services", target: "#services" }, 
    { label: "Contact", target: "#contact" },
  ];

  // delay before closing mobile menu so native anchor scroll completes without layout jumps
  const CLOSE_DELAY_MS = 180;

  const handleNavClick = (e, target) => {
  
    if (document.querySelector(target)) {
      setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="font-jakarta flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex space-x-2 items-center"
            >
              <img
                src="./images/eggsnmore.jpg"
                alt="logo"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <p className="text-lg font-semibold">Eggs n More</p>
            </a>
          </div>

         
          <div className="hidden md:flex space-x-8 font-jakarta">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden" }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 font-jakarta">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.target}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
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
