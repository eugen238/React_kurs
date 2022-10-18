import React from "react";
import "./Vendor.css";

const Vender = () => {
  return (
    <>
      <div className='flex user_container'>
        <label>
          <h2>Вход в Аккаунт Продовца</h2>
        </label>
        <div className='flex'>
          <input
            placeholder='Логин...'
            className='input_user login'
            type='text'
          />
          <input
            placeholder='Пароль...'
            className='input_user password'
            type='text'
          />
          <button className='confirm-button'>Войти</button>
        </div>
      </div>
    </>
  );
};

export default Vender;
