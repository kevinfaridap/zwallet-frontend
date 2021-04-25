import React from 'react'
import style from '../../../styles/mainhistory.module.css'

function MainHistory() {
    return (
        <div>
          <div className={style["history-box"]}>
            <p className={style["title"]}>Transaction History</p>
            <br/>
            <p className={style["this-week"]}>This Week</p>
            <br/>
            <div className="row">
              <div className="col-lg-2">
                <div className={style["target-img"]}></div>
              </div>
              <div className="col-lg-2">
                <p className={style["target-name"]}>Netflix</p>
                <p className={style["target-type"]}>Subscription</p>
              </div>
              <div className="col">
                <p className={style["target-amount"]}>Rp59.000</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainHistory
