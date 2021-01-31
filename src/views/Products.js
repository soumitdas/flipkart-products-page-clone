import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const ProductsView = () => {
  const { products } = useProducts();
  return (
    <div className="main-content">
      <h2 style={{ marginBottom: "2rem" }}>Products</h2>
      {products.length > 0 ? (
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>No Product Found</h2>
      )}
    </div>
  );
};

export default ProductsView;
