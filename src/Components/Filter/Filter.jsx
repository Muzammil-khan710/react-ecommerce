import React from 'react'
import { useFilter } from "../../context/Filter-context";
import "./Filter.css";

const Filter = () => {

  const { state, dispatch, setShowFilter, showFilter } = useFilter()

  return (
    <>
         <div className= { showFilter ? "left-container" : "left-container left-container-resp"}>
          <button className="resp-close-btn" onClick={() => setShowFilter(+false)}>close</button>
          <h2>Filters</h2>
          <button className="filter-btn" onClick={() => dispatch({type :"CLEAR_FILTER"})} >Clear All</button>

          <div className="checkbox-container">
            <span><input className='category-input' type="radio"  checked={ state.sortBy === "LOW_TO_HIGH"} onChange={() => dispatch({ type: "LOW_TO_HIGH"})}/>Price: Low to high </span>
            <span><input className='category-input' type="radio"  checked={ state.sortBy === "HIGH_TO_LOW"} onChange={() => dispatch({ type: "HIGH_TO_LOW"})}/>Price: High to low</span>         

          <h3>By category</h3>  
            <span><input className='category-input' type="checkbox" checked={state.Analog} onChange={() => dispatch({type: "ANALOG"})} />Analog</span>
            <span><input className='category-input' type="checkbox" checked={state.SmartWatch} onChange={() => dispatch({type: "SMARTWATCH"})}/>Smart</span>
            <span><input className='category-input' type="checkbox" checked={state.Automatic} onChange={() => dispatch({type: "AUTOMATIC"})}/>Automatic</span>
            <span><input className='category-input' type="checkbox" checked={state.Chronograph} onChange={() => dispatch({type: "CHRONOGRAPH"})}/>Chronograph</span>
            </div>
        </div>
    </>
  )
}

export { Filter }