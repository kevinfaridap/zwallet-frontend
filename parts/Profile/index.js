import {useContext, useState, useEffect, useRef} from 'react'
import style from '../../styles/profile.module.css'
import Router from 'next/router'
import UserContext from '../../components/base/UserContext'
import axiosApiInstance from '../../helper/axios'

function Profile({userFullName, phoneNumber}) {
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

  // Update Image Profile
//   const iduser = (context.id !== undefined) ? context.id : '';
//   const imageRef = useRef(null)
//   const [formUpdateImage, setFormUpdateImage] = useState({
//    idUser: iduser,
//    image: ''
//  })  

//  const handleChangeImage =(e) => {
//       setFormUpdateImage({
//       ...formUpdateImage,
//       image: e.target.files[0]
//     })
//   }

//   const handleUpdateImg = (e) =>{
//     e.preventDefault()
//     const formData = new FormData()

//     formData.append('image', formUpdateImage.image)
//     imageRef.current.value = ""

//     useEffect(()=>{
//       axios.put(`${process.env.api}/users/updateimage`, formUpdateImage)
//       .then((res) => {
        
//         console.log(res.data)
//         if(res.data){
//           swal(`Success Update Profile`)
//           Router.push(`/main/profile`)
//         } 
//         if(res.error === null){
//           swal('Success Update Photo')
//           history.push('/main/profile')
//         }
//         else if(res.message==='File too large'){
//           swal('File size too large, max size = 2 mb')
//         } else{
//           swal(res.message)
//         }
//       })
//       .catch((err) => {
//           console.log(err);
//       }) 
      
//     })
    
//   }

  return (
    <div>
      <div className={style["profile-card"]}>
        <img className={style["user-img"]} src={context?.image} alt=""/>
        {/* <input 
          type="file" 
          className={style['form-img']} 
          name="image"
          id="image"
          title="edit"
          ref={imageRef}
          onChange={e => handleChangeImage(e)}
        />
        <button 
          className={style["btn-update"]}
          type="button"
          onClick={handleUpdateImg}
        > Change Image
        </button> */}
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
