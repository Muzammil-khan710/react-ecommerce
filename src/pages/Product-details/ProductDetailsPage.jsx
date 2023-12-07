import React from "react";
import { FeaturedProducts, Layout, ProductDetails } from "../../Components";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const {id}= useParams();

  return (
    <Layout>
      <ProductDetails productId={id} />
      <FeaturedProducts />
    </Layout>
  );
};

export { ProductDetailsPage }
