import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../regimages/logo.png";
import banner from "../regimages/login-image.png";
import "./regmaincontent.css";

export default function RegMainContent() {
  const [contractNumber, setContractNumber] = useState(""); // Состояние для номера договора
  const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса согласия
  const [error, setError] = useState(""); // Состояние для ошибки

  const handleContractNumberChange = (e) => {
    setContractNumber(e.target.value);
    setError(""); // Сбрасываем ошибку при изменении номера договора
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setError(""); // Сбрасываем ошибку при изменении состояния чекбокса
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contractNumber.length !== 9 || /\D/.test(contractNumber)) {
      setError("Будь ласка впишіть дійсний номер договору");
    } else if (!isChecked) {
      setError("Дайте згоду на обробку персональних даних");
    } else {
      // Выполнить регистрацию
    }
  };

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
            <span>Вже є акаунт?</span>
            <Link to="/login">
              <a href="#!" className="register-button">
                Увійти
              </a>
            </Link>
          </div>
        </div>

        <form className="reg-form" onSubmit={handleSubmit}>
          <h2 className="reg-title">Приєднуйся до нас!</h2>
          <p className="reg-input-hint">
            Введіть номер вашого особового рахунка
          </p>
          <input
            type="text"
            placeholder=""
            value={contractNumber}
            onChange={handleContractNumberChange}
          />
          <p className="reg-hint-desc">
            Особовий рахунок – це персональний дев’ятизначний номер споживача
            газу. Номер особового рахунка можна знайти на паперовій платіжці у
            верхньому лівому куті
          </p>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="agree">Я даю згоду на обробку даних</label>
          </div>
			 {error && <p className="error-message">{error}</p>}{" "}
          <button type="submit" className="reg-button">
            Перейти до реєстрації
          </button>
          
        </form>
      </div>
      <div className="right-section">
        <img src={banner} alt="Banner" className="banner" />
      </div>
    </div>
  );
}
