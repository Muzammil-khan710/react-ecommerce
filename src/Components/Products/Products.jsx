import "./Product.css";
import React, { useEffect, useState } from 'react'
import { IcBaselineStar } from '../../images/Svg';
import { useCart } from '../../context/Cart-context';
import { useWishlist } from '../../context/Wishlist-context';
import axios from 'axios';

const Products = () => {
  
  const { cartState: {cartItems}, addToCart, removeFromCart } =  useCart()

  const { wishlistState: {wishlistItems}, addToWishlist, removeFromWishlist } = useWishlist();

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data.products)
    })()
  }, [])

  return (
    <>
    <h2>All products</h2>
    <div className='product-page-content'>

        <div className="left-container">
          <h2>Filters</h2>

          <div className="checkbox-container">
            <span><input className='category-input' type="radio" />Price: High to low </span>
            <span><input className='category-input' type="radio" />Price: Low to high</span>         

          <h3>By category</h3>
            <span><input className='category-input' type="checkbox" />Analog</span>
            <span><input className='category-input' type="checkbox" />Smart</span>
            <span><input className='category-input' type="checkbox" />Automatic</span>
            <span><input className='category-input' type="checkbox" />Chronograph</span>
            </div>
        </div>

        <div className="card-container">
          {products.map((item) => {
            const {
              id,
              name,
              originalPrice,
              hasOffer,
              hasDiscount,
              discountPrice,
              badgeMessage,
              imageSrc,
              inStock,
              rating,
            } = item;
            return (
              <div className="card" key={id}>
                <div className="card-picture">
                  <img className="card-img" src={imageSrc} alt={name} />
                  {hasOffer && (
                    <span className="card-badge bdg-card bdg-icon red">{badgeMessage}</span>
                  )}
                  <span className="hide dismiss-btn">{rating} <IcBaselineStar /> </span>
                  <div className="hide overlay">
                    {inStock ? "" : "out of stock"}
                  </div>
                </div>

                <div className="card-about">
                  <h4 className="title">{name}</h4>
                  <p className="card-para">
                    ₹{discountPrice}
                    {hasDiscount && (
                      <span className="striken-text"> ₹{originalPrice}</span>
                    )}
                  </p>

                  <div className="crd-btn">
                     {cartItems.find((d) => d.id === item.id) ? (
                    <button className="btn red" onClick={() =>  removeFromCart(item._id)}>
                      Remove from Cart
                    </button>
                     ) : (
                    <button className="btn green" onClick={() => { addToCart(item); removeFromWishlist(item._id) } }>
                      Add to cart 
                    </button>
                    ) 
                  }
                  </div>

                  <div className="crd-btn">
                    {wishlistItems.find((n) => n.id === item.id) ? (
                    <button className="btn outline-red" 
                    onClick={() => removeFromWishlist(item._id)}>
                      Remove from Wishlist
                    </button>
                     ) : (
                    <button className="btn outline-green"  onClick={() => { addToWishlist(item); removeFromCart(item._id) }}>
                      Add to Wishlist
                    </button>
                    ) 
                  }
                  </div>


                </div>
              </div>
            );
          })}
        </div>

    </div>
    </>
  )
}

export { Products }