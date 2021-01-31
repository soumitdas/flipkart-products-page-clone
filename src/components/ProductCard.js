import { useHistory } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ data }) => {
  const { addToCart } = useCart();
  const history = useHistory();

  const handleButtonClick = () => {
    addToCart(data);
    history.push("/cart");
  };
  return (
    <div className="product-card">
      <div className="product-card-content">
        <img src={data.image} alt={data.name} />
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
        <ul className="product-size-list">
          {data.sizes.map((size, i) => (
            <li key={i}>{size}</li>
          ))}
        </ul>
      </div>
      <button className="btn btn-full" onClick={handleButtonClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
