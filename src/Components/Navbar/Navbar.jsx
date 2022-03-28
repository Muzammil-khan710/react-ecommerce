import React from 'react'
import { ShoppingCartIcon, UserProfile, WishlistIcon } from '../../images/Svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-content'>
       <a className='brand-name link' href="/">MyWatch</a>
       <input className='input-area' type="text"  placeholder='Search watches..'/>
       <div className='icon-container'>
         <a className='link-product' href='/products'>Products</a>
         <ShoppingCartIcon/>
         <WishlistIcon/>
         <UserProfile/>
       </div>
    </div>
  )
}

export { Navbar }