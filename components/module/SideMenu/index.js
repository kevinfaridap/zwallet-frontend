import React from 'react'
import style from '../../../styles/sidemenu.module.css'
import Link from 'next/link'
// import Swal from "sweetalert2";
import Router from 'next/router'

function SideMenu() {
  const handleLogOut = () =>{
    const doLogout = localStorage.removeItem("token");
     if(doLogout){
       swal("You Have Been Logged Out!")
      }
      Router.push('/auth/signin')
   }

  
  return (
    <div>
      <div className={style["side-menu"]}>
        {/* <img className={style["icon-dashboard"]} src="" alt=""/> */}
        <div className="row mb-4">
          <div className="col">
            <div className={style["icon-dashboard"]}></div>
            <Link href="/" >
              <a>Dashboard</a>
            </Link>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <Link href="/main/transfer">
              <a>Transfer</a>
            </Link>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <Link href="/main/topup">
              <a>Top Up</a>
            </Link>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <Link href="/main/profile">
              <a>Profile</a>
            </Link>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <button 
            className={style["btn-logout"]}
            type="button"
            onClick={() => handleLogOut()}>
              Logout
            </button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default SideMenu
