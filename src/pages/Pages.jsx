import React from "react";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shops/Shop";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ addToCart, defaultShops, SortData, Default, shopItems }) => {
  return (
    <>
      <NewArrivals />
      <Shop
        defaultShops={defaultShops}
        SortData={SortData}
        addToCart={addToCart}
        shopItems={shopItems}
      />
      <Wrapper />
    </>
  );
};

export default Pages;
