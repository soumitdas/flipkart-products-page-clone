const SortItem = ({ sortBy, handleSort }) => {
  return (
    <ul className="short-labels flex-align-center">
      <li>
        <strong>Sort By:</strong>
      </li>
      <li
        className={`sort-link ${
          sortBy === "price-high-low" ? "sort-link-active" : ""
        }`}
        onClick={() => handleSort("price-high-low")}
      >
        Price: High to Low
      </li>
      <li
        className={`sort-link ${
          sortBy === "price-low-high" ? "sort-link-active" : ""
        }`}
        onClick={() => handleSort("price-low-high")}
      >
        Price: Low to High
      </li>
    </ul>
  );
};

export default SortItem;
