import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container flex6'>
          <div className='box'>
            <h1>Bonik</h1>
            <p>Техника для всех.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>О нас</h2>
            <ul>
              <li>Другие магазины</li>
              <li>Правила и Условия</li>
              <li>Политика безопастности</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Обслуживание клиентов</h2>
            <ul>
              <li>Центр поддержки </li>
              <li>Как купить </li>
              <li>Отследить свой товар </li>
              <li>Корпоративные и Оптовые Закупки </li>
              <li>Возвраты </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Наши контакты</h2>
            <ul>
              <li>Беларусь, Минск, ул. Бобруйская 25, 220005</li>
              <li>Email: Bonik.help@gmail.com</li>
              <li>Телефон: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
