import React from 'react'
import { AuthImg } from '../../images/ImageExp'

const AuthBanner = () => {
  return (
    <div className='auth-img-box'>
        <img className='auth-img' src={AuthImg} alt="Watch" />
    </div>
  )
}

export default AuthBanner