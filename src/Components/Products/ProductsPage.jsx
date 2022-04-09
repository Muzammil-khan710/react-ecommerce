import { data } from '../../data/Data';
import "./ProductPage.css";

import React from 'react'
import { IcBaselineStar } from '../../images/Svg';
import { useCart } from '../../context/Cart-context';

const ProductsPage = () => {
  
  const { state: {cart}, dispatch } =  useCart()


  console.log(cart)

  return (
    <>
    <h2>All products</h2>
    <div className='product-page-content'>

        <div className="left-container">
          <h2>Filters</h2>

          <div className="checkbox-container">
            <span><input className="checkbox" type="checkbox" />Price: High to low </span>
            <span><input className="checkbox" type="checkbox" />Price: Low to high</span>
            <span><input className="checkbox" type="checkbox" /> Rating</span>
         

          <h3>by category</h3>
            <span><input className='radio' type="radio" name="" id="" />Analog</span>
            <span><input type="radio" name="" id="" />Smart</span>
            <span><input type="radio" name="" id="" />Automatic</span>
            <span><input type="radio" name="" id="" />Chronograph</span>
            </div>
        </div>

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
                     
                    <button className="btn red" onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }}>
                      Remove from Cart
                    </button>
                
                    <button className="btn green" onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}>
                      Add to cart 
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
