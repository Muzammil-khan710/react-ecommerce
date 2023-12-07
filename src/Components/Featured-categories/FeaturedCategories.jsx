import React from "react";
import { FeaturedCategory } from "./FeaturedCategory";
import { FeaturedCategoriesData } from "../../data/data";

const FeaturedCategories = () => {
  return (
    <section className="featured-category-container">
      <h2 className="color-black">Available Categories</h2>
      <div className="featured-category-wrapper">
        {FeaturedCategoriesData.map((item, i) => (
          <FeaturedCategory
            category={item.category}
            image={item.image}
            title={item.title}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export { FeaturedCategories }
