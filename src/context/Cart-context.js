import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {
    
    const [cartState, dispatchCart] = useReducer(CartReducer, {
        cartItems: []
    })


    const addToCart = async (product) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try { 
            const { data } = await axios.post('/api/user/cart', { product }, config)
            dispatchCart({
                type : "ADD_TO_CART",
                payload : data.cart
            })
        } catch (err) {
            console.log(err)
        }
    }

    const removeFromCart = async (productId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try { 
            const { data } = await axios.delete(`/api/user/cart/${productId}`, config)
            dispatchCart({
                type : "REMOVE_FROM_CART",
                payload : data.cart
            })
        } catch (err) {
            console.log(err)
        }
    }

    const incrementQty = async (productId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try { 
            const { data } = await axios.post(`/api/user/cart/${productId}`, { action : {type : "increment"}},  config)
            dispatchCart({
                type : "INCREMENT",
                payload : data.cart
            })
        } catch (err) {
            console.log(err)
        }
    }

    const decrementQty = async (productId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try { 
            const { data } = await axios.post(`/api/user/cart/${productId}`, { action : {type : "decrement"}}, config)
            dispatchCart({
                type : "DECREMENT",
                payload : data.cart
            })
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <CartContext.Provider value={{ cartState, dispatchCart, addToCart, removeFromCart, incrementQty, decrementQty}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart }