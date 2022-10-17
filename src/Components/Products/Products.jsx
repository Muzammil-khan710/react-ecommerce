import "./Product.css";
import React from 'react'
import { IcBaselineStar } from '../../images/Svg';
import { useCart } from '../../context/Cart-context';
import { useWishlist } from '../../context/Wishlist-context';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useProducts } from "../../context/Product-context";
import { sortPriceFilter } from './../../reducer/FilterReducer';
import { categoryFiltered } from './../Filters';
import { useFilter } from "../../context/Filter-context";

const Products = () => {
  
  const { cartState: {cartItems}, addToCart, removeFromCart } =  useCart()

  const { wishlistState: {wishlistItems}, addToWishlist, removeFromWishlist } = useWishlist();

  const { products }  = useProducts()

  const navigate  = useNavigate()

  const user = localStorage.getItem("user")

  const { state, dispatch } = useFilter()

  const categoryFilteredProduct = categoryFiltered(products, state, state.sortBy);
          
  const PriceWishFilter = sortPriceFilter(categoryFilteredProduct, state.sortBy);

  const wishlistToggler = (item) => {
    addToWishlist(item);
    removeFromCart(item._id)
  }

  const cartToggler = (item) => {
    addToCart(item);
    removeFromWishlist(item._id)
  }

  return (
    <>
    <h2>All products</h2>
    <div className='product-page-content'>

        <div className="left-container">
          <h2>Filters</h2>
          <button className="filter-btn" onClick={() => dispatch({type :"CLEAR_FILTER"})} >Clear All</button>

          <div className="checkbox-container">
            <span><input className='category-input' type="radio"  checked={ state.sortBy === "LOW_TO_HIGH"} onChange={() => dispatch({ type: "LOW_TO_HIGH"})}/>Price: Low to high </span>
            <span><input className='category-input' type="radio"  checked={ state.sortBy === "HIGH_TO_LOW"} onChange={() => dispatch({ type: "HIGH_TO_LOW"})}/>Price: High to low</span>         

          <h3>By category</h3>  
            <span><input className='category-input' type="checkbox" checked={state.Analog} onChange={() => dispatch({type: "ANALOG"})} />Analog</span>
            <span><input className='category-input' type="checkbox" checked={state.SmartWatch} onChange={() => dispatch({type: "SMARTWATCH"})}/>Smart</span>
            <span><input className='category-input' type="checkbox" checked={state.Automatic} onChange={() => dispatch({type: "AUTOMATIC"})}/>Automatic</span>
            <span><input className='category-input' type="checkbox" checked={state.Chronograph} onChange={() => dispatch({type: "CHRONOGRAPH"})}/>Chronograph</span>
            </div>
        </div>

        <div className="card-container">
          {PriceWishFilter.map((item) => {
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
                  {/* <img className="card-img" src={imageSrc} alt={name} /> */}
                  <LazyLoadImage className="card-img" src={imageSrc}  alt={name} effect="blur" />
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
                    <button className="btn red" onClick={() => { user ? (removeFromCart(item._id)) : navigate('/login') } }>
                      Remove from Cart
                    </button>
                     ) : (
                    <button className="btn green" onClick={() => { user ? cartToggler(item) : navigate('/login') } }>
                      Add to cart 
                    </button>
                    ) 
                  }
                  </div>

                  <div className="crd-btn">
                    {wishlistItems.find((n) => n.id === item.id) ? (
                    <button className="btn outline-red" 
                    onClick={() => { user ? removeFromWishlist(item._id) : navigate('/login') }}>
                      Remove from Wishlist
                    </button>
                     ) : (
                    <button className="btn outline-green"  onClick={() => { user ? wishlistToggler(item) : navigate('/login') }}>
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
