import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/Filter-context";
import "./Home.css"

const FeaturedProducts = ({ src, title, category }) => {

  const { dispatch } = useFilter()

  return (
    <div className="featured-p-container">
        <Link className="link products-link" to="/products" onClick={() => dispatch({type : category})}>
          <img
            className="featured-p-img"
            src={src}
            alt={title}
          />
          <div className="featured-title">{title}</div>
        </Link>
    </div>
  );
};
export { FeaturedProducts };
