import React from 'react'
import style from '../../../styles/changepassword.module.css'
import Router from 'next/router'


function ChangePassword() {
  const handleChangePassword = () =>{

  }
  return (
    <div>
      <div className={style["changepassword-card"]}>
        <p className={style["title"]}>Change Password</p>
        <br/>
        <p className={style["desc"]}>You must enter your current password and then type your new password twice.</p>
        
        <form className={style["password-form-box"]}>
          <div className="form-group">
            <input 
              type="password" 
              className={style["form-password"]} 
              id="exampleInputPassword1" 
              placeholder="Current Password"
            />
            <br/>
            <input 
              type="password" 
              className={style["form-password"]} 
              id="exampleInputPassword1" 
              placeholder="New Password"
            />
            <br/>
            <input 
              type="password" 
              className={style["form-password"]} 
              id="exampleInputPassword1" 
              placeholder="New Password"
            />
          </div>
        </form>

        <button 
            className={style["btn-change-password"]}
            type="button"
            onClick={handleChangePassword()}
          > Change Password
          </button>
        

      </div>
    </div>
  )
}

export default ChangePassword
