import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
    <section className="h-12 md:h-32">
      <div className=" grid grid-cols-3 divide-x divide-white mx-auto w-full md:max-w-[700px] shadow-lg bg-red-700 -translate-y-24 md:-translate-y-26 my-4 p-4 md:p-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-white sm-text-lg md:text-3xl">
            <CountUp end={14} duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg text-white">
            Factories
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-white sm-text-lg md:text-3xl">
            <CountUp end={68} duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg text-white">
            Countries
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-white sm-text-lg md:text-3xl">
            <CountUp end={5} duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg text-white">
            Continents
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OverviewCounter;
