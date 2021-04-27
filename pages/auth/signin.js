import style from '../../styles/signin.module.css'
import Layout from '../../components/base/Layout'
import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios'
import Router from 'next/router'  
import swal from 'sweetalert'
import Button from '../../components/module/Button'

// import {phoneSignin} from '../../assets/images/index'


function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
});


const handleFormChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  })
};


const handleLogin = (e) => {
    e.preventDefault();
    const urlLogin = axios.post(`${process.env.api}/users/login`, data)
    .then((res) => {
      const dataLogin = res.data.data;
      localStorage.setItem("token", dataLogin.token)
      if (dataLogin.token) {
      swal('Success Login')
      Router.push('/')
      // window.location.replace("/"); 

      // window.history.push('/')
      // Router.reload();
      
      }
    })
    .catch((err) => {
      console.log(err);
      swal('Email and Password are incorrect')
    })       
};
  

  return (
    <div>
      {/* <Layout title="" > */}
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
                <div className="form-group">
                  <input
                    type="email" className={[["form-control mt-1"], style["form-control"]].join(" ")}
                    name="email"
                    id="email"
                    placeholder="Enter your email adress"
                    value={data.email}
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
                    value={data.password}
                    onChange={(e)=>handleFormChange(e)}
                  />
                </div>
                <br/>
                <div>
                  <Link href="/forgot-password">
                    <a className={style["forgot"]}>Forgot Password?</a>
                  </Link>
                </div>
                <Button 
                  type="submit"
                  btn="btnlogin"
                  buttnname=" Sign In"
                  onClick={handleLogin}
                />
                {/* <button
                  type={"submit"}
                  className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                  onClick={handleLogin}
                >
                  Sign In
                </button> */}
               
                <div className="d-flex mt-5 mb-4">
                  <hr />
                  <p className={[style["already"]]}>
                    Don’t have an account? Lets
                    <Link href="/auth">
                    <a className={style["lets-signup"]}> Sign Up</a>
                    </Link>
                  </p>
                  <hr />
                </div>
               
              </form>
            </div>
           
          </aside>
        </main>
      {/* </Layout> */}
    </div>
  )
}

export default Login
