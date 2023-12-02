import React from "react";
import { useProducts } from "../../context/Product-context";
import { Card } from "..";
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  const { featuredProducts } = useProducts();

  return (
    <section className="featured-products-container">
      <h2>Featured Products</h2>
      <div className="featured-products-wrapper">
        {featuredProducts?.map(item => (
            <Card item={item} key={item.id } className="card-hover"/>
        ))}
      </div>
    </section>
  );
};

export { FeaturedProducts };
