import React, { useState } from "react";
import "./Header.css";

const Header = ({ Data, setData,Dummy }) => {
  const [Sorted, setSorted] = useState({ sorted: "name", reversed: false });
  const [Search, setSearch] = useState("");

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

  const handleSearch = (e) => {
  
    const matchedData = Data.filter((ele) => {
      if(Search == ""){
        return ele
      }else if(ele.name.toLowerCase().includes(e.target.value.toLowerCase())){
        return ele
      }
      
    });
    setData(matchedData);
    setSearch(e.target.value);
  };
  const handleChange = (e) => {
    let container = document.getElementById("inner-container");

    if (container.style.display !== "flex") {
      container.style.display = "flex";
    } else {
      container.style.display = "block";
    }
  };

  return (
    <div className="head">
      <div className="title">
        <h1>Image Gallery</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search For Image......"
            value={Search}
            onChange={handleSearch}
          />
        </div>
        <div>
          <button className="btn"
           onClick={handleChange}
           >
            Change
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
