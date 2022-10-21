export const reducer = (state , action) => {

    switch (action.type) {

        case "LOW_TO_HIGH": 
            return { ...state, sortBy: action.type };

        case "HIGH_TO_LOW": 
            return { ...state, sortBy: action.type };

        case "ANALOG":
            return { ...state, Analog: !state.Analog};

        case "AUTOMATIC":
            return { ...state, Automatic: !state.Automatic};  

        case "SMARTWATCH":
            return { ...state, SmartWatch: !state.SmartWatch};

        case "CHRONOGRAPH":
            return { ...state, Chronograph: !state.Chronograph};
        
        case "CLEAR_FILTER":
            return {
                ...state,
                sortBy: null  ,
                Analog: false,
                Chronograph: false,
                Automatic: false,
                SmartWatch: false,
            };

        default: 
            return state;
    }
};

export const sortPriceFilter = (products, sortBy) => {
    if (sortBy === "LOW_TO_HIGH")
      return products.sort((a, b) => a.discountPrice - b.discountPrice );

    if (sortBy === "HIGH_TO_LOW")
      return products.sort((a, b) => b.discountPrice - a.discountPrice );
    
return products;    
}