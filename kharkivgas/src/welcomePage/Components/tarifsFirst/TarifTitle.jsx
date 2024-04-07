import React from 'react'
import './tariftitle.css'
export default function TarifTitle() {
  return (
	 <div>
		<div className="tarifs-title__wrap">
		<div className="tarifs-title__container" id='tarifs'>
      <div className="tarifs-title__leftpart">
        <h2>Ми хочемо, щоб вам було зручно</h2>
        <a href="#tarifs" className=" yellow main-button">Більше про тарифи</a>
				</div>
      <div className="tarifs-title__rightpart">
        <p>
          Не знаємо як хто, а ми вже втомилися від
          того, що люди мають витрачати купу часу на
          вирішення газових питань. Зручний сервіс є
          всюди, окрім комунальної сфери. Це ой як
          неправильно! Ми робимо так, щоб ви більше
          ніколи не відчували, що ця різниця існує.
        </p>
      </div>
    </div>
	 </div>

	 </div>
  )
}
