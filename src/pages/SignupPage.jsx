import React from 'react'
import { Footer, Navbar, Signup } from '../Components/Allcomps'

const SignupPage = () => {
  return (
    <div className='page-one'>
        <Navbar/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export { SignupPage }