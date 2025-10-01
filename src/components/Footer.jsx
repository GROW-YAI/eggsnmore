import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { PhoneCall } from 'lucide-react';
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + Location */}
          <div className="font-jakarta">
            <div className="flex items-center mb-4">
              <img
                src="./images/eggsnmore.jpg"
                alt="Eggs and More"
                className="h-12 w-12 mr-2 rounded-lg object-cover"
              />
              <span className="font-bold text-lg">Eggs and More</span>
            </div>

            <a
              href="https://www.google.com/maps?q=Anaji,+Opposite+C.K+Mann+Park"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:underline"
            >
              <FaMapMarkerAlt className="mr-2" />
              <span>Find us at Anaji, Opposite C.K Mann Park.</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="font-jakarta">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Company", "Services", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="font-jakarta">
            <h3 className="font-bold text-lg mb-4">Additional Resources</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Link target="_blank" to='https://facebook.com/people/EGGS-N-MORE/61552244482756/?_rdc=1&_rdr#'>
                <FaFacebook className="w-6 h-6 hover:text-yellow-500 transition-colors duration-200" />
              </Link>
              <Link target="_blank" to='https://x.com/eggs_n_more'>
                <FaXTwitter className="w-6 h-6 hover:text-yellow-500 transition-colors duration-200" />
              </Link>
              <Link target="_blank" to='https://www.instagram.com/eggs_n_more/'>
                <FaInstagram className="w-6 h-6 hover:text-yellow-500 transition-colors duration-200" />
              </Link>
              <Link target="_blank" to='https://www.linkedin.com/company/eggs-n-more/'>
                <FaLinkedin className="w-6 h-6 hover:text-yellow-500 transition-colors duration-200" />
              </Link>
              <Link target="_blank" to='https://www.tiktok.com/@eggsnmore'>
                <FaTiktok className="w-6 h-6 hover:text-yellow-500 transition-colors duration-200" />
              </Link>
            </div>

            <Link
              to='mailto:eggsnmore.gh@gmail.com'
              className="block text-gray-300 hover:text-yellow-500 transition-colors duration-200 mb-5 break-all"
            >
              eggsnmore.gh@gmail.com
            </Link>

            <a href="tel:+233248434328" className="inline-flex items-center flex-wrap">
              <PhoneCall className="mr-2" />
              <span className="break-all">+233 24 843 4328 / +233 50 530 3636</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-jakarta mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eggs'n'More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
