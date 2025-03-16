import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Mr Marcus Chuks",
    title: "CEO Sure Source",
    image: "/images/chucks.jpeg",
    testimonial:
      "The wipeability and washability of silkosil satin and silicone emulsion paint is second to none in the Nigerian market, pricing is awesomely friendly for a product with such premium quality. Partnering with Silkcoat Paint has been immensely rewarding.",
    rating: 4,
  },
  {
    id: 2,
    name: "Alhaji Abas Bala",
    title: "Distributor",
    image: "/images/Abas.jpeg",
    testimonial:
      "Recently of my customer said that bought SILKCOAT PAINTS for both interior and exterior walls, the variety of shades available made it easy to find the perfect colors to match our vision. The paint applies smoothly and the durability is incredible. Even after months the walls still look freshly painted. We've received so many compliments from friends and family, and we're proud to say we chose the best!—",
    rating: 5,
  },
  {
    id: 3,
    name: "Engr Nwanze Chigozie",
    title: "Silkcoat Distributor",
    image: "/images/Nwanze.jpeg",
    testimonial:
      "As a contractor, I've tried many different paint brands over the years, but SILKCOAT PAINT is by far the best. The consistency, ease of application, and quick drying time make it my go-to choice for every project. My clients are always impressed with the quality and finish, which keeps them coming back for more. It's not just paint; it's an investment in quality and durability.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-300 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-red-500"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.title}</p>
                <p className="mt-4 text-gray-700">{testimonial.testimonial}</p>
                <div className="mt-4 flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
