import React from 'react'
import style from '../../../styles/getuserid.module.css'
import Router from 'next/router'
import Navbar from '../../../components/module/Navbar'
import SideMenu from '../../../components/module/SideMenu'
import Footer from '../../../components/module/Footer'
import {useState, useEffect, useContext} from 'react'
import axiosApiInstance from '../../../helper/axios'
import { useRouter } from 'next/router'
import axios from 'axios'
import UserContext from '../../../components/base/UserContext'

const queryString = require('query-string');

const getUserId = ({user}) =>{
  const [context, setContext] = useContext(UserContext);

  // console.log(user.id);
  const idsender = context.id
  const idreceiver = user.id

  const [formTransfer, setformTransfer] = useState({
    idUser: idsender,
    idReceiver: idreceiver,
    amount: '',
    info: '',
    pin: ''
  })
  
  const handleFormTransfer = (e) =>{
    setformTransfer({
      ...formTransfer,
      [e.target.name]: e.target.value
    })
  }
  
  const handleTransfer= (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/v1/transaction/transfer', formTransfer)
      .then((res) => {
          console.log(res.data)
          if(res.data.data === null){
            swal(`Check Your Pin`)
          } else{
            swal(`Success transfer : Rp ${formTransfer.amount}`)
            Router.push(`/main/confirmation/${res.data.data.id}`)
          }
      })
      .catch((err) => {
          console.log(err);
      }) 
  }

  // console.log(formTransfer + 'lihat');
  return (
    <div>
    <Navbar />
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>
            <div className="col">
              {/* GETBY ID */}
              <div className={style["input-amount"]}>
                <p className={style["title"]}>Transfer Money</p>
                
                <div className={[["row"], ["mt-5"], style["receiver-box"]].join(' ')}>
                  <div className="col-lg-2">
                    <div className={style["img-target"]}></div>
                  </div>
                  <div className="col">
                    {/* <p>{JSON.stringify(user)}</p> */}
                    <p className="target-name">{user.firstName}</p>
                    <p className="target-number">{user.phoneNumber}</p>
                  </div>
                </div>

                <p className={style["transfer-desc"]}>Type the amount you want to transfer and then press continue to the next steps.</p>
                <br/>
                <form>
                  <input 
                    className={[["form-control"], style["form-amount"]].join(' ')} 
                    type="text" 
                    name="amount"
                    id="amount"
                    placeholder="0.00"
                    value={formTransfer.amount}
                    onChange={(e)=>handleFormTransfer(e)}
                  />
                  <br/>
                  <p className={style["amount-available"]}>Rp {context.saldo} Available</p>
                  <br/>
                  <input 
                    className={[["form-control"], style["form-notes"]].join(' ')} 
                    type="text" 
                    name="info"
                    id="info"
                    placeholder="Add some notes"
                    value={formTransfer.info}
                    onChange={(e)=>handleFormTransfer(e)}
                  />
                  <br/>
                  <input 
                    className={[["form-control"], style["form-notes"]].join(' ')} 
                    type="number" 
                    name="pin"
                    id="pin"
                    placeholder="Type your pin"
                    value={formTransfer.pin}
                    onChange={(e)=>handleFormTransfer(e)}
                  />

                </form>
                <br/>
                <button 
                  className={style["btn-continue"]}
                  type="submit"
                  onClick={handleTransfer}
                > Continue
                </button>
              </div>     
              {/* TUTUP GETBYID */}
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  )
}

getUserId.getInitialProps = async(ctx)=>{
  try {
    const result = await axios.get(`http://localhost:8080/v1/users/${ctx.query.id}`)
    const user = result.data.data[0]
    // console.log(user);
    return {
      user: user
    }
  } catch (error) {
    console.log(error);
    return{
      user: {}
    }
  }
}



export default getUserId


 // const [getUserID, setGetAllUserID] = useState([])

  // console.log(id);
  // useEffect(()=>{
    // if ( typeof window !== "undefined" || id !== undefined) {     
      // if (isReady) {
      // console.log(id + 'ini id');
      // axiosApiInstance.get(`http://localhost:8080/v1/users/${id}`)
      // .then((res)=>{
      //   const dataUser = res.data
      //   setGetAllUserID(dataUser)
      //   console.log(dataUser + 'datayna');
        
      // })
      // .catch((err)=>{
      //   console.log(err);
      // })
    // }
  // }, [])