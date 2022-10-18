import React from 'react'
import { Cart, Footer, Navbar } from '../Components/Allcomps'
import './pages.css'

const CartPage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Cart/>
        <Footer/>
    </div>
  )
}

export { CartPage }