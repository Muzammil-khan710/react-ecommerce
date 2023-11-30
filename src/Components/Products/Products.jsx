import "./Product.css";
import React from "react";
import { useProducts } from "../../context/Product-context";
import { sortPriceFilter } from "./../../reducer/FilterReducer";
import { categoryFiltered } from "./../Filters";
import { useFilter } from "../../context/Filter-context";
import { Card, Filter } from "../Allcomps";

const Products = () => {
  const { products } = useProducts();

  const { state, setShowFilter } = useFilter();

  const categoryFilteredProduct = categoryFiltered(
    products,
    state,
    state.sortBy
  );

  const PriceWishFilter = sortPriceFilter(
    categoryFilteredProduct,
    state.sortBy
  );

  return (
    <section>
      <h2>All products</h2>
      <button className="toggle-resp" onClick={() => setShowFilter(+true)}>
        Filters
      </button>
      <div className="product-page-content">
        <Filter />

        <div className="card-container">
          {PriceWishFilter.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Products };
