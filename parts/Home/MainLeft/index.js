import React from 'react'
import style from '../../../styles/homemainleft.module.css'

function MainLeft({amountincome, amountoutcome}) {
  return (
    <div>
      <div className={style["in-out-box"]}>
        <div className="row">
          <div className="col">
            <div className={style["img-down"]}></div>
            <p className={style["income"]}>Income</p>
            <p className={style["amount-income"]}>Rp{amountincome}</p>
          </div>
          <div className="col">
           <div className={style["img-up"]}></div>
            <p className={style["income"]}>Outcome</p>
            <p className={style["amount-income"]}>Rp{amountoutcome}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={style["graphic"]}></div>
            <p className={style["justimg"]}>Image</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default MainLeft
