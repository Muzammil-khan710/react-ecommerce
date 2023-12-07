import React from "react";
import { Card, Filter, Layout } from "../../Components";
import { useProducts } from "../../context/Product-context";
import { useFilter } from "../../context/Filter-context";
import { sortRatingAndPrice  } from "../../reducer/FilterReducer";
import { FilterListIcon } from "../../images/Svg";
import { categoryFiltered } from "../../utils/Filters";
import "./products.css"

const ProductsPage = () => {
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
    <Layout>
      <button className="toggle-resp" onClick={() => setShowFilter(+true)}>
        <FilterListIcon/>
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
    </Layout>
  );
};

export { ProductsPage };
