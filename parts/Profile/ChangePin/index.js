import React from 'react'
import style from '../../../styles/changepin.module.css'
import Router from 'next/router'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../.././../components/base/UserContext'
import axios from 'axios'
import swal from 'sweetalert'


function ChangePin() {
  const [context, setContext] = useContext(UserContext);

  const iduser = context.id
  const [formChangePin, setFormChangePin] = useState({
    idUser: iduser,
    pin: '',
    newpin: ''
  })


  const handleFormPin = (e) =>{
    setFormChangePin({
      ...formChangePin,
      [e.target.name]: e.target.value
    })
  }

  const handleChangePin = (e)=>{
    e.preventDefault();
    axios.put(`${process.env.api}/users/updatepin`, formChangePin)
      .then((res) => {
          console.log(res.data.status)
          if(res.data.data === null){
            swal(`Incorect Current Pin`)
          } else{
            swal(`Success Update Pin`)
            Router.push(`/main/profile`)
          }
      })
      .catch((err) => {
          console.log(err);
      }) 
  }
  // console.log(iduser);
  return (
    <div>
      <div className={style["changepassword-card"]}>
        <p className={style["title"]}>Change Pin</p>
        <br/>
        <p className={style["desc"]}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
        
        <form className={style["password-form-box"]}>
          <div className="form-group">
            <input 
              type="password" 
              className={style["form-password"]} 
              id="pin"
              name="pin" 
              // maxlength="6"
              placeholder="Enter Your Current Pin"
              value={formChangePin.pin}
              onChange={(e)=>handleFormPin(e)}
            />
            <br/>
            <input 
              type="password" 
              className={style["form-password"]} 
              id="newpin" 
              name="newpin"
              // maxlength="6"
              placeholder="Enter Your New Pin"
              value={formChangePin.newpin}
              onChange={(e)=>handleFormPin(e)}
            />
            
          </div>
        </form>

        <button 
            className={style["btn-change-password"]}
            type="submit"
            onClick={handleChangePin}
          > Change Pin
          </button>
        

      </div>
    </div>
  )
}

export default ChangePin
