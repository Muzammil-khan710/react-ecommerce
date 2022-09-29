import React,{useState, useEffect} from 'react'
import { useCart } from '../../context/Cart-context'
import "./CartPage.css"

const Cart = () => {

    const { state: {cart}, dispatch } = useCart();

    const [total, setTotal] = useState();
    const [originalPrice, setOriginalPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [qtyCounter, setQtyCounter] = useState(0);


    const discountpriceReducer = () => {
        setDiscountPrice(cart.reduce((acc, curr) => acc + Number(curr.discountPrice), 0));
    }

    const originalPriceReducer = () => {
        setOriginalPrice(cart.reduce((acc, curr) => acc + Number(curr.originalPrice), 0));
    }

    const disPriceReducer = () => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.discountPrice ), 0));
    }


    useEffect(() => {
        discountpriceReducer(); originalPriceReducer(); disPriceReducer()
    }, )


  return (
    <div className='cart-container'>

        <div className='left-cont'>
        {
            cart.map((item) => (
                <div className="card-cart">
                    <div className="horizontal-card">
                    <img className="horizontal-card-img" src={item.imageSrc} alt={item.name}/>
                    <div className="horizontal-card-contents">
                    <h3>{item.name}</h3>
                    <div className='qty-cont'>
                        <button className='qty-btn green' onClick={() => setQtyCounter((prev) => prev + 1)}>+</button>
                         {qtyCounter}
                        <button className='qty-btn red' onClick={() => setQtyCounter((prev) => prev - 1)}>-</button>
                    </div>
                    <div className="crd-btn">
                        <button className="btn outline-green" onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })

                          }}>Remove from cart</button>
                        <button className="btn outline-red">Add to wishlist</button>
                    </div>
                    </div>
                    </div>
                </div>
                       
            ))
        }
        </div>

        <div className='side-bar'>
            <div>Total {cart.length} items </div>
            <div className='side-bar-text'>Original price <span className="side-bar-values striken-text"> {originalPrice}</span> </div>
            <div className='side-bar-text'>After discount<span className="side-bar-values "> {discountPrice}</span> </div>
            <div className='side-bar-text total'>Net Total <span className="side-bar-values total"> {total}</span> </div>
        </div>

    </div>
  )
}

export { Cart }


