import React from "react";
import { Link } from "react-router-dom";
import './banner.css'

const Banner = ({img, alt, title, link=''}) => {
  return (
    <section className="banner-container">
      <img className="banner-img" src={img} alt={alt} />
      <div className="banner-details">
        <h1 className="banner-title">{title}</h1>
        <Link className="banner-link" to={`/${link}`}>
          Explore
        </Link>
      </div>
    </section>
  );
};

export { Banner };
