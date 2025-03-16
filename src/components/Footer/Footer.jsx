import Logo from "/images/silkcoat_logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-betwee md:pl-28 pl-10 items-start md:items-center space-y-6 md:space-y-0">
        {/* Left Column */}
        <div className="flex-1 flex flex-col space-y-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-500">
            <img src={Logo} alt="" className="w-40" />
          </div>
          {/* Address & Phone */}
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-red-600 mr-4"></i>
            <p className="pb-3 items-center justify-center ">
              Plot No. 807 Cadastral zone C16, Gidado Idris Way, <br /> Idu
              Industrial Area, FCT-Abuja, Nigeria
            </p>
          </div>
          <p>
            <i className="fas fa-phone-alt text-red-600 mr-4"></i> (+234)
            704-087-4758
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/officialsilkcoatng"
              target="_blank"
              className="rounded-full bg-red-500 p-2 hover:bg-red-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/officialsilkcoatng/ "
              target="_blank"
              className="rounded-full bg-red-500 p-2 hover:bg-red-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px bg-gray-400 h-24"></div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col space-y-4 items-end pr-10 md:pr-32">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-red-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-red-500 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 my-8" />
      <p className="text-center">
        © {currentYear} SILKCOAT NIGERIA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
