import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, defaultShops, SortData, Default, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex flex5'>
          <Catg SortData={SortData} />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Мобильные телефоны </h2>
              </div>
              <div className='heading-right row '>
                <span>Посмотреть все</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  flex2'>
              <ShopCart
                Default={Default}
                addToCart={addToCart}
                defaultShops={defaultShops}
                shopItems={shopItems}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
