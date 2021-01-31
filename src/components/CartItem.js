import { useState } from "react";
import { useCart } from "../hooks/useCart";

const CartItem = ({ data = {} }) => {
  const { addToCart, addToSaveLater } = useCart();
  const [qty, setQty] = useState(data.quantity);

  const handleRemove = () => addToCart(data, 0);

  const handleQtyChange = (e) => {
    setQty(e.target.value);
    addToCart(data, e.target.value - data.quantity);
  };

  return (
    <div className="product-banner-hori">
      <img src={data.image} alt={data.name} />
      <div>
        <h4 className="product-brand">{data.brand}</h4>
        <h3 className="product-title">{data.name}</h3>
        <div className="product-price-container">
          <h4 className="product-price">{data.offerPrice}</h4>
          <h4 className="product-price product-price-offer">{data.price}</h4>
          <h4 className="product-price-offer-percent">
            {Math.floor(((data.price - data.offerPrice) / data.price) * 100)}%
            off
          </h4>
        </div>
        <div className="cart-item-actions">
          <select value={qty} onChange={handleQtyChange}>
            <option value={1}>Qty: 1</option>
            <option value={2}>Qty: 2</option>
            <option value={3}>Qty: 3</option>
            <option value={4}>Qty: 4</option>
            <option value={5}>Qty: 5</option>
            <option value={6}>Qty: 6</option>
            <option value={7}>Qty: 7</option>
          </select>
          <button className="btn btn-sml" onClick={handleRemove}>
            REMOVE
          </button>
          <button className="btn btn-sml" onClick={() => addToSaveLater(data)}>
            SAVE FOR LATER
          </button>
        </div>
      </div>
      <h3 className="product-price">{data.offerPrice * data.quantity}</h3>
    </div>
  );
};

export default CartItem;
