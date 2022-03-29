import React from 'react'
import { HomeImg } from '../../images/ImageExp'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='image-container homepage-container'>
        <img style={{height:"auto",width:"100%"}} src={HomeImg} alt="" />
        <section className='section-area'>
            <h2 className='section-text'>Exclusive offer upto 50% off</h2>
            <button className='explore-btn'>Explore all categories</button>
        </section>
    </div>
  )
}

export { Homepage }