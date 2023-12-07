import React, { useEffect, useState } from 'react'
import './price-sidebar.css'

const PriceSidebar = ({items}) => {

  const [cartTotal, setCartTotal] = useState({
    originalPrice: 0,
    discountedPrice: 0,
    total: 0,
    qty: 0,
  });

  useEffect(() => {
    const updatedCartTotal = items.reduce(
      (accumulator, cartItem) => {
        const { qty, originalPrice, discountPrice } = cartItem;
        accumulator.qty += qty;
        accumulator.originalPrice += originalPrice * qty;
        accumulator.discountedPrice += (originalPrice - discountPrice) * qty;
        accumulator.total += discountPrice * qty;
        return accumulator;
      },
      { qty: 0, originalPrice: 0, discountedPrice: 0, total: 0 }
    );

    setCartTotal(updatedCartTotal);
  }, [items]);

  return (
    <aside className="side-bar">
    <div className="side-bar-text">
      Total {cartTotal.qty} {cartTotal.qty === 1 ? "item" : "items"}{" "}
    </div>
    <div className="side-bar-text">
      Original price{" "}
      <span className="side-bar-values">
        {" "}
        {cartTotal.originalPrice}{" "}
      </span>{" "}
    </div>
    <div className="side-bar-text">
      Total discount
      <span className="side-bar-values color-red">
        {" "}
        {cartTotal.discountedPrice}{" "}
      </span>{" "}
    </div>
    <div className="side-bar-text">
      Delivery charges
      <span className="side-bar-values">
        {" "}
        {cartTotal.total <= 10000 ? "1000" : "0"}{" "}
      </span>{" "}
    </div>
    <div className="side-bar-text total">
      Net Total{" "}
      <span className="side-bar-values total">
        {" "}
        {cartTotal.total <= 10000
          ? cartTotal.total + 1000
          : cartTotal.total}{" "}
      </span>{" "}
    </div>
  </aside>
  )
}

export { PriceSidebar }