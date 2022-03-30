import React from "react";
import "./Homepage.css"

const FeaturedProducts = ({ src, title }) => {
  return (
    <div className="featured-p-container">
        <a className="link products-link" href="/">
          <img
            className="featured-p-img"
            src={src}
            alt={title}
          />
          <div className="featured-title">{title}</div>
        </a>
    </div>
  );
};
export { FeaturedProducts };
