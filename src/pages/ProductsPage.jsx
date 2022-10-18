import React from 'react'
import { Footer, Navbar, Products } from '../Components/Allcomps'

const ProductsPage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}

export { ProductsPage }