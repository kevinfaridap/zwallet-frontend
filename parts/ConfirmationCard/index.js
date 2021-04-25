import React from 'react'
import style from '../../styles/confirmation.module.css'
import Router from 'next/router'

function ConfirmationCard() {
  return (
    <div>
      <div className={style["confirmation-card"]}>
        <p className={style["title"]}>Transfer To</p>
        
        <div className={[["row"], ["mt-5"], style["receiver-box"]].join(' ')}>
          <div className="col-lg-2">
            <div className={style["img-target"]}></div>
          </div>
          <div className="col">
            <p className={style["target-name"]}>Jon Jones</p>
            <p className={style["target-number"]}>+62 813-8492-9994</p>
          </div>
        </div>
        <br/>
        <p className={style["detail"]}>Detail</p>
        <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
          <p className={style["title-detail"]}>Amount</p>
          <p className={style["value-detail"]}>Rp100.000</p>
        </div>
        <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
          <p className={style["title-detail"]}>Balance Left</p>
          <p className={style["value-detail"]}>Rp20.000</p>
        </div>
        <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
          <p className={style["title-detail"]}>Date & Time</p>
          <p className={style["value-detail"]}>May 11 2021 - 18:00</p>
        </div>
        <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
          <p className={style["title-detail"]}>Notes</p>
          <p className={style["value-detail"]}>For buying some socks</p>
        </div>

        {/* Mau nya nanti disini dikasih kondisi jika transfer success kirim ke laman confirmation/success, jika tidak ke confirmation/failed */}
        <button 
          className={style["btn-continue"]}
          type="button"
          onClick={() => Router.push('/main/confirmation/success')}
        > Continue
        </button>

      </div>
    </div>
  )
}

export default ConfirmationCard
