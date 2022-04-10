const WishlistReducer = (state, action) => {
    switch (action.type) {

        case"ADD_TO_WISHLIST":
            return { ...state, wishlist:[...state.wishlist , {...action.payload, qty:1}] };

        case"REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: state.wishlist.filter((c) => c.id !== action.payload)}

        default:
            return state;
    }
}

export { WishlistReducer }