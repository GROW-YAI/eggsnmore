import { Link } from "react-router";
import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <div className="flex items-center mb-4">
                            <img src="./images/eggsLogo.jpg" alt="" className="h-8 w-auto mr-2 rounded-lg" />
                            <span className="font-bold text-lg">Eggs and More</span>
                        </div>
                        <p>Get your fresh farm eggs and more from us.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to='/about'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Additional Resources</h3>
                        <div className="flex space-x-8 mb-4">
                            <Link>
                                <FaMeta className="w-6 h-6" />
                            </Link>
                            <Link>
                                <FaXTwitter className="w-6 h-6" />
                            </Link>
                            <Link>
                                <FaInstagram className="w-6 h-6" />
                            </Link>
                        </div>
                        <Link
                            to='mailto:info@eggasnmore.com'
                            className="block text-gray-300 hover:text-yellow-500 transition-colors duration-200 mb-2"
                        >
                            info@eggsnmore.com
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
                    <p>All rights reserved. 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;