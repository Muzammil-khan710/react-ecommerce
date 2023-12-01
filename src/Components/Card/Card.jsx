import {
  IcBaselineStar,
  WishlistIcon,
  WishlistIconTwo,
} from "../../images/Svg";
import { useCart } from "../../context/Cart-context";
import { useWishlist } from "../../context/Wishlist-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth-context";
import "./Card.css";

const Card = ({ item, changeDirection=false, className=''}) => {
  const {
    name,
    originalPrice,
    discountPrice,
    label,
    imageSrc,
    rating,
    description,
  } = item;
  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    cartState: { cartItems },
    addToCart,
    removeFromCart,
  } = useCart();

  const {
    wishlistState: { wishlistItems },
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const wishlistToggler = (item) => {
    addToWishlist(item);
    removeFromCart(item._id);
  };

  const cartToggler = (item) => {
    addToCart(item);
    removeFromWishlist(item._id);
  };

  const handleButtonClick = (data, item, removeFunc, toggleFunc) => {
    if (user) {
      const isItemInCart = data.some((cartItem) => cartItem.id === item.id);
      isItemInCart ? removeFunc(item._id) : toggleFunc(item);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={`card ${changeDirection ? 'h-card-styles' : ''} ${className}`}>
      <div className="card-img-wrapper">
        <img className={`product-card-img ${changeDirection ? 'h-card-img' : ''}`} src={imageSrc} alt={name} />
        {label && <span className="card-label">{label}</span>}
        <span className="card-rating">
          {rating} <IcBaselineStar />{" "}
        </span>
        <button
          onClick={() =>
            handleButtonClick(
              wishlistItems,
              item,
              removeFromWishlist,
              wishlistToggler
            )
          }
          className={`card-wishlist-btn  ${
            wishlistItems.find((cartItem) => cartItem.id === item.id)
              ? "color-red"
              : ""
          } `}
        >
          {wishlistItems.find((cartItem) => cartItem.id === item.id) ? (
            <WishlistIcon />
          ) : (
            <WishlistIconTwo />
          )}
        </button>
      </div>

      <div className={`card-details ${changeDirection ? 'h-card-details' : ''}`}>
        <h4 className="card-title">{name}</h4>
        <p className="card-description">{description}</p>
        <div className="price-wrapper">
          <span className="discount-price">₹{discountPrice}</span>
          <span className="original-price"> ₹{originalPrice}</span>
          <span className="offer-percentage">
            {Math.round(
              ((originalPrice - discountPrice) / originalPrice) * 100
            )}
            % off
          </span>
        </div>

          <button
            className="card-btn"
            onClick={() =>
              handleButtonClick(cartItems, item, removeFromCart, cartToggler)
            }
          >
            {cartItems.find((cartItem) => cartItem.id === item.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
      </div>
    </div>
  );
};

export { Card };
