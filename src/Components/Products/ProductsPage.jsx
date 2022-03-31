import { data } from '../../data/Data';
import "./ProductPage.css";

import React from 'react'
import { IcBaselineStar } from '../../images/Svg';

const ProductsPage = () => {
  
  return (
    <>
    <h2>All products</h2>
    <div className='product-page-content'>

        <div className="card-container">
          {data.map((item) => {
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
                    <button className="btn green">
                      Add to cart
                    </button>
                    <button className="btn red">
                      Move to Wishlist
                    </button>
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

export { ProductsPage }
