import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import { useShop } from "./useShop";
import User from "./common/User/User";
import Vendor from "./common/Vendor/Vendor";

function App() {
  const [items, setItems] = useState("");

  function SortData(field) {
    console.log(field);
    setItems(field);
  }

  const { shopItems } = Sdata;
  const data = useShop(shopItems, items);

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages
              addToCart={addToCart}
              shopItems={shopItems}
              SortData={SortData}
              defaultShops={data}
            />
          </Route>
          <Route path='/cart' exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path='/user' exact>
            <User />
          </Route>
          <Route path='/vendor' exact>
            <Vendor />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
