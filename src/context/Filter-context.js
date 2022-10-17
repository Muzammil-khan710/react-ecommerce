import { createContext, useContext, useReducer } from "react";
import { reducer } from './../reducer/FilterReducer';

const FilterContext = createContext()

const useFilter = () => useContext(FilterContext)

const FilterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
    sortBy: ""  ,
    Analog: false,
    Automatic: false,
    Chronograph: false,
    SmartWatch: false,
});

    return (
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export { useFilter, FilterProvider }