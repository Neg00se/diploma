import React from "react";
import "./tarifsmain.css";
import wallet from "../tarifsmain/images/wallet.png";
import home from "../tarifsmain/images/home.png";
import gas from "../tarifsmain/images/gas.png";

export default function Tarifsmain() {
  return (
    <div>
      <section className="tariff-plans-section">
        <h2 className="section-title">Тарифні плани для дому</h2>
        <div className="tariff-cards">
          <div className="tariff-card">
            <img src={wallet} alt="tarif" />
            <h3>Тарифний план «Економ»</h3>
            <p>
              <span>Ціна за м3.</span> 7,96 грн
            </p>
            <ul className="tarif-card__list">
              <li>Ціна діє 12 місяців</li>
              <li>Сплачуєте за фактом споживання</li>
              <li>Підключення автоматичне</li>
            </ul>
            <button>Обрати</button>
          </div>
          <div className="tariff-card">
            <img src={home} alt="tarif" />
            <h3>Тарифний план «Фіксований»</h3>
            <p>
              <span>Ціна за м3.</span> 8,96 грн
            </p>
            <ul className="tarif-card__list">
              <li>Ціна діє 12 місяців</li>
              <li>Сплачуєте за фактом споживання</li>
              <li>Підключення автоматичне</li>
            </ul>
            <button>Обрати</button>
          </div>
          <div className="tariff-card">
            <img src={gas} alt="tarif" />
            <h3>Тарифний план «Преміум»</h3>
            <p>
              <span>Ціна за м3.</span> 9,96 грн
            </p>
            <ul className="tarif-card__list">
              <li>Ціна діє 12 місяців</li>
              <li>Сплачуєте за фактом споживання</li>
              <li>Підключення автоматичне</li>
            </ul>
            <button>Обрати</button>
          </div>
        </div>
      </section>
    </div>
  );
}
