import React from 'react'
import { Banner, FeaturedCategories, FeaturedProducts, Layout } from '../Components'
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
      <FeaturedProducts/>
    </Layout>
  )
}

export { HomePage }