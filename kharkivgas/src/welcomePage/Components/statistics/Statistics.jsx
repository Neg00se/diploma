import React from "react";
import "./statistics.css";
export default function Statistics() {
  return (
    <div>
      <div className="statistics-wrap">
        <div className="statistics-row">
          <div className="statistics-content">
            <div className="statistic-numbers">2+ млн</div>
            <div className="statistic-desc">людей вже є нашими клієнтами</div>
          </div>
          <div className="statistics-content">
            <div className="statistic-numbers">567 млн</div>
            <div className="statistic-desc">м3 газу поставлено у 2023 році</div>
          </div>
          <div className="statistics-content">
            <div className="statistic-numbers">7 років</div>
            <div className="statistic-desc">безперервного газопопостачання</div>
          </div>
        </div>
      </div>
    </div>
  );
}
