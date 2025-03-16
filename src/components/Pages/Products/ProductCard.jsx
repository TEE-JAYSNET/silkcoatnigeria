import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, name }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleDetailsClick = () => {
    console.log(id);
    navigate(`/products/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-white items-center justify-center">
        <img src={image} alt={name} className="w-full h-70 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <button
          onClick={handleDetailsClick} // Attach the click event handler here
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
