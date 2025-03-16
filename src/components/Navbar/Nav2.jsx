import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/images/silkcoat_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Placeholder for active page tracking, replace with actual logic or routing
  const activePage = "Home";

  return (
    <nav
      className={`fixed w-full h-20 z-10 top-0 p-4transition-colors duration-300 ${
        isScrolled ? "bg-black/60 shadow-md" : "bg-black/50"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src={Logo} alt="PaintCompany Logo" className="w-32 mr-2" />
        </div>

        {/* Responsive menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Additional Info */}
        <div
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block mt-4" : "hidden"
          }`}
        >
          <p className="text-sm text-white font-titleFonts">
            🕒 Mon-Fri: 8 AM - 5:30 PM{" "}
            <span className=" text-sm text-white">| Sat: 12 PM</span>
          </p>
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`block py-2 md:py-0 ${
                activePage === "Home" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block py-2 md:py-0 ${
                activePage === "About" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`block py-2 md:py-0 ${
                activePage === "Products" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`block py-2 md:py-0 ${
                activePage === "Products" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block py-2 md:py-0 ${
                activePage === "Contact" ? "text-red-600" : "text-white"
              } hover:text-red-500 transition-colors duration-300 text-shadow`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
