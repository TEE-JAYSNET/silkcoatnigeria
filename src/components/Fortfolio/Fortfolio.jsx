const services = [
  {
    title: "Interior Paint & Primers",
    description:
      "Transform your living spaces with colors that breathe life into every room.",
    image: "/images/interior.jpg",
  },
  {
    title: "Exterior Paint & Primers",
    description:
      "Protect and beautify your home's exterior with weather-resistant colors.",
    image: "/images/exterior.jpg",
  },
  {
    title: "Effect Paints",
    description:
      "Create unique, textured finishes that add depth and dimension to your walls.",
    image: "/images/teffect.jpg",
  },
  {
    title: "Silk Plaster",
    description:
      "Bring out the best in your home with our luxurious silk plaster paints.",
    image: "/images/silkplaster.jpg",
  },
  {
    title: "Synthetic Paints",
    description:
      "High-performance synthetic paints for a durable, glossy finish.",
    image: "/images/synthetic.jpg",
  },
  {
    title: "Spray Paints",
    description: "Precision and coverage in every spray for flawless finishes.",
    image: "/images/spray.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden p-6 bg-gray-100 shadow-lg rounded-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2 hover:text-red-500">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
