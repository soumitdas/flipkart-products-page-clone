const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      <img src={data.image} alt={data.name} />
      <h4 className="product-brand">{data.brand}</h4>
      <h3 className="product-title">{data.name}</h3>
      <h4 className="product-price">{data.price}</h4>
      <ul className="product-size-list">
        {data.sizes.map((size, i) => (
          <li key={i}>{size}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
