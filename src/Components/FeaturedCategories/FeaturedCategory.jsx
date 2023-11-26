import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/Filter-context";
import './FeaturedCategory.css'

const FeaturedCategory = ({ image, title, category }) => {
  const { dispatch } = useFilter();

  return (
    <div className="featured-category-block">
      <Link
        to="/products"
        onClick={() => dispatch({ type: category })}
        className="featured-category-link"
      >
        <img className="featured-category-img" src={image} alt={title} />
        <div className="featured-category-title">{title}</div>
      </Link>
    </div>
  );
};
export { FeaturedCategory };
