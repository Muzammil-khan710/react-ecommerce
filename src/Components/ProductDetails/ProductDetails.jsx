import React, { useEffect } from "react";
import { useProducts } from "../../context/Product-context";
import { CardPriceBlock } from "../index";
import "./ProductDetails.css";
import { useCart } from "../../context/Cart-context";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ productId }) => {
  const { products } = useProducts();
  const {
    addToCart,
    cartState: { cartItems },
  } = useCart();
  const singleProduct = products.filter((item) => item._id === productId);
  const data = singleProduct[0];
  const navigate = useNavigate();
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === data.id);
  const btnHandler = () => {
    isItemInCart ? navigate("/cart") : addToCart(data);
  };

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }, [singleProduct])

  return (
    <section className="product-details-container">
      {data ? (
        <div className="product-details-wrapper">
          <div className="product-details-img-wrapper">
            <img
              className="product-details-img"
              src={data.imageSrc}
              alt={data.name}
            />
          </div>
          <div className="product-details-content">
            <h2 className="color-black">{data.name}</h2>
            <p className="color-black">{data.description}</p>
            <ul>
              {data.features.map((item, i) => (
                <li className="product-details-list" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <CardPriceBlock
            className="font-bold"
              discountPrice={data.discountPrice}
              originalPrice={data.originalPrice}
            />
            <div>
              {data.fastDelivery ? (
                <span className="color-green font-bold">Item eligible for fast delivery</span>
              ) : (
                <span className="color-red font-bold">This item is not eligible for fast delivery</span>
              )}
            </div>
            <button className="product-details-btn" onClick={() => btnHandler()}>
              {isItemInCart ? "Go to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </section>
  );
};

export default ProductDetails;
