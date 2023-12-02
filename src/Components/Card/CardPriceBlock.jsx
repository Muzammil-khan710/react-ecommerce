import React from 'react'

const CardPriceBlock = ({discountPrice, originalPrice, className=''}) => {
  return (
    <div className={`price-wrapper  ${className} `}>
    <span className="discount-price">₹{discountPrice}</span>
    <span className="original-price"> ₹{originalPrice}</span>
    <span className="offer-percentage">
      {Math.round(
        ((originalPrice - discountPrice) / originalPrice) * 100
      )}
      % off
    </span>
  </div>
  )
}

export { CardPriceBlock }