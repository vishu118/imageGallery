
import "./Grid.css";


const Grid = ({Data,Search,view}) => {




  return (
    <>
      {
        view ? (
         
     
          <div className="Container">
        <div className="inner-container" id="inner-container">
          {Data.filter(ele=>ele.name.toLowerCase().includes(Search)).map((ele) => {
            return (
              <div className="list-wrapper" key={Data.id}>
              
                <div className="list-images" >
                 <h2 className="list-img-title">{ele.name}</h2>
                  <img src={ele.url} alt="notFound" />
                  
                 
               
                </div>
              </div>
            );
          })}
        </div>
      </div>
        ):(
          <div className="Container">
        <div className="inner-container" id="inner-container">
          {Data.filter(ele=>ele.name.toLowerCase().includes(Search)).map((ele) => {
            return (
              <div className="grid-wrapper" key={Data.id}>
              
                <div className="grid-images" >
                  <img src={ele.url} alt="notFound" />
                  <div className="grid-images-title">
                 <h2 className="grid-img-title">{ele.name}</h2>
                  </div>
               
                </div>
              </div>
            );
          })}
        </div>
      </div>
        )
      }
    </>
  );
};

export default Grid;
