import React from "react";

const Show = ({ data }) => {
  return (
    <div className="row" id="Show">
      <div className="col-md-6">
        <img src={data.image} alt="show imgae" />
      </div>
      <div className="col-md-6">
        <div className="text">
          <h1>{data.title}</h1>
          <ul className="howtomake">
            {data.ma9adir.map((item , index)=> {
              return(
                <li key={index}>{item}</li>
              )
            })}
          </ul>
          <div
            className="btn"
            onClick={() => {
                let Favs = [];
                const item = window.localStorage.getItem("favs");
                if (item){
                  Favs = JSON.parse(localStorage.getItem("favs"));
                }
                Favs.unshift(data);
                localStorage.setItem("favs", JSON.stringify(Favs));
              
            }}
          >
            Add it to favourits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
