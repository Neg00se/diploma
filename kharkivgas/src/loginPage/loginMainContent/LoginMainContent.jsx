import React from "react";
import "./loginmaincontent.css";
import logo from "../loginImages/logo.png";
import { Link } from "react-router-dom";
import banner from "../loginImages/login-image.png";

export default function LoginMainContent() {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="header">
          <div className="logo-header">
            <Link to="/">
              <img src={logo} alt="Kharkiv Gas Logo" className="logo" />
            </Link>
				<span>Kharkiv gas</span>
          </div>
          <div className="signup-nav">
            <span>Немає акаунту?</span>
				<Link to="/registration">
				<a href="#!" className="register-button">
              Зареєструватися
            </a>
            </Link>
            
          </div>
        </div>

        <form className="login-form">
          <h2 className="login-title">Увійти до особистого кабінету</h2>
          <p className="login-input-hint">Ваш номер телефону або e-mail</p>
          <input type="text" placeholder="Логін" />
          <input type="password" placeholder="Пароль" />
          <div className="checkbox-container">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">Запам'ятати мене</label>
          </div>
          <button type="submit" className="login-button">
            Увійти
          </button>
        </form>
      </div>
      <div className="right-section">
        <img src={banner} alt="Banner" className="banner" />
      </div>
    </div>
  );
}
