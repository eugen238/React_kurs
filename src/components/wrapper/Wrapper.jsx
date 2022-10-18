import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Доставка по всему миру",
      decs: "Мы предлагаем конкурентоспособные цены на нашу продукцию стоимостью более 100 миллионов долларов в любом ассортименте.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Безопасная Оплата",
      decs: "Мы предлагаем конкурентоспособные цены на нашу продукцию стоимостью более 100 миллионов долларов в любом ассортименте.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Делайте Покупки С Уверенностью ",
      decs: "Мы предлагаем конкурентоспособные цены на нашу продукцию стоимостью более 100 миллионов долларов в любом ассортименте.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Поддержка ",
      decs: "Мы предлагаем конкурентоспособные цены на нашу продукцию стоимостью более 100 миллионов долларов в любом ассортименте.",
    },
  ];
  return (
    <>
      <section className='wrapper background'>
        <div className='container flex1'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
