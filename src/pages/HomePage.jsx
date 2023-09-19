import React from 'react'
import { Footer, Home, Navbar } from '../Components/Allcomps'

const HomePage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export { HomePage }