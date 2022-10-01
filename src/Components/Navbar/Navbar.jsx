import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/Cart-context'
import { useWishlist } from '../../context/Wishlist-context'
import { ShoppingCartIcon, UserProfile, WishlistIcon } from '../../images/Svg'
import './Navbar.css'

const Navbar = () => {

  const [show, setShow] = useState(false);

  const { cartState: {cartItems}} =  useCart();

  const { wishlistState: {wishlistItems} } = useWishlist();

  return (
    <div className='nav-content'>
      <Link className='brand-name link' to="/">MyWatch</Link>
       <input className='input-area' type="text"  placeholder='Search watches..'/>
       <div className='icon-container'>
         <Link className='link-product'to='/products'>Products</Link>
         <Link className='link-product' to="/cart"> <ShoppingCartIcon/>{ cartItems.length > 0 && <span className='bdg cart-bdg red'>{cartItems.length}  </span> } </Link>       
         <Link className='link-product' to="/wishlist"> <WishlistIcon/>{ wishlistItems.length > 0 && <span className='bdg cart-bdg red'>{wishlistItems.length}  </span> }  </Link>
         <div>
          <UserProfile className='profile' onClick={() => setShow(prev => !prev)}/>
          {show &&
          <div className='user-profile-cont' >
           <li><Link className='link-product' to="/Login">Login</Link></li>
           <li><Link className='link-product' to="/Signup">Signup</Link></li>
          </div>
          } 
         </div>
       </div>
    </div>
  )
}

export { Navbar }