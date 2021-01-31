import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import SaveLaterItem from "../components/SaveLaterItem";
import { useCart } from "../hooks/useCart";

const CartView = () => {
  // TODO: Remove the inline styles..
  const { cart, saveLater, subTotal, discount } = useCart();
  return (
    <div className="cart-container">
      <div className="cart-container-left">
        <div className="cart-body">
          <h2 className="cart-container-left-header">
            My Cart {cart.length > 0 && `(${cart.length})`}
          </h2>
          <div className="cart-container-left-header-content">
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <CartItem key={cartItem.id} data={cartItem} />
              ))
            ) : (
              <div
                style={{
                  fontSize: "2rem",
                  margin: "5rem auto",
                  textAlign: "center",
                }}
              >
                <h3>Cart Empty!</h3>
                <Link to="/">Back to Store</Link>
              </div>
            )}
          </div>
          <div className="cart-container-left-header-footer"></div>
        </div>
        {saveLater.length > 0 && (
          <div className="savelater-body">
            <h2>Saved for later ({saveLater.length})</h2>
            <div className="cart-container-left-header-content">
              {saveLater.map((saveLaterItem) => (
                <SaveLaterItem key={saveLaterItem.id} data={saveLaterItem} />
              ))}
            </div>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-container-right">
          <h2
            style={{
              marginBottom: "2rem",
            }}
          >
            Price Details
          </h2>
          <div className="price-level">
            <h4
              style={{
                fontSize: "2rem",
              }}
            >
              Price
            </h4>
            <h4 className="product-price">{subTotal}</h4>
          </div>
          <div
            className="price-level"
            style={{
              color: "#388e3c",
            }}
          >
            <h4
              style={{
                fontSize: "2rem",
              }}
            >
              Discount
            </h4>
            <h4 className="product-price">-{discount}</h4>
          </div>
          <div className="price-level">
            <h3
              style={{
                fontSize: "2.5rem",
              }}
            >
              Total
            </h3>
            <h3
              className="product-price"
              style={{
                fontSize: "2.5rem",
              }}
            >
              {subTotal - discount}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
