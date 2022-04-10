
import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducer/WishlistReducer";

const WishlistContext = createContext()

const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {

    const [stateWishlist, dispatchWishlist] = useReducer(WishlistReducer, {
        wishlist: [],
    })

    return(
        <WishlistContext.Provider value={{stateWishlist, dispatchWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist }

