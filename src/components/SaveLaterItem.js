import { useCart } from "../hooks/useCart";

const SaveLaterItem = ({ data = {} }) => {
  const { addToCart, addToSaveLater } = useCart();
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
          <button
            className="btn btn-sml"
            onClick={() => addToSaveLater(data, true)}
          >
            REMOVE
          </button>
          <button
            className="btn btn-sml"
            onClick={() => {
              addToSaveLater(data, true);
              addToCart(data);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <h3 className="product-price">{data.offerPrice * data.quantity}</h3>
    </div>
  );
};

export default SaveLaterItem;
