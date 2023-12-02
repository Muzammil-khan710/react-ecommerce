import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/Product-context";
import { Card } from "../Allcomps";
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  const { products } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const shuffleFilteredArray = (products) => {
      const filteredArray = products.filter((item) => item.label);

      for (let i = filteredArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredArray[i], filteredArray[j]] = [
          filteredArray[j],
          filteredArray[i],
        ];
      }

      return filteredArray.slice(0, 4);
    };

    const shuffledArray = shuffleFilteredArray(products);
    setFeaturedProducts(shuffledArray);
  }, [products]);

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
