import React, { useState } from "react";
import "./Header.css";

const Header = ({
  Data,
  setData,
  Dummy,
  Search,
  setSearch,
  text,
  view,
  setview,
  settext,
}) => {
  const [Sorted, setSorted] = useState({ sorted: "name", reversed: false });

  const sortedByName = () => {
    setSorted({ sorted: "name", reversed: !Sorted.reversed });
    const DataCopy = [...Data];
    DataCopy.sort((a, b) => {
      if (Sorted.reversed) {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
    setData(DataCopy);
  };

  const handleChange = () => {
    setview(!view);
    settext(!text);
  };

  return (
    <div className="header">
      <div className="head">
        <h1>Image Gallery</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search For Image......"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" onClick={handleChange}>
            {text ? "Grid" : "List"}
          </button>
          <button className="btn" onClick={sortedByName}>
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
