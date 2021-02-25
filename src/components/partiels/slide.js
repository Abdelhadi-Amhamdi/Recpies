import React from "react";
import { slideText } from "../content";

const Slider = () => {
  return (
    <>
      <div className="slide">
        <div className="row">
          <div className="col-md-6 img">
            <img src="./img/slide1.jpg" alt="" />
          </div>
          <div className="col-md-6 text">
            <h1>
              <span>New Recipes </span>
              {slideText.h1}
            </h1>
            <h2>{slideText.h2}</h2>
            <p>{slideText.p}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
