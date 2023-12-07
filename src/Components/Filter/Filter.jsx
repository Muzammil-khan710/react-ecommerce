import React from 'react';
import { useFilter } from "../../context/Filter-context";
import "./filter.css";
import { CloseSvgIcon } from '../../images/Svg';

const Filter = () => {
  const { state, dispatch, setShowFilter, showFilter } = useFilter();

  return (
    <>
      <aside className={showFilter ? "filter-container" : "filter-container filter-container-resp"}>
        <button className="resp-close-btn" onClick={() => setShowFilter(+false)}><CloseSvgIcon/></button>
        <h2>Filters</h2>
        <button className="card-btn filter-btn" onClick={() => dispatch({ type: "CLEAR_FILTER" })}>Clear All</button>

        <div className="checkbox-container">
          <h4>Sort By</h4>
          <label><input type="radio" checked={state.sortBy === "PRICE_LOW_TO_HIGH"} onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })} />Price: Low to high</label>
          <label><input type="radio" checked={state.sortBy === "PRICE_HIGH_TO_LOW"} onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })} />Price: High to low</label>

          <label><input type="radio" checked={state.sortBy === "RATING_LOW_TO_HIGH"} onChange={() => dispatch({ type: "RATING_LOW_TO_HIGH" })} />Rating: Low to high</label>
          <label><input type="radio" checked={state.sortBy === "RATING_HIGH_TO_LOW"} onChange={() => dispatch({ type: "RATING_HIGH_TO_LOW" })} />Rating: High to low</label>
          
          <h4>Filter By category</h4>
          <label><input type="checkbox" checked={state.Analog} onChange={() => dispatch({ type: "ANALOG" })} />Analog Watch</label>
          <label><input type="checkbox" checked={state.SmartWatch} onChange={() => dispatch({ type: "SMARTWATCH" })} />Smart Watch</label>
          <label><input type="checkbox" checked={state.Chronograph} onChange={() => dispatch({ type: "CHRONOGRAPH" })} />Chronograph Watch</label>
          
          <h4>Filter By brand</h4>
          <label><input type="checkbox" checked={state.Fossil} onChange={() => dispatch({ type: "FOSSIL" })} />Fossil</label>
          <label><input type="checkbox" checked={state.Casio} onChange={() => dispatch({ type: "CASIO" })} />Casio</label>
          <label><input type="checkbox" checked={state.Police} onChange={() => dispatch({ type: "POLICE" })} />Police</label>
          <label><input type="checkbox" checked={state.Amazfit} onChange={() => dispatch({ type: "AMAZFIT" })} />Amazfit</label>
        </div>
      </aside>
    </>
  );
};

export { Filter };
