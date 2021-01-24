import { useEffect, useState } from "react";

const FilterItem = ({ name, list = [], handleFilter }) => {
  // Array -> Object
  const tempObj = {};
  list.forEach((el) => {
    tempObj[el] = false;
  });

  const [localState, setLocalState] = useState(tempObj);

  const handleCheckbox = (e) => {
    setLocalState({ ...localState, [e.target.value]: e.target.checked });
  };

  const handleClear = (e) => {
    e.preventDefault();
    const tempState = localState;
    list.forEach((el) => {
      tempState[el] = false;
    });
    setLocalState({ ...tempState });
  };

  useEffect(() => {
    const changedList = Object.keys(localState);
    handleFilter(changedList.filter((state) => localState[state]));
  }, [localState]);

  return (
    <div className="filter-item">
      <h3 className="filter-item-title">{name}</h3>
      <a
        href="#"
        onClick={handleClear}
        style={{
          textDecoration: "none",
          float: "right",
        }}
      >
        Clear all
      </a>
      <ul className="filter-item-list">
        {list.map((li, i) => (
          <li key={i}>
            <input
              type="checkbox"
              name={li}
              value={li}
              checked={localState[li]}
              onChange={handleCheckbox}
            />
            <label htmlFor={li}>{li}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItem;
