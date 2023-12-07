import { useState, createContext, useContext, useReducer } from "react";
import { reducer } from "./../reducer/FilterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    sortBy: null,
    Analog: false,
    Chronograph: false,
    SmartWatch: false,
    Casio:false,
    Amazfit:false,
    Police:false,
    Fossil:false
  });

  return (
    <FilterContext.Provider
      value={{ state, dispatch, showFilter, setShowFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
