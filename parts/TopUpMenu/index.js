import style from '../../styles/topup.module.css'
import Router from 'next/router'
import {useContext, useState, useEffect} from 'react'
import UserContext from '../../components/base/UserContext'
import axios from 'axios';
import swal from 'sweetalert';
import axiosApiInstance from '../../helper/axios'

const TopUpMenu = ({user}) =>{
  // const {saldo, id} = useContext(UserContext);
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


  console.log(context.id+ 'ini idnya');

  const [formTopUp, setFormTopUp] = useState({
    idUser: context.id !== undefined? context.id : '',
    amount: '',
    info: '',
  })

  const handleFormChange = (e) =>{
    setFormTopUp({
      ...formTopUp,
      [e.target.name]: e.target.value
    })
  }
  
  const handleTopUp= (e) =>{
    e.preventDefault();
    axios.post(`${process.env.api}/transaction/topup`, formTopUp)
      .then((res) => {
        swal(`Success Top UP : Rp ${formTopUp.amount}`)
        Router.push('/main/home')
        console.log(res.data)
      })
      .catch((err) => {
          console.log(err);
      }) 
  }
  
  return (
    <div>
      <div className={style["topup-card"]}>
        <p className={style["title"]}>Top Up</p>
        {/* <p>{JSON.stringify({user})}</p> */}
        <p className={style["title"]}>Saldo Availabel : {context?.saldo} </p>
        <br/>
        <p className={style["amount"]}>Amount</p>
        <form className="mt">
          <div className="form-group mt-4">
            <input
              type="text"
              className={[["form-control mt-1"], style["form-control-amount"]].join(" ")}
              name="amount"
              id="amount"
              placeholder="Enter Amount"
              value={formTopUp.amount}
              onChange={(e)=>handleFormChange(e)}
            />
          </div>
          <br/>
          <p className={style["notes"]}>Notes</p>
          <div className="form-group mt-4">
          
          <textarea 
            type="text" className={[["form-control mt-1"], style["form-control-notes"]].join(" ")}
            name="info"
            id="info"
            placeholder="Enter your notes here"
            value={formTopUp.info}
            onChange={(e)=>handleFormChange(e)}
          />
          </div>

          {/* {idreceiver !== undefined ?  */}
          <button
            type="submit"
            className={[["mt-5 btn"], style["btn-topup"]].join(" ")}
            onClick={handleTopUp}
          >
            Continue
          </button>
            {/* : swal('Try Again')}  */}
          
        </form>
        
      </div>
    </div>
  )
}





export default TopUpMenu





  {/* LIST HOW TO TOP UP */}
  {/* <p className={style["title"]}>How To Top Up</p>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>1. Go to the nearest ATM or you can use E-Banking.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>2. Type your security number on the ATM or E-Banking.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>3. Select “Transfer” in the menu.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>4. Type the virtual account number that we provide you at the top.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>5. Type the amount of the money you want to top up.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>6. Type the amount of the money you want to top up.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>7. Press transfer / top up.</p>
    </div>
  </div>
  <div className={[["row"], style["how-to-topup"]].join(' ')}>
    <div className="col">
      <p className={style["topup-desc"]}>8. You can see your money in Zwallet within 3 hours.</p>
    </div>
  </div> */}