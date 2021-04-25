import React from 'react'
import style from '../../../styles/homemainright.module.css'

function MainRight() {
  const handleSeeAll = ()=>{

  }
  return (
    <div>
      <div className={style["history-box"]}>
        <p className="history">Transaction History</p>
        <button 
          className={style["btn-see-all"]}
          type="button"
          onClick={() => handleSeeAll()}
        >
          See all
        </button>
        <div className="row">
          <div className="col-2">
            <div className={style["target-img"]}></div>
          </div>
          <div className="col-2 ms-lg-3">
            <p className={style["target-name"]}>Netflix</p>
            <p className={style["type-transfer"]}>Subscription</p>
          </div>
          <div className="col">
            <p className={style["transaction-amount"]}>Rp50.000</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default MainRight
