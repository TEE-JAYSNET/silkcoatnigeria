import { useEffect, useState } from "react";

const Banner = () => {
  const [factories, setFactories] = useState(0);
  const [countries, setCountries] = useState(0);
  const [continents, setContinents] = useState(0);

  useEffect(() => {
    const countUp = (target, setState) => {
      let count = 0;
      const speed = target / 100;
      const increment = () => {
        if (count < target) {
          count += speed;
          if (count > target) count = target;
          setState(Math.ceil(count));
          requestAnimationFrame(increment);
        }
      };
      increment();
    };

    countUp(14, setFactories);
    countUp(68, setCountries);
    countUp(5, setContinents);
  }, []);

  return (
    <section className="relative py-16 bg-banner text-gray-800">
      <div className="absolute inset-0 bg-black opacity-50 custom-banner"></div>
      <div className="relative container mx-auto px-6 text-center custom-banner">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white px-4 py-2">
          Our Global Presence
        </h2>
        <p className="mb-12 text-white px-4 py-2">
          Proudly serving across the globe with our state-of-the-art facilities
          and distribution network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-transparent shadow-lg rounded-lg border-4 border-white line">
            <h3 className="text-5xl font-bold text-white px-4 py-2">
              {factories}
            </h3>
            <p className="mt-4 text-white px-4 py-2">Factories</p>
          </div>
          <div className="p-6 bg-transparent shadow-lg rounded-lg border-4 border-white line">
            <h3 className="text-5xl font-bold text-white px-4 py-2">
              {countries}
            </h3>
            <p className="mt-4 text-white px-4 py-2">Countries</p>
          </div>
          <div className="p-6 bg-transparent shadow-lg rounded-lg border-4 border-white line">
            <h3 className="text-5xl font-bold text-white px-4 py-2">
              {continents}
            </h3>
            <p className="mt-4 text-white px-4 py-2">Continents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
