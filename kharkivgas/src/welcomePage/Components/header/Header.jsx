import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <div className="logo-main-header">
          <img src={logo} alt="Kharkiv Gas Logo" className="logo" />
          <span>Kharkiv gas</span>
        </div>

        <div className={`main-nav ${isOpen ? "is-open" : ""}`}>
          <ul className={`${isOpen ? "is-open" : ""}`}>
            <li>
              <a href="#tarifs" onClick={closeMenu}>
                Тарифи
              </a>
            </li>
            <li>
              <a href="#news" onClick={closeMenu}>
                Новини
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={closeMenu}>
                Контакти
              </a>
            </li>
            <Link to="/login" onClick={closeMenu}>
              <button className="tologin">Особистий кабінет</button>
            </Link>
          </ul>
          <li className="header-trigger" onClick={toggleMenu}>
            <div className={`burger-icon ${isOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </div>
      </header>
    </div>
  );
}
