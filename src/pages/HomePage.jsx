import React from 'react'
import { Banner, FeaturedCategories, Layout } from '../Components/Allcomps'
import { BannerImg } from '../images/ImageExp'

const HomePage = () => {
  return (
    <Layout>
      <Banner
        title="Exclusive offer upto 50% off"
        img={BannerImg}
        alt="banner"
        link="products"
      />
      <FeaturedCategories/>
    </Layout>
  )
}

export { HomePage }