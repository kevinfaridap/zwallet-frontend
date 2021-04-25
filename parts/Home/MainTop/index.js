import React from 'react'
import style from '../../../styles/homemaintop.module.css'
import Router from 'next/router'

function MainTop({price, phonenum}) {

  return (
    <div>
      <div className={style["saldo-box"]}>
        <div className="row">
          <div className="col">
            <p className={style["balance"]}>Balance</p>
            <br/>
            <p className={style["amount"]}>Rp{price}</p>
            <br/>
            <p className={style["phone-numb"]}>{phonenum}</p>
          </div>
          <div className="col-lg-3">
            <button 
              className={style["btn-transfer"]}
              type="button"
              onClick={() => Router.push('/main/transfer')}
            >
              Transfer
            </button>
            <br/>
            <button 
              className={style["btn-top-up"]}
              type="button"
              onClick={() => Router.push('/main/topup')}
            >
              Top Up
            </button>
          </div>
        </div>
        

      </div>     
    </div>
  )
}

export default MainTop
