import React,{ useState, useEffect } from 'react'
import { useCart } from '../../context/Cart-context'
import { useWishlist } from '../../context/Wishlist-context';
import "./Cart.css"

const Cart = () => {

    const { cartState: {cartItems}, removeFromCart, incrementQty, decrementQty} = useCart();

    const { addToWishlist } = useWishlist()
    
    const [originalPrice, setOriginalPrice] = useState(0)
    const [discountedPrice, setDiscountedPrice] = useState(0)
    const [total,setTotal] = useState(0)
    const [qty, setQty] = useState(0)

    const calcAllValues = () => {
        let totalPrice = 0;
        let orgPrice = 0;
        let discPrice = 0;
        let totalQty = 0;
        cartItems.map((cartItem) => { 
            return(
                    totalQty += cartItem.qty,
                    totalPrice += cartItem.discountPrice * cartItem.qty,
                    orgPrice += cartItem.originalPrice * cartItem.qty,
                    discPrice += (cartItem.originalPrice - cartItem.discountPrice) * cartItem.qty
                    )})

        setQty(totalQty)
        setTotal(totalPrice)
        setOriginalPrice(orgPrice)
        setDiscountedPrice(discPrice)
    }

    useEffect(() =>{
        calcAllValues();
        // eslint-disable-next-line
    }, [cartItems])

  return (
    <div className='cart-container'>

        <div className='left-cont'>
        {
            cartItems.length > 0 && cartItems.map((item) => (
                <div className="card-cart" key={item._id}>
                    <div className="horizontal-card">
                    <img className="horizontal-card-img" src={item.imageSrc} alt={item.name}/>
                    <div className="horizontal-card-contents">
                    <h3>{item.name}</h3>
                    <div className='qty-cont'>
                        <button className='qty-btn green' onClick={() => incrementQty(item._id)}>+</button>
                         {item.qty}
                        <button className='qty-btn red' onClick={() => decrementQty(item._id)}>-</button>
                    </div>
                    <div className="crd-btn">
                        <button className="btn outline-green" onClick={() => removeFromCart(item._id) }>Remove from cart</button>
                        <button className="btn outline-red" onClick={() => {removeFromCart(item._id); addToWishlist(item) }}>Add to wishlist</button>
                    </div>
                    </div>
                    </div>
                </div>
                       
            ))
        }
        </div>

        <div className='side-bar'>
            <div>Total { qty } { qty === 1  ? "item" : "items"} </div>
            <div className='side-bar-text'>Original price <span className="side-bar-values striken-text"> { originalPrice } </span> </div>
            <div className='side-bar-text'>Total discount<span className="side-bar-values "> { discountedPrice } </span> </div>
            <div className='side-bar-text'>Delivery charges<span className="side-bar-values "> { total >= 30000 ? "1000" : "0" } </span> </div>
            <div className='side-bar-text total'>Net Total <span className="side-bar-values total"> { total >= 30000 ? total + 1000 : total } </span> </div>
        </div>

    </div>
  )
}   

export { Cart }


