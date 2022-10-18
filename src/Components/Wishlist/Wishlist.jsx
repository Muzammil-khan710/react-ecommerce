import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/Cart-context';
import { useWishlist } from '../../context/Wishlist-context';
import "./Wishlist.css"

const Wishlist = () => {

    const { wishlistState: {wishlistItems}, removeFromWishlist } = useWishlist();
    
    const { addToCart } = useCart();

  return (
    <>
        {wishlistItems.length > 0 ? 
        <div className='cart-container'>

        <div className='left-cont'>
        {
            wishlistItems.map((item) => (
                <div className="card-cart" key={item._id}>
                    <div className="horizontal-card">
                        <img className="horizontal-card-img" src={item.imageSrc} alt={item.name}/>
                            <div className="horizontal-card-contents spc-ar">
                            <h3>{item.name}</h3>
                   
                            <div className="crd-btn">
                            <button className="btn outline-red" onClick={() => removeFromWishlist(item._id) }>Remove from Wishlist</button>

                            <button className="btn outline-green" onClick={() => { removeFromWishlist(item._id); addToCart(item) } }>Add to Cart</button>
                        </div>
                        </div>  
                    </div>
                </div>
                    
            ))
        }
        </div>
       </div>
       : <h1>Your wishlist is empty ! Please add items from <Link to='/products' className='home-link'>Products</Link> </h1>
    }
   </>
  )
}

export { Wishlist }
