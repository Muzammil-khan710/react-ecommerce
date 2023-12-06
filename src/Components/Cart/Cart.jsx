import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart-context";
import "./Cart.css";
import { Card } from "../index";

const Cart = () => {
  const {
    cartState: { cartItems },
    removeFromCart,
    incrementQty,
    decrementQty,
  } = useCart();

  const [cartTotal, setCartTotal] = useState({
    originalPrice: 0,
    discountedPrice: 0,
    total: 0,
    qty: 0,
  });

  useEffect(() => {
    const updatedCartTotal = cartItems.reduce(
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
  }, [cartItems]);

  return (
    <>
      <section className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="common-card-container">
              <h2>Your Cart</h2>
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <Card
                    item={item}
                    changeDirection={true}
                    key={item._id}
                    quantityBlock={
                      <div className="qty-cont">
                        <button
                          className="qty-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            incrementQty(item._id);
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
                              ? decrementQty(item._id)
                              : removeFromCart(item._id);
                          }}
                        >
                          -
                        </button>
                      </div>
                    }
                  />
                ))}
            </div>

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
          </>
        ) : (
          <h1 className="cart-empty-heading">
            Your cart is empty ! Please add items from{" "}
            <Link to="/products" className="home-link">
              Products
            </Link>{" "}
          </h1>
        )}
      </section>
    </>
  );
};
export { Cart };
