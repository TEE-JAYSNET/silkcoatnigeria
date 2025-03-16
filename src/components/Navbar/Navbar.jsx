import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/images/silkcoat_logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-20 z-10 top-0 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-md" : "bg-black/60"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-sm font-bold text-red-500">
          <Link to="/">
            <img src={Logo} alt="" className="w-36" />
          </Link>
        </div>

        {/* Opening Days & Time */}
        <div className="hidden md:block text-white">
          <p>Mon - Fri: 8am - 5:30pm | Sat - 12pm</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-6 absolute md:static bg-black/60 md:bg-transparent w-full md:w-auto top-full left-0 md:top-auto md:left-auto transition-all duration-300 md:space-x-6`}
        >
          {["/", "/about", "/products", "/blog", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={`block md:inline-block text-white hover:text-red-500 transition-all duration-300 p-4 md:p-0 ${
                  location.pathname === path ? "text-red-500" : ""
                }`}
              >
                {["Home", "About", "Products", "Blog", "Contact"][index]}
                <span
                  className={`block md:absolute md:left-0 md:bottom-0 w-full h-0.5  transition-all duration-300 transform ${
                    location.pathname === path ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
