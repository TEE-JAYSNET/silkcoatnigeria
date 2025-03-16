import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/7040874758"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 text-green-500 text-5xl hover:text-green-600 hover:rotate-[360deg] duration-500"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
