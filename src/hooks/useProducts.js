import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [idealFor, setIdealFor] = useState([]);

  const calculateFilterParams = (resp) => {
    const sizes = [
      ...new Set(resp.reduce((prev, curr) => prev.concat(curr.sizes), [])),
    ];
    setSizes(sizes);
    const brands = [
      ...new Set(resp.reduce((prev, curr) => prev.concat(curr.brand), [])),
    ];
    setBrands(brands);
    const idealFor = [
      ...new Set(resp.reduce((prev, curr) => prev.concat(curr.idealFor), [])),
    ];
    setIdealFor(idealFor);
  };

  useEffect(() => {
    fetchProducts()
      .then((resp) => {
        setProducts(resp);
        setSortedProducts(resp);
        calculateFilterParams(resp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleSort = (sortByArg) => {
    //console.log(sortByArg);
    if (!sortByArg) return;
    switch (sortByArg) {
      case "price-low-high":
        setSortBy(sortByArg);
        setSortedProducts((prod) => [
          ...prod.sort((a, b) => a.price - b.price),
        ]);
        break;

      case "price-high-low":
        setSortBy(sortByArg);
        setSortedProducts((prod) => [
          ...prod.sort((a, b) => b.price - a.price),
        ]);
        break;

      default:
        break;
    }
  };

  // helper method to check sub-array
  function hasSubArray(master, sub) {
    return sub.every(((i) => (v) => (i = master.indexOf(v, i) + 1))(0));
  }

  // Need fix: multiple size selection check sub-array of main size array or not, but
  // ideally that shouldn't be the case.
  const handleSizes = (sizesArg) => {
    console.log(sizesArg);
    if (sizesArg.length < 1) {
      setSortedProducts([...products]);
      return;
    }
    const tempProducts = sortedProducts.filter((product) =>
      hasSubArray(product.sizes, sizesArg)
    );
    setSortedProducts([...tempProducts]);
  };
  const handleBrands = (brandsArg = []) => {
    if (brandsArg.length < 1) {
      setSortedProducts([...products]);
      return;
    }
    const tempProducts = sortedProducts.filter((product) =>
      brandsArg.includes(product.brand)
    );

    setSortedProducts([...tempProducts]);
  };
  const handleIdealFor = (idealForArgs) => {
    if (idealForArgs.length < 1) {
      setSortedProducts([...products]);
      return;
    }
    const tempProducts = sortedProducts.filter((product) =>
      idealForArgs.includes(product.idealFor)
    );

    setSortedProducts([...tempProducts]);
  };

  return {
    products: sortedProducts,
    sortBy,
    handleSort,
    sizes,
    handleSizes,
    brands,
    handleBrands,
    idealFor,
    handleIdealFor,
  };
}
