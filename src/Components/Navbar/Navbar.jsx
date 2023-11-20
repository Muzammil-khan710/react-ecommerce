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
          <span>Products</span>
        </Link>
        <Link className="link-product" to="/cart">
          <span>Cart</span>
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="list-badge">{cartItems.length} </span>
          )}{" "}
        </Link>
        <Link className="link-product" to="/wishlist">
          <span>Wishlist</span>
          <WishlistIcon />
          {wishlistItems.length > 0 && (
            <span className="list-badge">{wishlistItems.length} </span>
          )}{" "}
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
