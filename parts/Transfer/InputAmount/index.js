import React from 'react'
import style from '../../../styles/inputamount.module.css'
import Router from 'next/router'

function InputAmount() {

  return (
    <div>
      <div className={style["input-amount"]}>
        <p className={style["title"]}>Transfer Money</p>
        
        <div className={[["row"], ["mt-5"], style["receiver-box"]].join(' ')}>
          <div className="col-lg-2">
            <div className={style["img-target"]}></div>
          </div>
          <div className="col">
            <p className="target-name">Jon Jones</p>
            <p className="target-number">+62 813-8492-9994</p>
          </div>
        </div>

        <p className={style["transfer-desc"]}>Type the amount you want to transfer and then press continue to the next steps.</p>
        <br/>
        <input 
          className={[["form-control"], style["form-amount"]].join(' ')} 
          type="text" 
          placeholder="0.00"
        />
        <br/>
        <p className={style["amount-available"]}>Rp120.000 Available</p>
        <br/>
        <input 
          className={[["form-control"], style["form-notes"]].join(' ')} 
          type="text" 
          placeholder="Add some notes"
        />
        <br/>
        <button 
          className={style["btn-continue"]}
          type="button"
          onClick={() => Router.push('/main/confirmation')}
        > Continue
        </button>
      </div>     
    </div>
  )
}

export default InputAmount
