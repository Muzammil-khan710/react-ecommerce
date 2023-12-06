const defaultState = {
    sortBy: null,
    Analog: false,
    Chronograph: false,
    SmartWatch: false,
    Casio:false,
    Amazfit:false,
    Police:false,
    Fossil:false
  };
  
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "PRICE_LOW_TO_HIGH": 
        return { ...state, sortBy: "PRICE_LOW_TO_HIGH" };
      case "PRICE_HIGH_TO_LOW": 
        return { ...state, sortBy: "PRICE_HIGH_TO_LOW" };
      case "RATING_LOW_TO_HIGH": 
        return { ...state, sortBy: "RATING_LOW_TO_HIGH" };
      case "RATING_HIGH_TO_LOW": 
        return { ...state, sortBy: "RATING_HIGH_TO_LOW" };
      case "ANALOG":
        return { ...state, Analog: !state.Analog };
      case "SMARTWATCH":
        return { ...state, SmartWatch: !state.SmartWatch };
      case "CHRONOGRAPH":
        return { ...state, Chronograph: !state.Chronograph };
      case "FOSSIL":
        return { ...state, Fossil: !state.Fossil};
      case "POLICE":
        return { ...state, Police: !state.Police };
      case "CASIO":
        return { ...state, Casio: !state.Casio };
      case "AMAZFIT":
        return { ...state, Amazfit: !state.Amazfit };
      case "CLEAR_FILTER":
        return defaultState; 
      default: 
        return state;
    }
  };
  
  export const sortRatingAndPrice = (products, sortBy) => {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return products.slice().sort((a, b) => a.discountPrice - b.discountPrice);
    }
  
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return products.slice().sort((a, b) => b.discountPrice - a.discountPrice);
    }
  
    if(sortBy === "RATING_LOW_TO_HIGH") {
        return products.slice().sort((a, b) => a.rating - b.rating)
    }

    if(sortBy === "RATING_HIGH_TO_LOW") {
        return products.slice().sort((a, b) => b.rating - a.rating)
    }

    return products
  };
  
  