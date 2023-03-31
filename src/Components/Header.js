import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = ({ handleSort }) => {
  const [input, setinput] = useState(true);

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
      <h1>Image Gallery</h1>
      <div className="searchField">
        <input
          type="text"
          placeholder="Search For Image......"
        />
      </div>
      <div>
        <button className="btn" onClick={handleChange}>
          Change
        </button>
        <button className="btn" onClick={handleSort}>
          Sort
        </button>
      </div>
    </div>
  );
};

export default Header;
