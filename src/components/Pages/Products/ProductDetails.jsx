import { useParams } from "react-router-dom";
import { paintProducts } from "../../../data/paintData";
import DetailsPage from "/images/detailsPage.png";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

// components import
import Back from "../../Back/Back";

const ProductDetails = () => {
  const { id } = useParams();
  const product = paintProducts.find((p) => p.id === parseInt(id));

  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleProductsPage = () => {
    console.log(id);
    navigate(`/products`);
  };

  return (
    <>
      <Back
        title="DETAILS PAGE"
        image={DetailsPage}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 ">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h2>
                <p className="text-lg text-gray-700 mb-6">{product.details}</p>
                <p className="text-base text-gray-600 mb-6">
                  {product.description}
                </p>
                <p className="tex-base text-gray-500 mb-6">
                  {product.application}
                </p>
                <p className="text-base text-gray-600 mb-6">{product.tech}</p>
                <p className="text-base text-gray-600 mb-6">
                  {product.surface}
                </p>
                <p className="text-base text-gray-600 mb-6">
                  {product.appdetails}
                </p>
                <p className="text-base text-gray-600 mb-6">
                  {product.caution}
                </p>
                <p className="text-base text-gray-600 mb-6">{product.store}</p>
                <p className="text-base text-gray-600 mb-6">{product.pack}</p>
                <p className="text-base text-gray-600 mb-6">{product.quali}</p>

                <button
                  onClick={handleProductsPage} // Attach the click event handler here
                  className=" flex items-center mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
                >
                  <BsArrowLeftShort className="w-8 h-8" /> Products Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
