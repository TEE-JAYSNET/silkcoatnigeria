import { motion } from "framer-motion";
// import { FaPaintBrush, FaBuilding, FaGlobe, FaAward } from "react-icons/fa";
import HeadingText from "../../HeadingText/HeadingText";
import WhatsAppButton from "../../WhatsApp/WhatsAppButton";

const About = () => {
  return (
    <>
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

        <section
          id="company-overview"
          className="container mx-auto px-4 py-12 space-y-12"
        >
          {/* Mission & Vision Section */}

          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6 p-8 flex-col">
              <h2 className="text-3xl font-bold text-gray-800">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600">
                Our mission is to provide superior quality paints that enhance
                the beauty and durability of every surface they touch. We are
                committed to sustainability, innovation, and customer
                satisfaction.
              </p>
              <p className="text-gray-600">
                Our vision is to become the world's most trusted paint brand,
                known for quality, innovation, and customer satisfaction.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/polita.png"
                alt="Mission and Vision"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Chairman's Message Section */}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Text Section */}
            <div className="flex-1 space-y-6 p-8">
              <h2 className="text-3xl font-bold text-gray-800">
                A Message from Our Chairman
              </h2>
              <p className="text-gray-600">
                Welcome to our company, where our commitment to quality and
                innovation has been the cornerstone of our success. As we
                continue to expand our global footprint, we remain dedicated to
                delivering exceptional products that meet the highest standards.
              </p>
              <p className="text-gray-600">
                We believe in the power of paint to transform spaces and bring
                our customers’ visions to life. Thank you for being a part of
                our journey.
              </p>
              <p className="text-black font-bold uppercase text-2xl">
                Mr. Tevfik Demirel
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="/images/chair.jpg"
                alt="Chairman"
                className="w-86 h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Journey Section */}
          <div className="space-y-8 mx-auto px-4 py-16">
            <HeadingText title={"Our"} subTitle={"Journey"} />
            {/* <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Journey
          </h2> */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute md:left-24 left-20 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* Journey Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0"
                >
                  {" "}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl">
                    <i className="fas fa-calendar"></i>{" "}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800 ml-6">
                    Founded
                  </h3>
                  <p className="text-gray-600 ml-6 ">
                    SILKCOAT NIGERIA was founded in 2016 with a vision to
                    revolutionize the paint industry by delivering innovative
                    and eco-friendly solutions.
                  </p>
                </motion.div>
              </div>
              {/* Journey Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl">
                    <i className="fas fa-building"></i>{" "}
                    {/* Replace with the appropriate icon */}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800 ml-6">
                    First Factory Opened in 1993
                  </h3>
                  <p className="text-gray-600 ml-6">
                    We opened our first factory, marking the beginning of our
                    large-scale production capabilities.
                  </p>
                </motion.div>
              </div>
              {/* Journey Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl">
                    <i className="fas fa-globe"></i>{" "}
                    {/* Replace with the appropriate icon */}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800 ml-6">
                    Global Expansion
                  </h3>
                  <p className="text-gray-600 ml-6">
                    We expanded our reach to international markets, establishing
                    a presence globally, opening 14 factories in 68 countries
                    across 5 continents.
                  </p>
                </motion.div>
              </div>
              {/* Journey Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white text-2xl">
                    <i className="fas fa-award"></i>{" "}
                    {/* Replace with the appropriate icon */}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800 ml-6">
                    Industry Awards in 2020
                  </h3>
                  <p className="text-gray-600 ml-6">
                    We received several prestigious awards for our innovation
                    and sustainability efforts in the paint industry.
                  </p>
                </motion.div>
              </div>
              {/* Add more journey items as needed */}
            </div>
          </div>
        </section>
      </div>
      <WhatsAppButton />
    </>
  );
};

export default About;
