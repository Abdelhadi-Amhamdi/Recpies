import React from 'react';
import {ServicesData} from '../content'
const Services = () => {

    return(
          <div className="services">
            <div className="row">
              {ServicesData.map((item , index) => {
                return (
                  <div className="col-md-4 flip-card" key={index}>
                    <div className="card-front">
                      {item.img}
                      <h1>{item.h1}</h1>
                    </div>
                    <div className="card-back">
                      <div className="icon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </div>             
                  </div>
                );
              })}
            </div>
          </div>
    );
}

export default Services ;