import { motion } from "framer-motion"
import { Link } from "react-router";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ProductShowCase from "../Products/ProductShowCase";
import { PhoneCall } from "lucide-react";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-jakarta">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Our Products</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We deliver the freshest eggs and egg-based nutritional powder straight to your doorstep.
                            Our commitment to quality ensures you get the best products every time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Innovator Section */}
            <section id="company" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-jakarta">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center gap-12"
                    >
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 ml-0 sm:ml-8 mb-4">About the innovator</h2>
                            <p className="text-lg text-gray-600 ml-0 sm:ml-8 mb-6">
                                Founded by a passionate farmer, Eggs n More bridges the gap between local producers and consumers,
                                ensuring fresh, high quality products reach your table.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="./images/innovatorImage.jpg" alt="Innovator" className="max-w-[70%] mx-auto h-auto rounded-lg shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </section>
            <ProductShowCase />

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-jakarta">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
                        <div className="flex justify-center items-center mb-8">
                            <PhoneCall className="w-6 h-6 text-yellow-500 mr-2" />
                            <span className="text-lg text-gray-600">+233 24 843 432 / +233 50 530 3636</span>
                        </div>
                        <Link
                            to='mailto:eggsnmore.gh@gmail.com'
                            className="text-yellow-500 text-lg hover:text-yellow-600 transition-colors duration-200"
                        >
                            eggsnmore.gh@gmail.com
                        </Link>

                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default LandingPage;