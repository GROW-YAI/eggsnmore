import { Link } from "react-router";
import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";
import { PhoneCall } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="font-jakarta">
                        <div className="flex items-center mb-4">
                            <img src="./images/eggsnmore.jpg" alt="" className="h-15 w-15 mr-2 rounded-lg" />
                            <span className="font-bold text-lg">Eggs and More</span>
                        </div>
                        <p>Find us at Anaji, Opposite C.K Mann Park.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="font-jakarta">
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
                                    to='/company'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/services'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/contact'
                                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Resources */}
                    <div className="font-jakarta">
                        <h3 className="font-bold text-lg mb-4">Additional Resources</h3>
                        <div className="flex space-x-8 mb-4">
                            <Link>
                                <FaMeta className="w-6 h-6" />
                            </Link>
                            <Link>
                                <FaXTwitter className="w-6 h-6" />
                            </Link>
                            <Link target="_blank" to='https://www.instagram.com/eggs_n_more/'>
                                <FaInstagram className="w-6 h-6" />
                            </Link>
                        </div>
                        <Link
                            to='mailto:eggsnmore.gh@gmail.com'
                            className="block text-gray-300 hover:text-yellow-500 transition-colors duration-200 mb-5"
                        >
                            eggsnmore.gh@gmail.com
                        </Link>
                        <p className="inline-flex">
                            <PhoneCall /> <span className="ml-3 mr-3">+233 24 843 4328 / +233 50 530 3636</span>
                        </p>
                    </div>
                </div>
                <div className="font-jakarta mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Eggs'n'More. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;