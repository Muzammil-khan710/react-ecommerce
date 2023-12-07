import React from 'react'
import { Card, Layout } from '../../Components'
import { useWishlist } from '../../context/Wishlist-context';
import { Link } from 'react-router-dom';
import './wishlist.css'

const WishlistPage = () => {
  const {
    wishlistState: { wishlistItems },
  } = useWishlist();

  return (
    <Layout>
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
          <h1 className="common-empty-heading">
            Your wishlist is empty ! Please add items from{" "}
            <Link to="/products" className="home-link">
              Products
            </Link>{" "}
          </h1>
        )}
      </section>
    </Layout>
  );
}

export { WishlistPage }