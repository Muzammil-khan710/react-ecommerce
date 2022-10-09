import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext()

const useProducts = () => useContext(ProductContext)

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
   
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data.products)
    })()
  }, [])
    
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export { useProducts, ProductsProvider }