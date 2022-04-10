import React from 'react'
import { useCart } from '../../context/Cart-context';
import { useWishlist } from '../../context/Wishlist-context';
import "./Wishlist.css"

const WishlistPage = () => {

    // const { state: {cart} } = useCart();    
    const { stateWishlist: {wishlist}, dispatchWishlist } = useWishlist();
    
    const { dispatch } = useCart();

    console.log("wishlist", wishlist);
    // console.log("from wishlist", cart);

  return (
    <>
    <div>
        <div className='cart-container'>

        <div className='left-cont'>
        {
            wishlist.map((item) => (
                <div className="card-cart">
                    <div className="horizontal-card">
                        <img className="horizontal-card-img" src={item.imageSrc} alt={item.name}/>
                            <div className="horizontal-card-contents spc-ar">
                            <h3>{item.name}</h3>
                   
                            <div className="crd-btn">
                            <button className="btn outline-red" onClick={() => {
                            dispatchWishlist({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item.id,
                            })
                            }}>Remove from Wishlist</button>

                            <button className="btn outline-green" onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: item,
                                })
                            }}>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
                    
            ))
        }
        </div>
       </div>
      </div>
   </>
  )
}

export { WishlistPage }
