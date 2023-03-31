import React, { useState } from "react";
import Header from "./Header";
import "./Grid.css";
import Dummy from "./Data.json"

const Grid = () => {
    const [Data,setData] = useState(Dummy)

  const handleSort = () => {
    console.log("clicked");

    Dummy.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(Dummy)
  };

  return (
    <>
      <div className="Container">
        <Header handleSort={handleSort} />

        <div className="inner-container" id="inner-container">
          {Data.map((ele) => {
            return (
              <div className="images" key = {Data.id}>
                <img src={ele.url} alt="notFound" />
                <h2>{ele.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Grid;


