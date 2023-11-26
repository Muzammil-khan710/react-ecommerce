import React from "react";
import {
  BannerImg,
} from "../../images/ImageExp";
import { FeaturedProducts } from "./FeaturedProducts";
import { Banner } from "../Banner/Banner";

const Home = () => {
  return (
    <React.Fragment>
      <Banner
        title="Exclusive offer upto 50% off"
        img={BannerImg}
        alt="banner"
        link="products"
      />
      {/* <section className="category-container">
        <h2>Available Categories</h2>
        <div className="featured-product-type">
          <FeaturedProducts
            src={AutomaticWatch}
            title="AutomaticWatch"
            category="AUTOMATIC"
          />
          <FeaturedProducts
            src={AnalogWatch}
            title="AnalogWatch"
            category="ANALOG"
          />
          <FeaturedProducts
            src={ChronographWatch}
            title="ChronographWatch"
            category="CHRONOGRAPH"
          />
          <FeaturedProducts
            src={SmartWatch}
            title="SmartWatch"
            category="SMARTWATCH"
          />
        </div>
      </section> */}
    </React.Fragment>
  );
};

export { Home };
