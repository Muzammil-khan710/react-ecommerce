import "./Product.css";
import React from "react";
import { useProducts } from "../../context/Product-context";
import { sortRatingAndPrice } from "./../../reducer/FilterReducer";
import { categoryFiltered } from "./../Filters";
import { useFilter } from "../../context/Filter-context";
import { Card, Filter } from "..";
import { FilterList } from "../../images/Svg";

const Products = () => {
  const { products } = useProducts();

  const { state, setShowFilter } = useFilter();

  const categoryFilteredProduct = categoryFiltered(
    products,
    state,
    state.sortBy
  );

  const FilteredData = sortRatingAndPrice(
    categoryFilteredProduct,
    state.sortBy
  );

  return (
    <React.Fragment>
      <button className="toggle-resp" onClick={() => setShowFilter(+true)}>
        <FilterList/>
      </button>
      <div className="product-page-content">
        <Filter />

        <section className="product-card-container">
        <h2 className="product-card-heading">All products</h2>
        <div className="card-wrapper">
          {FilteredData.length > 0 ? FilteredData.map((item) => (
            <Card item={item} key={item.id} className="card-hover"/>
          )) : <h2 className="product-card-heading">No Item found</h2>          }
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export { Products };
