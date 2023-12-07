import { Link } from "react-router-dom";
import { Card, Layout, PriceSidebar, QuantityHandler } from "../../Components";
import { useCart } from "../../context/Cart-context";
import "./cart.css"

const CartPage = () => {
  const {
    cartState: { cartItems },
    removeFromCart,
    incrementQty,
    decrementQty,
  } = useCart();

  return (
    <Layout>
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
                      <QuantityHandler
                        decrementFunc={decrementQty}
                        incrementFunc={incrementQty}
                        removeFunc={removeFromCart}
                        item={item}
                      />
                    }
                  />
                ))}
            </div>
            <PriceSidebar items={cartItems} />
          </>
        ) : (
          <h1 className="common-empty-heading">
            Your cart is empty ! Please add items from{" "}
            <Link to="/products" className="home-link">
              Products
            </Link>{" "}
          </h1>
        )}
      </section>
    </Layout>
  )
};

export { CartPage };
