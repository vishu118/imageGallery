import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = ({ handleSort,Data }) => {
  // const [input, setinput] = useState(true);
  const [order,setorder] = useState('ASC')

  const handleChange = (e) => {
    let container = document.getElementById("inner-container");

    if (container.style.display !== "flex") {
      container.style.display = "flex";
    } else {
      container.style.display = "block";
    }
  };


  const sorting = (col)=>{
    if(order === "ASC"){
        const sorted = [...Data].sort((a,b)=>
        a[col].toLowerCase()>b[col].toLowerCase()?1:-1
        )
        setorder(sorted)
        setorder('DEC')
    }
    if(order === "DSC"){
        const sorted = [...Data].sort((a,b)=>
        a[col].toLowerCase()<b[col].toLowerCase()?1:-1
        )
        setorder(sorted)
        setorder('ASC')
    }
}

 
  return (
    <div className="head">
    <div className="title">

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
        <button className="btn" onClick={()=>sorting('name')}>
          Sort
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
