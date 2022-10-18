import React from "react";
import Ndata from "./Ndata";
import "./style.css";

const Cart = () => {
  return (
    <>
      <div className='content flex3 product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box1' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
