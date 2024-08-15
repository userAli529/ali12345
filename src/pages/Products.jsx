import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/AppContext";
import Header from "../components/header/Header";
import Filters from "../components/filters/Filters";
import "../styles/Products.css";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const context = useContext(DataContext);
  const { products } = context;
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const onProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Filters />
      <div className="overlay">
        <h1>All products</h1>
      </div>
      <div className="products-container">
        <div className="products-cards">
          {products.map((el) => (
            <div key={el.id} onClick={() => onProductClick(el.id)}>
              <img src={el.image} alt={el.title} />
              <h2>{el.title}</h2>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
        <button className="prod-btn">View collection</button>
      </div>
      <Footer />
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Products;
