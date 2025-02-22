import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="min-h-screen bg-grdient-to-b from-yellow-50 to-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='lg:w-1/2'
                    >
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                            Fresh Eggs & More Delivered to you
                             Whenever, Wherever.
                        </h1>
                        <p className='text-lg text-gray-600 mb-8'>
                            Experience farm-fresh eggs and premium dairy products with our convenient delivery service
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors duration-200'
                            onClick={() => window.location.href = 'https://paystack.store/eggs-and-more'}
                        >
                            Shop Now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='lg:w-1/2 mt-10 lg:mt-0'
                    >
                        <img
                            src="./images/eggsImage.webp"
                            alt="Fresh Eggs"
                            className='rounded-lg shadow-xl' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;