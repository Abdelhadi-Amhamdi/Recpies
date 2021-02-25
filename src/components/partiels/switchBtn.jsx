import React from "react";

const BtnSwith = ({ pindex, setpindex }) => {



 

  return (
    <div className="btn-switch">
      <button
        className="btn"
        style={pindex === 0 ? {opacity: .5} : {}}
        onClick={() =>
          pindex === 0 ? undefined : setpindex(prev => prev - 1 )
        }
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <button
        style={pindex === 1 ? {opacity : .5 } : pindex === 2 ? {opacity : .5} : {}}
        className="btn"
        onClick={() =>
          pindex === 0
            ? setpindex(1)
            : null
        }
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default BtnSwith;
