import useProducts from "./hooks/useProducts";
import FilterItem from "./components/FilterItem";
import ProductCard from "./components/ProductCard";
import SortItem from "./components/SortItem";

const App = () => {
  const {
    products,
    sortBy,
    handleSort,
    sizes,
    handleSizes,
    brands,
    handleBrands,
    idealFor,
    handleIdealFor,
  } = useProducts();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">Flip🙃kart</div>
      </div>
      <div className="main-content">
        <div className="main-content-left">
          <h2 className="content-title">Filter</h2>
          <div className="main-content-left-filters">
            <FilterItem name="Size" list={sizes} handleFilter={handleSizes} />
            <FilterItem
              name="Brand"
              list={brands}
              handleFilter={handleBrands}
            />
            <FilterItem
              name="Ideal For"
              list={idealFor}
              handleFilter={handleIdealFor}
            />
          </div>
        </div>
        <div className="main-content-right">
          <h2>Clothing And Accessories</h2>
          <SortItem sortBy={sortBy} handleSort={handleSort} />
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
      </div>
    </div>
  );
};

export default App;
