import React from "react";
import "./User.css";

const User = () => {
  return (
    <>
      <div className="flex user_container">
        <label>
          <h2>Регистрация аккаунта</h2>
        </label>
        <div className="flex">
          <input
            placeholder="Логин..."
            className="input_user login"
            type="text"
          />
          <input
            placeholder="Пароль..."
            className="input_user password"
            type="text"
          />
          <button className="confirm-button">Войти</button>
        </div>
      </div>
    </>
  );
};

export default User;
