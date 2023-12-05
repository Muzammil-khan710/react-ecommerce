import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducer/WishlistReducer";
import toast from "react-hot-toast";

const WishlistContext = createContext()

const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {

    const [wishlistState, dispatchWishlist] = useReducer(WishlistReducer, {
        wishlistItems: [],
    })

    const addToWishlist = async (product) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.post('/api/user/wishlist',  { product }, config )
            dispatchWishlist({
                type: "ADD_TO_WISHLIST",
                payload : data.wishlist
            }) 
            toast.success("Product added to wishlist")
        } catch (err) {
            console.log(err)
            toast.error("Error occured while adding product to wishlist")
        }

    }

    const removeFromWishlist = async (productId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/wishlist/${productId}`, config )
            dispatchWishlist({
                type: "REMOVE_FROM_WISHLIST",
                payload : data.wishlist
            }) 
            toast.success("Product removed from wishlist")
        } catch (err) {
            console.log(err)
            toast.error("Error occured while removing product from wishlist")
        }

    }

    return(
        <WishlistContext.Provider value={{wishlistState, dispatchWishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist }

