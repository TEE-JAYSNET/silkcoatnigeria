import { useState } from "react";
import { paintCategories, paintProducts } from "../../../data/paintData";
import ProductCard from "../Products/ProductCard";
import { motion } from "framer-motion";
import ProductsImg from "/images/productsImg2.jpg";
import Back from "../../Back/Back";
import HeadingText from "../../HeadingText/HeadingText";
import WhatsAppButton from "../../WhatsApp/WhatsAppButton";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? paintProducts
      : paintProducts.filter((product) => product.category === activeCategory);

  return (
    <>
      <Back
        title="PRODUCTS"
        image={ProductsImg}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />
      <div className="bg-gray-100 py-16">
        <HeadingText title={"Our"} subTitle={"Products"} />
        <div className="container mx-auto px-6 py-24">
          {/* Categories Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {paintCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-800"
                } hover:bg-red-500 hover:text-white transition-colors duration-300`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {" "}
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  onDetailsClick={() =>
                    alert(`More details about ${product.name}`)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Products;
