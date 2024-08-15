import React, { useContext } from "react";
import Header from "../components/header/Header";
import Features from "../components/features/Features";
import SignUp from "../components/signUp/SignUp";
import Footer from "../components/footer/Footer";
import NewCeramics from "../components/newCeramics/NewCeramics";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/AppContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const context = useContext(DataContext);
  const { addToCart } = context;
  const product = context.products.find((p) => p.id === id);

  return (
    <div>
      <Header />
      <div className="detail">
        <img src={product.image} alt={product.title} />
        <div className="description">
          <div>
            <h1>{product.title}</h1>
            <h4>{product.price}</h4>
          </div>
          <div>
            <h6>Description</h6>
            <p>{product.description}</p>
          </div>
          <h6>Dimensions</h6>
          <div className="dimensions">
            <p>
              Heigth <br /> {product.height}
            </p>
            <p>
              Width <br /> {product.width}
            </p>
            <p>
              Depth <br /> {product.depth}
            </p>
          </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
      <NewCeramics />
      <Features />
      <SignUp />
      <Footer />
    </div>
  );
};

export default ProductDetail;
