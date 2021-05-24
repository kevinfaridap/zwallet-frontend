import {useContext, useState, useEffect} from 'react'
import style from '../../../../styles/phonenumber.module.css'
import Router from 'next/router'
import UserContext from '../../../../components/base/UserContext'
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'next/router'
import axiosApiInstance from '../../../../helper/axios'

function PhoneNumber() {
    const [context, setContext] = useContext(UserContext);

    const iduser = context.id
    const [changePhone, setChangePhone] = useState({
      idUser: iduser,
      phoneNumber: '',
    })
  
  
    const handleFormPhone = (e) =>{
        setChangePhone({
        ...changePhone,
        [e.target.name]: e.target.value
      })
    }
  
    const handleChangePhone = (e)=>{
      e.preventDefault();
      axios.put(`${process.env.api}/users/updatephone`, changePhone)
        .then((res) => {
            // console.log(res.data.status)
            if(res.data.message === 'Succes update data'){
              swal(`Success Update Phone Number`)
              Router.push(`/main/profile/personalinfo`)
              return
            } else{
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    const handleRemovePhone = (e)=>{
      axios.put(`${process.env.api}/users/removephone`, {
        idUser: iduser,
      })
        .then((res) => {
            // console.log(res.data)
            if(res.data){
              swal(`Removed Phone`)
              Router.push(`/main/profile/personalinfo`)
            } 
        })
        .catch((err) => {
            console.log(err);
        }) 
    }
  return (
    <div>
      {/* {JSON.stringify(context)} */}
      <div className={style["personalinfo-card"]}>
        <p className={style["title"]}>Manage Phone Number</p>
        <p className={style["desc"]}>You can change your phone number here.</p>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>Phone Number</p>
            <i className="fas fa-trash"></i>
            <input 
              type="text" 
              className={style["form-firstname"]} 
              id="phoneNumber"
              name="phoneNumber"
              placeholder={context?.phoneNumber}
              value={changePhone.phoneNumber}
              onChange={(e)=>handleFormPhone(e)}
            />
            {/* <p className={style["value"]}>{context.firstName}</p> */}
          </div>
        </div>

        <button 
            className={style["btn-update"]}
            type="submit"
            onClick={handleChangePhone}
          > Update Phone Number
          </button>
        
        {context.phoneNumber!==''?
        <>
          <button 
            className={style['btn-remove-phone']}
            type="submit"
            onClick={handleRemovePhone}
          >
            <img 
              className={style['remove-phone-icon']}
              src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" 
              alt="" 
            />
          </button>
        </>
        : null}

      </div>
    </div>
  )
}

export default PhoneNumber
