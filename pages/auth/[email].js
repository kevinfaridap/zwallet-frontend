import React, {useState } from 'react'
import style from '../../styles/verify.module.css'
import axios from 'axios'
import swal from 'sweetalert'
import Router from 'next/router'
import { useRouter } from 'next/router'

function Verify() {
  const router = useRouter()
  const {email} = router.query
  if(email == undefined){
    return (
      <>
      Loading.....
      </>
    )
  } else {

    // const emailResult = email.substring(6)
    const [verifyAcc, setVerifyAcc] = useState({
    email: email
  })
  
  console.log(email);
  
  
  
  const handleVerify = (e)=>{
    e.preventDefault();
    axios.put(`${process.env.api}/users/verify`, verifyAcc)
    .then((res) => {
      console.log(res);
      swal('Success Verify')
      Router.push("/auth/signin")
    })
    .catch((err) => {
      console.log(err);
    }) 
  }
  
  
  return (
    <div>
      <p className={style["teks"]}>Click here to verify</p>
      <button
        type="submit"
        className={[["btn"], style["btn-verify"]].join(" ")}
        onClick={handleVerify}
      >
        Verify
      </button>
    </div>
  )
  }
}

export default Verify
