const Back = ({ title, image, description }) => {
  return (
    <>
      <header className="h-80 overflow-hidden border-b-2 sm:content">
        <div className="w-full h-full relative grid items-center bg-black">
          <div className="absolute w-full">
            <img
              src={image}
              className=" opacity-40 w-full object-cover"
              alt="back bg image"
            />
          </div>
          <div className="w-full lg1:w-2/5 relative my-0 mx-auto text-center text-white shadow-black">
            <h1 className="text-4xl lg1:text-8xl font-bold mb-4">{title}</h1>
            {/* <p className="text-white/70">{description}</p> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Back;
