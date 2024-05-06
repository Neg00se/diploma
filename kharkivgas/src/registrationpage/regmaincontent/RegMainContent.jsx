import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../regimages/logo.png";
import banner from "../regimages/regbanner.jpeg";
import "./regmaincontent.css";
import { useRegisterMutation } from "../../features/registration/registerApiSlice";
import validator from "validator";

export default function RegMainContent() {
  const [contractNumber, setContractNumber] = useState(""); // Состояние для номера договора
  const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса согласия
  const [error, setError] = useState(""); // Состояние для ошибки
  const [isRegistered, setIsRegistered] = useState(false); // Состояние для отображения благодарности за регистрацию

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pwd, setPwd] = useState("");
  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const navigate = useNavigate();

  const validate = (value) => {
    setPwd(value);
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError("");
    } else {
      setError(
        "Пароль повинен бути довжиною щонайменше 6 символів , складатися з літер латинського алфавіту , мати мінімум 1 велику літеру , 1 маленьку літеру, 1 цифру та 1 символ "
      );
    }
  };

  const handleContractNumberChange = (e) => {
    setContractNumber(e.target.value);
    setError(""); // Сбрасываем ошибку при изменении номера договора
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    setError(""); // Сбрасываем ошибку при изменении состояния чекбокса
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contract number:", contractNumber);
    console.log("Is checked:", isChecked);

    if (contractNumber.length !== 9 || /\D/.test(contractNumber)) {
      setError("Будь ласка впишіть дійсний номер договору");
    } else if (!isChecked) {
      setError("Дайте згоду на обробку персональних даних");
    } else {
      setIsRegistered(!isRegistered);
      inputValue.value = ""; // Устанавливаем состояние, что пользователь зарегистрирован
    }
  };
  const inputValue = document.querySelector("input");

  const handleReg = async (e) => {
    e.preventDefault();
    try {
      await register({
        firstName: name,
        lastName: surname,
        personalCode: contractNumber,
        address: address,
        phone,
        email,
        password: pwd,
      });

      setAddress("");
      setName("");
      setSurname("");
      setPhone("");
      setEmail("");
      setPwd("");
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setError("No server response");
      } else if (err?.response.status == 400) {
        setError("Якісь з необхідних для реєстрації даних відсутні");
      } else if (err?.response?.status === 401) {
        setError("Wrong credentials");
      }
    }
  };

  const handleNameInput = (e) => setName(e.target.value);
  const handleSurnameInput = (e) => setSurname(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);
  const handleAddressInput = (e) => setAddress(e.target.value);

  return (
    <div className="login-container">
      <div className=" h-100 left-section">
        <div className="header">
          <div className="logo-header">
            <Link to="/">
              <img src={logo} alt="Kharkiv Gas Logo" className="logo" />
            </Link>
            <span>Kharkiv gas</span>
          </div>
          <div className="signup-nav">
            <span>Вже є акаунт?</span>
            <Link to="/login" className="register-button">
              Увійти
            </Link>
          </div>
        </div>

        {!isRegistered ? ( // Проверяем, зарегистрирован ли пользователь
          <form className="reg-form" onSubmit={handleSubmit}>
            <h2 className="reg-title">Приєднуйся до нас!</h2>
            <p className="reg-input-hint">
              Введіть номер вашого особового рахунка
            </p>
            <input
              className="inputField"
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
        ) : (
          <form onSubmit={handleReg} className="login-form">
            <h2 className="login-title">Введіть ваші дані</h2>
            {error && <p className="error-message">{error}</p>}{" "}
            <p className="login-input-hint">ім'я</p>
            <input
              className="inputField"
              value={name}
              onChange={handleNameInput}
              required
              type="text"
              placeholder="Ім'я"
            />
            <p className="login-input-hint">Прізвище</p>
            <input
              className="inputField"
              value={surname}
              onChange={handleSurnameInput}
              required
              type="text"
              placeholder="Прізвище"
            />
            <p className="login-input-hint">Ваш номер телефону</p>
            <input
              className="inputField"
              value={phone}
              onChange={handlePhoneInput}
              required
              type="tel"
              placeholder="Телефон"
            />
            <p className="login-input-hint">Ваш номер e-mail</p>
            <input
              className="inputField"
              value={email}
              onChange={handleEmailInput}
              required
              type="email"
              placeholder="email"
            />
            <p className="login-input-hint">Ваша адреса</p>
            <input
              className="inputField"
              value={address}
              onChange={handleAddressInput}
              type="text"
              placeholder="адреса"
            />
            <p className="login-input-hint">Створіть надійний пароль</p>
            <input
              value={pwd}
              onChange={(e) => validate(e.target.value)}
              required
              type="password"
              placeholder="Пароль"
            />
            <button type="submit" className="login-button">
              Зареєструватись
            </button>
          </form>
        )}
      </div>
      <div className="right-section">
        <img src={banner} alt="Banner" className="banner" />
      </div>
    </div>
  );
}
