import React from 'react'
import { AuthImg } from '../../images'

const AuthBanner = () => {
  return (
    <div className='auth-img-box'>
        <img className='auth-img' src={AuthImg} alt="Watch" />
    </div>
  )
}

export default AuthBanner