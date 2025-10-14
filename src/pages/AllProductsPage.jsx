import { motion } from "framer-motion";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Whole Egg Powder 25g",
    description: "Premium whole egg powder for baking and cooking.",
    image: "/images/whole egg powder.jpg",
    link: "https://paystack.com/buy/25kg-whole-egg-powder-jjeods",
  },
  {
    id: 2,
    name: "Whole Egg Powder 100g",
    description: "Premium whole egg powder for baking and cooking.",
    image: "/images/whole egg powder.jpg",
    link: "https://paystack.com/buy/100g-whole-egg-powder-yjeplh",
  },
  {
    id: 3,
    name: "Whole Egg Powder 1kg",
    description: "Premium whole egg powder for baking and cooking.",
    image: "/images/whole egg powder.jpg",
    link: "https://paystack.com/buy/1kg-whole-egg-powder-vkwfkl",
  },
  {
    id: 4,
    name: "Egg White Powder 25g",
    description:
      "Pure protein powder, great for fitness supplements, desserts and foaming applications.",
    image: "/images/egg white powder.jpg",
    link: "https://paystack.com/buy/25g-egg-white-powder-wgxovs",
  },
  {
    id: 5,
    name: "Egg White Powder 100g",
    description:
      "Pure protein powder, great for fitness supplements, desserts and foaming applications.",
    image: "/images/egg white powder.jpg",
    link: "https://paystack.com/buy/100g-egg-white-powder-tlyzje",
  },
  {
    id: 6,
    name: "Egg White Powder 1kg",
    description:
      "Pure protein powder, great for fitness supplements, desserts and foaming applications.",
    image: "/images/egg white powder.jpg",
    link: "https://paystack.com/buy/1kg-egg-white-powder-wurlgl",
  },
  {
    id: 7,
    name: "Egg Yolk Powder 25g",
    description:
      "Rich and creamy – perfect for emulsions, sauces, mayonnaise and cosmetics.",
    image: "/images/egg yolk powder.jpg",
    link: "https://paystack.com/buy/25g-egg-yolk-powder-bunxso",
  },
  {
    id: 8,
    name: "Egg Yolk Powder 100g",
    description:
      "Rich and creamy – perfect for emulsions, sauces, mayonnaise and cosmetics.",
    image: "/images/egg yolk powder.jpg",
    link: "https://paystack.com/buy/100g-egg-yolk-powder-nmdean",
  },
  {
    id: 9,
    name: "Egg Yolk Powder 1kg",
    description:
      "Rich and creamy – perfect for emulsions, sauces, mayonnaise and cosmetics.",
    image: "/images/egg yolk powder.jpg",
    link: "https://paystack.com/buy/1kg-egg-yolk-powder-aebjrx",
  },
  {
    id: 10,
    name: "EggShell Powder 50g",
    description:
      "Rich in essential minerals, our eggshell powder supports health, beauty, and sustainability — perfect for soil, skincare, and more.",
    image: "/images/egg shell powder.jpg",
    link: "https://paystack.com/buy/50kg-egg-shell-powder-omumeq",
  },
  {
    id: 11,
    name: "EggShell Powder 400g",
    description:
      "Rich in essential minerals, our eggshell powder supports health, beauty, and sustainability — perfect for soil, skincare, and more.",
    image: "/images/egg shell powder.jpg",
    link: "https://paystack.com/buy/400g-egg-shell-powder-kzesza",
  },
  {
    id: 12,
    name: "EggShell Powder 1kg",
    description:
      "Rich in essential minerals, our eggshell powder supports health, beauty, and sustainability — perfect for soil, skincare, and more.",
    image: "/images/egg shell powder.jpg",
    link: "https://paystack.com/buy/1kg-egg-shell-powder-lugsyf",
  },
  {
    id: 13,
    name: "Fresh Farm Eggs",
    description:
      "Freshly collected farm eggs, perfect for your daily meals and baking.",
    image: "/images/eggs crate.jpg",
    link: "https://paystack.com/buy/fresh-fresh-eggs-enfqki",
  },
  {
    id: 14,
    name: "Fresh Farm Eggs - Big Size",
    description:
      "Big-size farm eggs, rich in nutrients and ideal for families.",
    image: "/images/eggs crate.jpg",
    link: "https://paystack.com/buy/fresh-farm-eggs--big-pnuerh",
  },
];

const AllProducts = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 font-jakarta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            All Products
          </motion.h2>

          <Link
            to="/"
            className="bg-yellow-500 text-white px-5 py-2 rounded-full font-jakarta hover:bg-yellow-600 transition duration-200"
          >
            Return to Home
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 font-jakarta">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 mb-4 font-jakarta">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-white font-jakarta px-5 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-200"
                >
                  Buy Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
