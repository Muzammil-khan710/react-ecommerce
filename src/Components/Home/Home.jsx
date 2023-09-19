import React from 'react'
import { AnalogWatch, AutomaticWatch, ChronographWatch, HomeImg, SmartWatch } from '../../images/ImageExp'
import './Home.css'
import { FeaturedProducts } from './FeaturedProducts'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  return (
    <div className=' homepage-container'>
      <section className=' image-container-one'>
        <LazyLoadImage style={{height:"auto",width:"100%"}} src={HomeImg}  effect="blur" />
          <section className='section-area'>  
            <h1 className='section-text'>Exclusive offer upto 50% off</h1>
              <Link className='explore-link' to="/products">Explore</Link>
          </section>
        </section>
        <h2>Available Categories</h2>
        <section className='category-container'>
        <div className="featured-product-type">
          <FeaturedProducts src={AutomaticWatch} title="AutomaticWatch" category='AUTOMATIC'/>
          <FeaturedProducts src={AnalogWatch} title="AnalogWatch" category='ANALOG'/>
          <FeaturedProducts src={ChronographWatch} title="ChronographWatch" category='CHRONOGRAPH'/>
          <FeaturedProducts src={SmartWatch} title="SmartWatch" category='SMARTWATCH'/>
        </div>
        </section>
    </div>
  )
}

export { Home }