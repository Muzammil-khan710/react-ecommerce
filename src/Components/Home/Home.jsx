import React from 'react'
import { AnalogWatch, AutomaticWatch, ChronographWatch, HomeImg, SmartWatch } from '../../images/ImageExp'
import './Home.css'
import { FeaturedProducts } from './FeaturedProducts'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' homepage-container'>
      <div className='image-container'>
        <img style={{height:"auto",width:"100%"}} src={HomeImg} alt="" />
          <section className='section-area'>  
            <h2 className='section-text'>Exclusive offer upto 50% off</h2>
            <Link to="/products"><button className='explore-btn'>Explore all categories</button></Link>
          </section>
        </div>
        <h1>Available Categories</h1>
        <section className='category-container'>
        <div className="featured-product-type">
          <FeaturedProducts src={AutomaticWatch} title="AutomaticWatch" />
          <FeaturedProducts src={AnalogWatch} title="AnalogWatch" />
          <FeaturedProducts src={ChronographWatch} title="ChronographWatch" />
          <FeaturedProducts src={SmartWatch} title="SmartWatch" />
        </div>
        </section>
    </div>
  )
}

export { Home }