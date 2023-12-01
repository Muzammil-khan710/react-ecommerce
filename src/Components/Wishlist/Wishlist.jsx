import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/Wishlist-context";
import "./Wishlist.css";
import { Card } from "../Allcomps";

const Wishlist = () => {
  const {
    wishlistState: { wishlistItems },
  } = useWishlist();

  return (
    <>
      <section className="common-card-container">
        {wishlistItems.length > 0 ? (
          <>
            <h1>Your Wishlist</h1>
            <div className="wishlist-wrapper">
              {wishlistItems.map((item) => (
                <Card item={item} changeDirection={true} key={item._id} />
              ))}
            </div>
          </>
        ) : (
          <h1>
            Your wishlist is empty ! Please add items from{" "}
            <Link to="/products" className="home-link">
              Products
            </Link>{" "}
          </h1>
        )}
      </section>
    </>
  );
};

export { Wishlist };
