import { useState } from "react";
import faqs from "../../data/faqs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-700 hover:text-red-500 transition duration-300"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-red-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
