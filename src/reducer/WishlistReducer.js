const WishlistReducer = (wishlistState, action) => {
    switch (action.type) {

        case"ADD_TO_WISHLIST":
            return { ...wishlistState, wishlistItems: action.payload };

        case"REMOVE_FROM_WISHLIST":
            return { ...wishlistState, wishlistItems: action.payload };

        default:
            return wishlistState;
    }
}

export { WishlistReducer }