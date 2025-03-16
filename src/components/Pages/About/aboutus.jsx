import { motion } from "framer-motion";
import { FaPaintBrush, FaBuilding, FaGlobe, FaAward } from "react-icons/fa";
import HeadingText from "../../HeadingText/HeadingText";

const About = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/AboutImg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-2xl mb-8">
            Crafting Quality Paints for Over 20 Years
          </p>
          <a
            href="#company-overview"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="py-20 bg-white">
        <div className="container mx-auto px-8 flex  md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 ">
          {/* Mission & Vision */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 mb-4">
              Our mission is to provide high-quality, innovative, and
              sustainable paints that transform spaces and inspire creativity.
            </p>
            <p className="text-gray-600">
              Our vision is to be the leading global provider of eco-friendly
              and cutting-edge painting solutions.
            </p>
          </motion.div>

          {/* Circular Company Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/polita.png"
              alt="Company"
              className="w-full h-auto rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Chairman's Speech Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Chairman's Image */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/chair.jpg"
              alt="Chairman"
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Chairman's Speech */}
          <motion.div
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              A Message from Our Chairman
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to our company, where our commitment to quality and
              innovation has been the cornerstone of our success. As we continue
              to expand our global footprint, we remain dedicated to delivering
              exceptional products that meet the highest standards.
            </p>
            <p className="text-gray-600">
              We believe in the power of paint to transform spaces and bring our
              customers’ visions to life. Thank you for being a part of our
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <HeadingText title={"Our"} subTitle={"Journey"} />
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Journey
          </h2> */}

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-24 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg text-white">
                  <FaPaintBrush size={24} />
                </div>
                <div className="ml-6 md:ml-10 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Founded in 2000
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our company was founded with a vision to revolutionize the
                    paint industry by delivering innovative and eco-friendly
                    solutions.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg text-white">
                  <FaBuilding size={24} />
                </div>
                <div className="ml-6 md:ml-10 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    First Factory Opened in 2005
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We opened our first factory, marking the beginning of our
                    large-scale production capabilities.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg text-white">
                  <FaGlobe size={24} />
                </div>
                <div className="ml-6 md:ml-10 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Global Expansion in 2010
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We expanded our reach to international markets, establishing
                    a presence in multiple countries across the globe.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 4 */}
              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg text-white">
                  <FaAward size={24} />
                </div>
                <div className="ml-6 md:ml-10 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Industry Awards in 2020
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We received several prestigious awards for our innovation
                    and sustainability efforts in the paint industry.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
