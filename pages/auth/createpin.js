import React from 'react'
import style from '../../styles/createpin.module.css'
import Link from 'next/link'

function createpin() {
  const handleSubmit = () => {
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
          <p className={style["desc"]}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</p>
          <p className={style["transfer-desc"]}>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>  
         
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

export default createpin
