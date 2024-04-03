import React from "react";
import { Link } from "react-router-dom"; // Импорт Link
import "./footer.css";
import facebook from "../footer/images/facebook.png";
import telegram from "../footer/images/telegram.png";
import viber from "../footer/images/viber.png";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer__leftside">
            <ul>
              <li>
                <h4>ГАРЯЧА ЛІНІЯ ПАТ «ХАРКівгаз»:</h4>
                <p href="#tarifs">Теl. 0 800 404 000</p>
                <p href="#tarifs">E-mail: hotline@khgaz.com</p>
              </li>
              <li>
                <h4>ДЛЯ ЗВЕРНЕНЬ:</h4>
                <p href="#tarifs">E-mail: office@khgaz.com</p>
              </li>
            </ul>
          </div>
          <div className="footer_rightside">
            <p className="rightside__title">Приєднуйтесь:</p>
            <div className="footer-socials">
              <ul className="social_list" id="contacts">
                <li>
                  <a href="https://www.facebook.com/">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org/">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.viber.com/ua/">
                    <img src={viber} alt="viber" />
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/login">
              <button className="tologin">Особистий кабінет</button>
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Copyright © 2024 | "Харківгаз України"</p>
        </div>
      </div>
    </div>
  );
}
