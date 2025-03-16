import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";

// import components.............
import WhatsAppButton from "../../WhatsApp/WhatsAppButton";

// import Banner from "../../Banner/Banner";
import ServiceSec from "../../ServiceSec/ServiceSec";
import Fortfolio from "../../Fortfolio/Fortfolio";

// import Test from "../../Test";
import Testimonials from "../../Testimonials/Testimonials";
import FAQ from "../../FAQ/FAQ";
import RecentPosts from "../../Pages/Blog/RecentPosts";

// Import local images
import slide1 from "/images/marm.png";
import slide2 from "/images/2travert.png";
import slide3 from "/images/3pearly.png";
import slide4 from "/images/4palace.png";
import slide6 from "/images/6pearl.png";

// import components
import OverviewCounter from "../../OverviewCounter/OverviewCounter";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomClass, setZoomClass] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setZoomClass(""),
    afterChange: (index) => {
      setCurrentSlide(index);
      setZoomClass("zoom");
    },
  };

  const slides = [
    {
      image: slide1,
      title: "Marmarito",
      subtitle: "Marble parterned structure, with glass like surface.",
    },
    {
      image: slide2,
      title: "Travertino",
      subtitle: "With its stone-like appearance, modern & vibrant manner.",
    },
    {
      image: slide3,
      title: "Pearly",
      subtitle: "Interior covering with pearl texture, & line/wave patterns.",
    },
    {
      image: slide4,
      title: "Palace",
      subtitle:
        "Offers appearance that is both shiny and matte, with unique patterns.",
    },
    {
      image: slide6,
      title: "Pearl",
      subtitle: "Line and wave patterns with an interior wall pearl texture.",
    },
  ];

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Slider {...settings} className="h-full custom-dots">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative h-full ${
                index === currentSlide ? zoomClass : ""
              }`}
            >
              <div
                className={`h-screen bg-cover bg-center flex items-center transition-transform duration-700 ease-in-out`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 opacity-50"></div>
                <div className="relative text-right text-white p-6 pr-4 md:mr-12 max-w-screen-md mx-auto bg-black/50">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2 pr-8">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg italic pr-8">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Social Media and Phone Number Section */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 space-y-6">
          {/* Social Media Icons */}
          <div className="group">
            <a
              href="https://web.facebook.com/officialsilkcoatng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white"
            >
              <div className="p-3 bg-red-600 rounded-full group-hover:bg-red-800 transition-colors duration-300">
                <FaFacebook className="text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                Facebook
              </span>
            </a>
          </div>

          <div className="group">
            <a
              href="https://www.instagram.com/officialsilkcoatng/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white"
            >
              <div className="p-3 bg-red-600 rounded-full group-hover:bg-red-800 transition-colors duration-300">
                <FaInstagram className="text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                Instagram
              </span>
            </a>
          </div>
          {/* Phone Number */}
          <div className="group">
            <a href="tel:+1234567890" className="flex items-center space-x-2">
              <div className="bg-red-600 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <span className="ml-3 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                (+234) 704-087-4758
              </span>
            </a>
          </div>
        </div>
      </section>
      <OverviewCounter />
      <ServiceSec />
      <Fortfolio />
      <Testimonials />
      <FAQ />
      <RecentPosts />
      <WhatsAppButton />
    </>
  );
};

export default Hero;
