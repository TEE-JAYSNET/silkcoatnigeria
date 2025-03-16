import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Back from "../../Back/Back";
import HeadingText from "../../HeadingText/HeadingText";
import ContactImg from "/images/contact1.jpg";
import WhatsAppButton from "../../WhatsApp/WhatsAppButton";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then(
        (result) => {
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          alert("An error occurred, please try again later.");
        }
      );
  };

  return (
    <>
      <Back
        title="CONTACT US"
        image={ContactImg}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <HeadingText title={"Get in"} subTitle={"Touch"} />
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden mt-14"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Details Section */}
              <div className="p-8 bg-red-100">
                {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Us
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Get in Touch
                </h3> */}
                <p className="text-black mb-6">
                  We'd love to hear from you! Whether you have a question about
                  our products, pricing, or anything else, our team is ready to
                  answer all your questions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone-alt text-red-600 mr-4"></i>
                    <p className="text-gray-600">+234 704-087-4758</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-red-600 mr-4"></i>
                    <p className="text-gray-600">info@silkcoatnigeria.com</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-red-600 mr-4"></i>
                    <p className="text-gray-600">
                      Plot No. 807 cadastrial Zone C16, Gidado Idris Way, Idu
                      Indutrial Area, FCT-Abuja Nigeria.
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">
                  Our Office Hours
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <span className="font-medium">Monday - Friday:</span> 8:00
                    AM - 5:30 PM
                  </li>
                  <li>
                    <span className="font-medium">Saturday:</span> 8:00 AM -
                    12:00 PM
                  </li>
                  <li>
                    <span className="font-medium">Sunday:</span> Closed
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://web.facebook.com/officialsilkcoatng"
                    target="_blank"
                    className="text-gray-600 hover:text-red-600 transition"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/officialsilkcoatng/ "
                    target="_blank"
                    className="text-gray-600 hover:text-red-600 transition"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="p-8">
                {/* Image Above Form */}
                <div className="mb-6">
                  <img
                    src="/images/contact1.png"
                    alt="Contact Us"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`p-4 border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`p-4 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <textarea
                    placeholder="Your Message"
                    className={`w-full mt-6 p-4 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600`}
                    rows="4"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Contact;
