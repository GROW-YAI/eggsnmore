import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div
            className="min-h-[80vh] bg-gradient-to-b from-yellow-50 to-white pt-16"
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column (Text and Button) */}
                    <motion.div
                        className="text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Get Your Wholesale Eggs and More From Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8">
                            EGGS N MORE just got an upgrade! Our Egg Powder and Eggshell
                            Powder are now available in fresh, sleek packaging - same premium quality,
                            now with a better experience!
                        </p>
                        <div className="space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="https://paystack.store/eggs-n-more" rel="noopener noreferrer" className="inline-flex items-center bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors duration-200">
                                    Shop Now
                                    <FaArrowRight className="ml-2" />
                                </a>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Column (Swiper Carousel) */}
                    <motion.div
                        className="rounded-lg overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <motion.img
                                    src="/images/eggPowder1.jpg"
                                    alt="Promotional Flyer 1"
                                    className="w-full h-[450px] object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <motion.img
                                    src="/images/eggPowder2.jpg"
                                    alt="Promotional Flyer 2"
                                    className="w-full h-[450px] object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;

