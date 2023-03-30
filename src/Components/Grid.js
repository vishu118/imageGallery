import React from "react";
import Header from "./Header";
import "./Grid.css";

const Grid = () => {
  const imageArr = [
    { name: "laptop", url: "https://picsum.photos/id/2/200/" },
    { name: "View", url: "https://picsum.photos/id/10/200/" },
    { name: "random", url: "https://picsum.photos/id/23/200/" },
    { name: "Cars", url: "https://picsum.photos/id/25/200/" },
    { name: "Bike", url: "https://picsum.photos/id/29/200/" },
  ];

  const handleSort = () => {
    console.log("clicked");

    imageArr.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  return (
    <>
      <div className="Container">
        <Header handleSort={handleSort} />

        <div className="inner-container" id="inner-container">
          {imageArr.map((ele, index) => {
            return (
              <div className="images" key={index}>
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
