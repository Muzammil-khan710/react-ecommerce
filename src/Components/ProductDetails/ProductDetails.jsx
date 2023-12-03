import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/Product-context";
import { CardPriceBlock } from "../index";
import "./ProductDetails.css";
import { useCart } from "../../context/Cart-context";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/Wishlist-context";
import { WishlistIcon, WishlistIconTwo } from "../../images/Svg";

const ProductDetails = ({ productId }) => {
  const { products } = useProducts();
  const {
    addToCart,
    cartState: { cartItems },
  } = useCart();

  const { addToWishlist, removeFromWishlist, wishlistState: { wishlistItems } } =  useWishlist()

  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    setSingleProduct(product);
  }, [products, productId]);

  const navigate = useNavigate();
  const isItemInCart = cartItems.find(
    (cartItem) => cartItem.id === singleProduct.id
  );
  const isItemInWishlist = wishlistItems.find(
    (cartItem) => cartItem.id === singleProduct.id
  );
  const cartBtnHandler = () => {
    isItemInCart ? navigate("/cart") : addToCart(singleProduct);
  };

  const wishlistBtnHandler = () => {
    isItemInWishlist ? removeFromWishlist(singleProduct._id) : addToWishlist(singleProduct)
  }
 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [singleProduct]);

  return (
    <section className="product-details-container">
      {singleProduct ? (
        <div className="product-details-wrapper">
          <div className="product-details-img-wrapper">
            <img
              className="product-details-img"
              src={singleProduct.imageSrc}
              alt={singleProduct.name}
            />
            <button
              onClick={() => wishlistBtnHandler()}
              className={`card-wishlist-btn  ${
                wishlistItems.find((cartItem) => cartItem.id === singleProduct.id)
                  ? "color-red"
                  : ""
              } `}
            >
              {wishlistItems.find((cartItem) => cartItem.id === singleProduct.id) ? (
                <WishlistIcon />
              ) : (
                <WishlistIconTwo />
              )}
            </button>
          </div>
          <div className="product-details-content">
            <h2 className="color-black">{singleProduct.name}</h2>
            <p className="color-black">{singleProduct.description}</p>
            <ul>
              {singleProduct.features.map((item, i) => (
                <li className="product-details-list" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <CardPriceBlock
              className="font-bold"
              discountPrice={singleProduct.discountPrice}
              originalPrice={singleProduct.originalPrice}
            />
            <div>
              {singleProduct.fastDelivery ? (
                <span className="color-green font-bold">
                  Item eligible for fast delivery
                </span>
              ) : (
                <span className="color-red font-bold">
                  This item is not eligible for fast delivery
                </span>
              )}
            </div>
            <button
              className="product-details-btn"
              onClick={() => cartBtnHandler()}
            >
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
