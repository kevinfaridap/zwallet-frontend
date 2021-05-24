import {useContext, useState, useEffect} from 'react'
import style from '../../../styles/personalinfo.module.css'
import Router from 'next/router'
import UserContext from '../../../components/base/UserContext'
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'next/router'
import axiosApiInstance from '../../../helper/axios'

function PersonalInfo() {
  const router = useRouter()
  const [context, setContext] = useContext(UserContext);
  useEffect(()=>{
    axiosApiInstance.get(`${process.env.api}/users/profile`)
    .then((res)=>{
      const dataUser = res.data.data[0]
      setContext(dataUser)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  const firstNameDef = context.firstName
  const lastNameDef = context.lastName
  const iduser = (context.id !== undefined) ? context.id : '';
  const [formUpdateProfile, setFormUpdateProfile] = useState({
    firstName: '',
    lastName: '',
    idUser: iduser
  })

  console.log(formUpdateProfile.idUser, 'fasfas');

  
  const handleFormUpdate = (e) =>{
    setFormUpdateProfile({
      ...formUpdateProfile,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateProfile = (e)=>{
    e.preventDefault();
    axios.put(`${process.env.api}/users/updateprofile`, formUpdateProfile)
      .then((res) => {
        console.log(res.data)
        if(res.data){
          swal(`Success Update Profile`)
          Router.push(`/main/profile`)
        } 
      })
      .catch((err) => {
          console.log(err);
      }) 
  }
  
  const managePhone = (e)=>{
    Router.push('./phonenumber')
  }
  return (
    <div>
      <div className={style["personalinfo-card"]}>
        <p className={style["title"]}>Personal Info</p>
        {/* <br/> */}
        <p className={style["desc"]}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>First Name</p>
            <input 
              type="text" 
              className={style["form-firstname"]} 
              id="firstName"
              name="firstName"
              placeholder={context?.firstName}
              value={formUpdateProfile.firstName}
              onChange={(e)=>handleFormUpdate(e)}
            />
            {/* <p className={style["value"]}>{context.firstName}</p> */}
          </div>
        </div>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>Last Name</p>
            <input 
              type="text" 
              className={style["form-firstname"]} 
              id="lastName"
              name="lastName"
              placeholder={context?.lastName}
              value={formUpdateProfile.lastName}
              onChange={(e)=>handleFormUpdate(e)}
            />
            {/* <p className={style["value"]}>{context.lastName}</p> */}
          </div>
        </div>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>Verified E-mail</p>
            <p className={style["value"]}>{context.email}</p>
          </div>
        </div>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>Phone Number</p>
            <p className={style["value"]}>{context.phoneNumber}</p>
          </div>
          <button 
            className={style["btn-manage-phonenumber"]}
            type="button"
            onClick={managePhone}
          > Manage
          </button>
          
        </div>
        <button 
            className={style["btn-update"]}
            type="submit"
            onClick={handleUpdateProfile}
          > Update Profile
          </button>
        

      </div>
    </div>
  )
}

export default PersonalInfo
