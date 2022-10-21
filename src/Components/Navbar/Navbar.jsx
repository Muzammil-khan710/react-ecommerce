import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth-context'
import { useCart } from '../../context/Cart-context'
import { useWishlist } from '../../context/Wishlist-context'
import { ShoppingCartIcon, WishlistIcon, Login, Logout } from '../../images/Svg'
import './Navbar.css'

const Navbar = () => {

  const { cartState: {cartItems}} =  useCart();

  const { wishlistState: {wishlistItems} } = useWishlist();

  const { user, logoutFunc } = useAuth()
 
  return (
    <div className='nav-content'>
      <Link className='brand-name link' to="/">MyWatch</Link>
       <div className='icon-container'>
         <Link className='link-product'to='/products'>Products</Link>
         <Link className='link-product' to="/cart"> <ShoppingCartIcon/>{ user && cartItems.length > 0 && <span className='bdg cart-bdg red'>{cartItems.length}  </span> } </Link>       
         <Link className='link-product' to="/wishlist"> <WishlistIcon/>{ user && wishlistItems.length > 0 && <span className='bdg cart-bdg red'>{wishlistItems.length}  </span> }  </Link>

          { user ?
         (<Link className='nav-btn' onClick={ logoutFunc } to='/login'><Login/></Link>)
         :
         (<Link className='nav-btn' to='/login'><Logout/></Link>)
          }
       </div>
    </div>
  )
}

export { Navbar }