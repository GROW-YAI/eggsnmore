import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router"; 

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
        
          <motion.div
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-jakarta text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Pure, Fresh, and Full of Goodness — That’s Eggs N More
            </h1>
            <p className="font-jakarta text-lg sm:text-xl text-gray-600 mb-8">
              From farm to table, Eggs n More turns simple eggs into wholesome
              goodness. We care about quality, sustainability, and the people we
              serve — one egg at a time.
            </p>
            <div className="space-x-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/all-products"
                  className="font-jakarta inline-flex items-center bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors duration-200"
                >
                  Shop Now
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.button>
            </div>
          </motion.div>

          {/* ===== Right Column (Image Carousel) ===== */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-lg bg-white p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              <SwiperSlide>
                <motion.img
                  src="/images/egg yolk powder.jpg"
                  alt="Egg Powder Promo 1"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <motion.img
                  src="/images/egg shell powder.jpg"
                  alt="Egg Powder Promo 2"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <motion.img
                  src="/images/egg white powder.jpg"
                  alt="Egg White Powder"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <motion.img
                  src="/images/whole egg powder.jpg"
                  alt="Whole Egg Powder"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <motion.img
                  src="/images/egg-hero.jpg"
                  alt="Fresh Eggs"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-md transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
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
