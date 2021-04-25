import React from 'react'
import style from '../../../styles/changepin.module.css'
import Router from 'next/router'


function ChangePin() {
  const handleChangePassword = () =>{

  }
  return (
    <div>
      <div className={style["changepassword-card"]}>
        <p className={style["title"]}>Change Pin</p>
        <br/>
        <p className={style["desc"]}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
        
        <form className={style["password-form-box"]}>
          <div className="form-group">
            <input 
              type="password" 
              className={style["form-password"]} 
              id="exampleInputPassword1" 
              maxlength="6"
              placeholder="Enter Your Pin"
            />
            
          </div>
        </form>

        <button 
            className={style["btn-change-password"]}
            type="button"
            onClick={handleChangePassword()}
          > Change Pin
          </button>
        

      </div>
    </div>
  )
}

export default ChangePin
