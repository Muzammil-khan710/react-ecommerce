import React from 'react'
import { Navbar, Login, Footer } from '../Components/Allcomps'

const LoginPage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Login/>
        <Footer/>
    </div>
  )
}

export { LoginPage }