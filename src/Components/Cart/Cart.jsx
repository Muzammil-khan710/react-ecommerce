import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/Cart-context'
import { useWishlist } from '../../context/Wishlist-context';
import "./Cart.css"
import { Card } from '../index';

const Cart = () => {

    const { cartState: {cartItems}, removeFromCart, incrementQty, decrementQty} = useCart();

    const { addToWishlist } = useWishlist()
    
    const [cartTotal, setCartTotal] = useState({
        originalPrice : 0,
        discountedPrice : 0,
        total : 0,
        qty: 0
    })

    useEffect(() =>{
        (() => {
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
    
            setCartTotal({...cartTotal, qty: totalQty, originalPrice: orgPrice, discountedPrice: discPrice, total: totalPrice})
        })()
        // eslint-disable-next-line
    }, [cartItems])

  return (
    <>
        { cartItems.length > 0 ? (
        <div className='cart-container'>
            <div className='left-cont'>
                { cartItems.length > 0 && cartItems.map((item) => (
                    <Card item={item} changeDirection={true} key={item._id}/>
                ))
                }
            </div>

            <div className='side-bar'>
                <div>Total { cartTotal.qty } { cartTotal.qty === 1  ? "item" : "items"} </div>
                <div className='side-bar-text'>Original price <span className="side-bar-values striken-text"> { cartTotal.originalPrice } </span> </div>
                <div className='side-bar-text'>Total discount<span className="side-bar-values "> { cartTotal.discountedPrice } </span> </div>
                <div className='side-bar-text'>Delivery charges<span className="side-bar-values "> { cartTotal.total >= 30000 ? "1000" : "0" } </span> </div>
                <div className='side-bar-text total'>Net Total <span className="side-bar-values total"> { cartTotal.total >= 30000 ? cartTotal.total + 1000 : cartTotal.total } </span> </div>
            </div>
            
        </div>
        ):(<h1>Your cart is empty ! Please add items from <Link to='/products' className='home-link'>Products</Link> </h1>)
        }
    </>
  )
}   
export { Cart }


