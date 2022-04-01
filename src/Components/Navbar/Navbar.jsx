import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon, UserProfile, WishlistIcon } from '../../images/Svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-content'>
      <Link className='brand-name link' to="/">MyWatch</Link>
       <input className='input-area' type="text"  placeholder='Search watches..'/>
       <div className='icon-container'>
         <Link className='link-product'to='/products'>Products</Link>
         <ShoppingCartIcon/>
         <WishlistIcon/>
         <UserProfile/>
       </div>
    </div>
  )
}

export { Navbar }