import React from 'react'
import { Footer, Navbar, Wishlist } from '../Components/Allcomps'

const WishlistPage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Wishlist/>
        <Footer/>
    </div>
  )
}

export { WishlistPage }