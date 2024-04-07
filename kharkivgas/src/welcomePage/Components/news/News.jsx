import React from "react";
import "./news.css";
export default function News() {
  return (
    <div>
      <section className="news-block-section">
        <h2 className="section-title" id="news">Останні Новини</h2>
        <div className="news-cards">
          <div className="news-card">
            <div className="news-card-cont">
              <p className="news-date-title">20 квітня 2024</p>
              <h4>
                ГК «Харківгаз» продовжує розробляти та оновлювати зручні
                онлайн-сервіси, які економлять ваш час
              </h4>
              <p className="news-description">
                Відтепер заплатити за газ можна на сайті khgas.ua без реєстрації
                в особистому кабінеті.
              </p>
            </div>
          </div>
          <div className="news-card">
            <p className="news-date-title">3 квітня 2024</p>
            <h4>Стати нашим клієнтом тепер ще простіше</h4>
            <p className="news-description">
              Завдяки інтеграції ГК "Харківгаз" та мобільного застосунку Дія
              приєднуйтеся до компанії в декілька кліків. <br /> <br />
              Через застосунок Дія ви можете надіслати копію ІПН або ID -
              картки, щоб автоматично заповнити деякі поля у заяві. І вам не
              потрібно буде вписувати їх вручну.
            </p>
          </div>
          <div className="news-card">
            <p className="news-date-title">31 березня 2024</p>
            <h4>
              Знайшли невідповідність у ваших даних на ресурсах ГК "Харківгаз" -
              відтепер все можна виправити у 3 кроки
            </h4>
            <p className="news-description">
              Відтепер змінити прізвище, номер телефона або електронну пошту на
              ресурсах ГК "Нафтогаз України" можна всього в 3 кроки на сайті
            </p>
          </div>
        </div>
        <div className="more-news">
          <a href="#">Більше новин</a>
        </div>
      </section>
    </div>
  );
}
