import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(CartReducer, {
        cart: []
    })


    return(
        <CartContext.Provider value={{ state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart }