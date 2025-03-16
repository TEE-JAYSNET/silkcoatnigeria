import Back from "../../Back/Back";
import ServicesImg from "/images/blog1.png";
import HeadingText from "../../HeadingText/HeadingText";

const Services = () => {
  return (
    <>
      <Back
        title="SERVICES"
        image={ServicesImg}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />
      <div>
        <HeadingText title={"Our"} subTitle={"Services"} />
        <h1>Our Services</h1>
        <p>Learn more about our company and what we do.</p>
      </div>
    </>
  );
};

export default Services;
