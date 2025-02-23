import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "About", "Company", "Services", "Contact"];

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="./images/eggsnmore.jpg" alt="logo" className="h-13 w-13 rounded-xl" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={`/${item.toLocaleLowerCase()}`}
                                className="text-gray-700 hover-text-yellow=500 transition-colors duration-200 font-medium">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-yellow-500 focus:outline-none">
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
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/${item.toLocaleLowerCase()}`}
                                    className="block px-3 py-2 text-gray-700 hover:text-yellow-500 hover-bg-gray-50 rounded-md transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
