
import "./Grid.css";


const Grid = ({Data}) => {




  return (
    <>
      <div className="Container">
        <div className="inner-container" id="inner-container">
          {Data.map((ele) => {
            return (
              <div className="wrapper" key={Data.id}>
                <div className="images" >
                  <img src={ele.url} alt="notFound" />
                  <h2 className="img-title">{ele.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Grid;
