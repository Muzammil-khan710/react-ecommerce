import React from "react";
import { Link } from "react-router-dom";

const Banner = ({img, alt, title, link=''}) => {
  return (
    <section className=" image-container-one">
      <img className="banner-image" src={img} alt={alt} />
      <div className="section-area">
        <h1 className="section-text">{title}</h1>
        <Link className="explore-link" to={`/${link}`}>
          Explore
        </Link>
      </div>
    </section>
  );
};

export { Banner };
