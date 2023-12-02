import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext()

const useProducts = () => useContext(ProductContext)

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([]);
   
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data.products)
    })()
  }, [])
  
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
        <ProductContext.Provider value={{ products, setProducts, featuredProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export { useProducts, ProductsProvider }