import React from 'react'
import style from '../../styles/profile.module.css'
import Router from 'next/router'

function Profile({userFullName, phoneNumber}) {
  const handleUpdate = () =>{

  }
  const handleLogout = () => {

  }
  return (
    <div>
      <div className={style["profile-card"]}>
        <img className={style["user-img"]} src="https://img.icons8.com/bubbles/2x/user-male.png" alt=""/>
        <button 
          className={style["btn-update"]}
          type="button"
          onClick={handleUpdate()}
        > Edit
        </button>
        <br/>
        <p className={style["user-name"]}>{userFullName}</p>
        <p className={style["phone-num"]}>{phoneNumber}</p>

        <div className="row d-flex justify-content-center">
          <div className="col mb-4 d-flex justify-content-center">
            <button 
              className={style["btn-etc"]}
              type="button"
              onClick={() => Router.push('/main/profile/personalinfo')}
            > Personal Information
            </button>
          </div>
          <div className="col mb-4 d-flex justify-content-center">
            <button 
              className={style["btn-etc"]}
              type="button"
              onClick={() => Router.push('/main/profile/changepassword')}
            > Change Password
            </button>
          </div>
          <div className="col mb-4 d-flex justify-content-center">
            <button 
              className={style["btn-etc"]}
              type="button"
              onClick={() => Router.push('/main/profile/changepin')}
            > Change Pin
            </button>
          </div>
          <div className="col mb-4 d-flex justify-content-center">
            <button 
              className={style["btn-etc"]}
              type="button"
              onClick={handleLogout()}
            > Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
