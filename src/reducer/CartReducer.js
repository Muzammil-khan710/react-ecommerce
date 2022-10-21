const CartReducer = (cartState, action) => {
    switch (action.type) {

        case"ADD_TO_CART":
            return { ...cartState, cartItems: action.payload };

        case"REMOVE_FROM_CART":
            return { ...cartState, cartItems: action.payload };

        case"INCREMENT":
            return { ...cartState, cartItems: action.payload };

        case"DECREMENT":
            return { ...cartState, cartItems: action.payload };
            
        default:
            return cartState;
    }
}

export { CartReducer }