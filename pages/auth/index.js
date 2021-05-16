import React, {useState, useEffect } from 'react'
import style from '../../styles/signup.module.css'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios';
import swal from 'sweetalert';

// import { React, useState, useEffect } from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signUp, verify } from "../../configs/redux/actions/user";
// import Swal from "sweetalert2";

function index() {

  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
    firstName: '',
  });


  const handleFormChange = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value
    })
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      const urlRegis = axios.post(`${process.env.api}/users/register`, formUser)
      .then((res) => {
          // console.log(res.data)
          // swal(`Registered \n Email : ${formUser.email}`)
          swal(`Check your Email to verify`)
          Router.push('auth/signin')
      })
      .catch((err) => {
          console.log(err);
      })       
  };



  return (
    <div>
      <main className={style["main"]}>
          <section className={style["auth-logins"]}>
            <h5 className={style["title"]}>Zwallet</h5>
            <br/>
            <div className={style["img-auth-phone"]}></div>
            <p className={style["teks"]}>App that Covering Banking Needs.</p>
            <p className={style["teks-desc"]}>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
            
          </section>
          <aside className={[["m-5"], style["auth-login"]].join(" ")}>
            <p className={style["desc"]}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
            <p className={style["transfer-desc"]}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>  
            <div className={[["d-flex justify-content-center"], style["form-container"],].join(" ")}>
              <form className="mt">
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className={[["form-control mt-1"], style["form-control"]].join(
                      " "
                    )}
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your username"
                    value={formUser.firstName}
                    onChange={(e)=>handleFormChange(e)}
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    type="email" className={[["form-control mt-1"], style["form-control"]].join(" ")}
                    name="email"
                    id="email"
                    placeholder="Enter your email adress"
                    value={formUser.email}
                    onChange={(e)=>handleFormChange(e)}
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    type="password"
                    className={[["form-control mt-1"], style["form-control"]].join(
                      " "
                    )}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formUser.password}
                    onChange={(e)=>handleFormChange(e)}
                  />
                </div>
                <br/>
                <div>
                  <Link href="/forgot-password">
                    <a className={style["forgot"]}>Forgot Password?</a>
                  </Link>
                </div>
                <button
                  type="submit"
                  className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                  onClick={handleSubmit}
                  // onClick={(e)=>handleSubmit(e)}
                  // onClick={() => Router.push('/auth/signin')}
                >
                  Sign Up
                </button>
               
                <div className="d-flex mt-5 mb-4">
                  <hr />
                  <p className={[style["already"]]}>
                    Already Have account ?
                    <Link href="auth/signin">
                    <a className={style["lets-signup"]}> Sign In</a>
                    </Link>
                  </p>
                  <hr />
                </div>
               
              </form>
            </div>
           
          </aside>
        </main>
    </div>
  )
}

export default index
