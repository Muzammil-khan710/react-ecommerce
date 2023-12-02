import React from "react";
import { FeaturedProducts, Layout } from "../Components";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const SingleProductPage = () => {
  const {id}= useParams();

  return (
    <Layout>
      <ProductDetails productId={id} />
      <FeaturedProducts />
    </Layout>
  );
};

export default SingleProductPage;
