import {useContext} from 'react'
import style from '../../../styles/personalinfo.module.css'
import Router from 'next/router'
import UserContext from '../../../components/base/UserContext'

function PersonalInfo() {
  const [context, setContext] = useContext(UserContext);
  
  const managePhone = (e)=>{
    Router.push('main/profile/personalinfo/managephone')
  }
  return (
    <div>
      <div className={style["personalinfo-card"]}>
        <p className={style["title"]}>Personal Info</p>
        <br/>
        <p className={style["desc"]}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>First Name</p>
            <p className={style["value"]}>{context.firstName}</p>
          </div>
        </div>
        <div className={[["row"], ["mb-3"], style["row-info"]].join(' ')}>
          <div className="col">
            <p className={style["title-info"]}>Last Name</p>
            <p className={style["value"]}>{context.lastName}</p>
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
        

      </div>
    </div>
  )
}

export default PersonalInfo
