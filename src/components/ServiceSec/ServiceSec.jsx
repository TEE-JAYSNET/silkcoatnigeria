import HeadingText from "../HeadingText/HeadingText";

const Services = () => {
  const services = [
    {
      title: "Residential Painting",
      description:
        "High-quality painting services for homes, ensuring beautiful and long-lasting finishes.",
      icon: "home",
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting solutions for offices, shops, and other commercial spaces.",
      icon: "fa-solid fa-business-time",
    },
    {
      title: "Industrial Coatings",
      description:
        "Durable and protective coatings for industrial facilities and equipment.",
      icon: "fa-solid fa-industry",
    },
  ];

  return (
    <>
      <section className="py-8 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <HeadingText title={"Our"} subTitle={"Services"} />
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2> */}
          <p className="mb-12">
            We provide a wide range of painting services to meet your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 shadow-lg rounded-lg cardhover"
              >
                <div className="text-red-500 mb-4 cardhover">
                  <i className={`fas fa-${service.icon} text-4xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
