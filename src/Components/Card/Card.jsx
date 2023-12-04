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
import { CardPriceBlock } from "./CardPriceBlock";

const Card = ({ item, changeDirection = false, className = "" , quantityBlock}) => {
  const {
    name,
    originalPrice,
    discountPrice,
    label,
    imageSrc,
    rating,
    description,
    _id,
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

  const handleButtonClick = (data, item, removeFunc, addFunc) => {
    if (user) {
      const isItemInCart = data.some((cartItem) => cartItem.id === item.id);
      isItemInCart ? removeFunc(item._id) : addFunc(item);
    } else {
      navigate("/login");
    }
  };

  const navigateToProduct = () => {
    navigate(`/product/${_id}`)
  }

  return (
    <div
    onClick={() => navigateToProduct()}
      className={`card ${changeDirection ? "h-card-styles" : ""} ${className}`}
    >
      <div className="card-img-wrapper">
        <img
          className={`product-card-img ${changeDirection ? "h-card-img" : ""}`}
          src={imageSrc}
          alt={name}
        />
        {label && <span className="card-label">{label}</span>}
        <span className="card-rating">
          {rating} <IcBaselineStar />{" "}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick(
              wishlistItems,
              item,
              removeFromWishlist,
              addToWishlist
            )
          }}
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

      <div
        className={`card-details ${changeDirection ? "h-card-details" : ""}`}
      >
        <h4 className="card-title">{name}</h4>
        <p className="card-description">{description}</p>
        <CardPriceBlock
          discountPrice={discountPrice}
          originalPrice={originalPrice}
        />
        {quantityBlock}
        <button
          className="card-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick(cartItems, item, removeFromCart, addToCart)
          }
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
