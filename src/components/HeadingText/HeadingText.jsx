const HeadingText = ({ title, subTitle }) => {
  return (
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
      {title} <span className="text-red-600">{subTitle}</span>
    </h2>
  );
};

export default HeadingText;
