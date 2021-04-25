import React from 'react'
import style from '../../styles/resetpassword.module.css'

function resetpassword() {
  const handleSubmit = () => {

  }

  const handleFormChange = () => {

  }
  return (
    <div>
      <main className={style["main"]}>
        <section className={style["auth-pins"]}>
          <h5 className={style["title"]}>Zwallet</h5>
          <br/>
          <div className={style["img-auth-phone"]}></div>
          <p className={style["teks"]}>App that Covering Banking Needs.</p>
          <p className={style["teks-desc"]}>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
          
        </section>
        <aside className={[["m-5"], style["auth-pin"]].join(" ")}>
          <p className={style["desc"]}>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</p>
          <p className={style["transfer-desc"]}>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>  

          <div className={[["d-flex justify-content-center"], style["form-container"],].join(" ")}>
              <form className="mt">
                <div className="form-group">
                  <input
                    type="email" className={[["form-control mt-1"], style["form-control"]].join(" ")}
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    onChange={handleFormChange}
                  />
                </div>
                
               
              </form>
            </div>
         
          <button
            type="submit"
            className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
            onClick={handleSubmit}
          >
            Confirm
          </button>
          
          
        </aside>
      </main>
    </div>
  )
}

export default resetpassword
