import style from '../../../styles/navbar.module.css'
import {useState, useEffect, useContext} from 'react'
// import axios from 'axios'
// import axiosApiInstance from '../../../helper/axios'
import UserContext from '../../base/UserContext'
import Router from 'next/router'



function Navbar({user, name, phonenumber}) {
  const [context, setContext] = useContext(UserContext);

  // Destructuring dari _app.js / get profile user
  // const {firstname, phone} = useContext(UserContext);

  let isAuthenticated;
    if (typeof window !== "undefined") {
        isAuthenticated = localStorage.getItem("token");
    }
  // const isAuthenticated = localStorage.getItem('token')
  //====== Jika belum login =====
  if(!isAuthenticated){
    return (
      <div>
        <nav className={[["navbar"], ["navbar-expand-lg"], style["navbar-style"]].join(' ')}>
          <div className="container">
            <a className="navbar-brand" href="#">Zwallet</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                <button
                  type="button"
                  className={[["btn"], style["nav-btn-signup"]].join(" ")}
                  onClick={() => Router.push('/auth/')}
                >
                  Sign Up
                </button>
                </li>
                <li className="nav-item">
                <button
                  type="button"
                  className={[["btn"], style["nav-btn-signin"]].join(" ")}
                  onClick={() => Router.push('/auth/signin')}
                >
                  Sign In
                </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  // Jika Logined
  return (
      <div>
        <nav className={[["navbar"], ["navbar-expand-lg"], style["navbar-style"]].join(' ')}>
          <div className="container">
            <a className="navbar-brand" href="#">Zwallet</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  {/* <img className={style["user-img"]} src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png" alt=""/> */}
                  <img className={style["user-img"]} src={context?.image} alt=""/>
                </li>
                <li className="nav-item">
                  <p className={style["username"]}>{context?.firstName}</p>
                  <p className={style["phone-number"]}>{context?.phoneNumber}</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  
}

export default Navbar
