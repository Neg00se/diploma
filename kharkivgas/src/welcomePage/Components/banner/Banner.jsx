import React from "react";
import './banner.css'
import banner from '../banner/images/banner.png'


export default function Banner() {
  return (
    <div>
		 <div className="main-banner__wrap">
      <div className="main-container">
          <div className="main-banner__row">
				<div className="main-banner__content">
<h2>Незабаром передавати показники лічильника стане ще легше!</h2>
<a href="#news" className=" yellow main-button">Перейти до новин</a>
				</div>

				<div className="main-banner__img">
<img src={banner} alt="banner" />
				</div>
			 </div>
        </div>
      </div>
    </div>
  );
}
