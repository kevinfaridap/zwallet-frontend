import React from 'react'
import style from '../../../styles/changepassword.module.css'
import Router from 'next/router'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../.././../components/base/UserContext'
import axios from 'axios'
import swal from 'sweetalert'

function ChangePassword() {
  const [context, setContext] = useContext(UserContext);

  const iduser = context.id
  const [formChangePassword, setFormChangePassword] = useState({
    idUser: iduser,
    password: '',
    newpassword: ''
  })

  const handleFormPassword = (e) =>{
    setFormChangePassword({
      ...formChangePassword,
      [e.target.name]: e.target.value
    })
  }

  const handleChangePassword = (e) =>{
    axios.put(`${process.env.api}/users/changepassword`, formChangePassword)
      .then((res) => {
          console.log(res.data.status)
          if(res.data.data === null){
            swal(`Incorect Current Password`)
          } else{
            swal(`Success Update Password`)
            Router.push(`/main/profile`)
          }
      })
      .catch((err) => {
          console.log(err);
      }) 
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
              placeholder="Current Password"
              id="password"
              name="password"
              value={formChangePassword.password}
              onChange={(e)=>handleFormPassword(e)}
            />
            <br/>
            <input 
              type="password" 
              className={style["form-password"]} 
              placeholder="New Password"
              id="newpassword"
              name="newpassword"
              value={formChangePassword.newpassword}
              onChange={(e)=>handleFormPassword(e)} 
            />
            {/* <br/>
            <input 
              type="password" 
              className={style["form-password"]} 
              id="exampleInputPassword1" 
              placeholder="New Password"
            /> */}
          </div>
        </form>

        <button 
            className={style["btn-change-password"]}
            type="button"
            onClick={handleChangePassword}
          > Change Password
          </button>
        

      </div>
    </div>
  )
}

export default ChangePassword
