import React from "react";
import "./style.css";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  console.log(CartItem);
  console.log(addToCart);
  console.log(decreaseQty);

  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">Товаров нет</h1>
            )}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      <div>
                        ${item.price}.00 * {item.qty}
                      </div>
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function flexb">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>

                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Сумма покупок</h2>
            <div className=" d_flex1">
              <h4>Итоговая цена :</h4>
              <h3>${totalPrice}.00</h3>
            </div>

            <button
              onClick={() => console.log("Данила любит много героина!!!")}
              className="btn"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
