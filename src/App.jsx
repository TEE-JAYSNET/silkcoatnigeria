import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Home/Hero";
import About from "./components/Pages/About/About";
import Products from "./components/Pages/Products/Products";
import ProductDetails from "./components/Pages/Products/ProductDetails";
import Services from "./components/Pages/Services/Services";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Pages/Blog/Blog";
import Post from "./components/Pages/Blog/Post";
import ClaimForm from "./components/ClaimForm";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
        <ClaimForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
