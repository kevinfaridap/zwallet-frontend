import {useContext, useState, useEffect, useRef} from 'react'
import style from '../../styles/profile.module.css'
import Router from 'next/router'
import UserContext from '../../components/base/UserContext'
import axiosApiInstance from '../../helper/axios'
import axios from 'axios'

function Profile({userFullName, phoneNumber}) {
  const imageRef = useRef(null)
  const handleLogOut = () =>{
    const doLogout = localStorage.removeItem("token");
     if(doLogout){
       swal("You Have Been Logged Out!")
      }
      Router.push('/auth/signin')
   }

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


const [formUpdateImage, setFormUpdateImage] = useState({
  idUser: context!==null?context.id: null,
  image: context!==null?context.image: null
})

const handleChangeImage =(e) => {
  setFormUpdateImage({
    ...formUpdateImage,
    image: e.target.files[0]
  })
}

const handleUpdateImage = (e) =>{
  e.preventDefault();
  const formData = new FormData()

  formData.append('idUser', formUpdateImage.idUser)
  formData.append('image', formUpdateImage.image)
  imageRef.current.value = ""

  axios.put(`${process.env.api}/users/updateimage`, formData)
 .then((res) => {
   console.log(res.data, 'updataea image');
    if(res.data.message === "Succes update Image"){
      setFormUpdateImage(res.data.data.image)
      swal(`Success Update Image`)
      Router.push(`/main/home`)
    } else if(res.data.message=== 'File too large'){
      swal('File too large. FIle Max 2 mb!')
    } else{
      swal(res.data.message)
    }
  })
  .catch((err) => {
      console.log(err);
  }) 
}

  return (
    <div>
      <div className={style["profile-card"]}>
        <img className={style["user-img"]} src={context?.image} alt=""/>

        <input 
          type="file" 
          className={style['form-img']} 
          name="image"
          id="image"
          title="edit"
          ref={imageRef}
          onChange={e => handleChangeImage(e)}
        />
        <button 
          className={style["btn-change-imgprofile"]}
          type="button"
          onClick={handleUpdateImage}
        > Update Image
        </button>
      
        <br/>
        <p className={style["user-name"]}>{context?.firstName} {context.lastName}</p>
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
              onClick={() => handleLogOut()}
            > Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
