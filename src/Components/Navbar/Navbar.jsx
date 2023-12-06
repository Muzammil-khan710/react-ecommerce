import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth-context";
import { useCart } from "../../context/Cart-context";
import { useWishlist } from "../../context/Wishlist-context";
import {
  ShoppingCartIcon,
  WishlistIcon,
  Login,
  Logout,
} from "../../images/Svg";
import "./Navbar.css";

const Navbar = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const {
    wishlistState: { wishlistItems },
  } = useWishlist();

  const { user, logoutFunc } = useAuth();

  return (
    <nav className="nav-content">
      <Link className="brand-name" to="/">
        MyWatch
      </Link>
      <div className="icon-container">
        <Link className="link-product" to="/products">
          <span className="link-product-title">Products</span>
        </Link>
        <Link className="link-product" to="/cart">
          <span className="link-product-title">Cart</span>
          <div className="link-product-block">

          <ShoppingCartIcon />
          {user && cartItems.length > 0 && (
            <span className="link-product-val">{cartItems.length} </span>
            )}{" "}
            </div>
        </Link>
        <Link className="link-product" to="/wishlist">
          <span className="link-product-title">Wishlist</span>

          <div className="link-product-block">
          <WishlistIcon />
          {user && wishlistItems.length > 0 && (
            <span className="link-product-val">{wishlistItems.length} </span>
          )}{" "}
          </div>
        </Link>

        {user ? (
          <Link className="nav-btn" onClick={logoutFunc} to="/login">
            <span>Logout</span>
            <Login />
          </Link>
        ) : (
          <Link className="nav-btn" to="/login">
            <span>Login</span>
            <Logout />
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
