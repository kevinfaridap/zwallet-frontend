import React from 'react'
import Navbar from '../../../components/module/Navbar'
import Footer from '../../../components/module/Footer'
import Sidemenu from '../../../components/module/SideMenu'
import style from '../../../styles/confirmationid.module.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Router from 'next/router'
// import ConfirmationCard from '../../../parts/ConfirmationCard'
// import SuccessCard from '../../../parts/ConfirmationCard/SuccessCard'


const ConfirmationId = ({dataTransaction}) =>{

  // {dataTransaction} ini diambil dari ConfirmationId.getInitialProps dibawah

  // Data Penerima (ambil nama dan phonenumber)
  const [getDataReceiver, setGetDataReceiver] = useState([])
  
  const idreceiver = dataTransaction.idReceiver
  useEffect(()=>{
    axios.get(`${process.env.api}/transaction/receiver/${idreceiver}`)
    .then((res)=>{
      const dataTransaction = res.data.data[0]
      // console.log(dataTransaction + 'isinya');
      setGetDataReceiver(dataTransaction)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidemenu />
            </div>
            <div className="col">
              {/* Awal ConfirmationID */}
                <div className={style["confirmation-card"]}>
                  <p className={style["title"]}>Transfer To</p>
                  <img className={style["success-icon"]} src="https://i.pinimg.com/736x/3f/de/a1/3fdea14e07c6319c24419c3bfed0e412.jpg" alt=""/>
                  <p className={style["title-success"]}>Success</p>

                  {/* <p>{JSON.stringify(dataTransaction)}</p> */}
                  
                  <div className={[["row"], ["mt-5"], style["receiver-box"]].join(' ')}>
                    <div className="col-lg-2">
                      <div className={style["img-target"]}></div>
                    </div>
                    <div className="col">
                      <p className={style["target-name"]}>{getDataReceiver.firstName}</p>
                      <p className={style["target-number"]}>{getDataReceiver.phoneNumber}</p>
                    </div>
                  </div>
                  <br/>
                  <p className={style["detail"]}>Detail</p>
                  <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
                    <p className={style["title-detail"]}>Amount</p>
                    <p className={style["value-detail"]}>Rp{dataTransaction.amount}</p>
                  </div>
                  <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
                    <p className={style["title-detail"]}>Balance Left</p>
                    <p className={style["value-detail"]}>Rp{dataTransaction.saldoLeft}</p>
                  </div>
                  <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
                    <p className={style["title-detail"]}>Date & Time</p>
                    <p className={style["value-detail"]}>{dataTransaction.createdAt}</p>
                  </div>
                  <div className={[["row"], ["mt-1"], style["detail-box"]].join(' ')}>
                    <p className={style["title-detail"]}>Notes</p>
                    <p className={style["value-detail"]}>{dataTransaction.info}</p>
                  </div>

                  {/* Mau nya nanti disini dikasih kondisi jika transfer success kirim ke laman confirmation/success, jika tidak ke confirmation/failed */}
                  <button 
                    className={style["btn-continue"]}
                    type="button"
                    onClick={() => Router.push('/')}
                  > Back to Dashboard
                  </button>

                </div>
              {/* Akhir ConfirmationID */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

ConfirmationId.getInitialProps = async(ctx)=>{
  try {
    const result = await axios.get(`${process.env.api}/transaction/${ctx.query.id}`)
    const dataTransaction = result.data.data[0]
    // console.log(dataTransaction + 'cccccccccccc');
    return {
      dataTransaction: dataTransaction
    }
  } catch (error) {
    console.log(error);
    return{
      dataTransaction: {} 
    }
  }
}

export default ConfirmationId
