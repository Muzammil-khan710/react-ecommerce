import React from 'react'

const QuantityHandler = ({item, incrementFunc, decrementFunc, removeFunc}) => {
  return (
    <div className="qty-cont">
    <button
      className="qty-btn"
      onClick={(e) => {
        e.stopPropagation();
        incrementFunc(item._id);
      }}
    >
      +
    </button>
    {item.qty}
    <button
      className="qty-btn"
      onClick={(e) => {
        e.stopPropagation();
        item.qty > 1
          ? decrementFunc(item._id)
          : removeFunc(item._id);
      }}
    >
      -
    </button>
  </div>
  )
}

export { QuantityHandler }