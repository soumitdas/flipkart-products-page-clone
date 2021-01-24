export const fetchProducts = () => {
  return fetch("/api/products.json").then((r) => r.json());
};
