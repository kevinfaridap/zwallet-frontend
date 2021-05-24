import {useState, useEffect} from 'react'
import style from '../../../styles/homemainright.module.css'
import axios from 'axios'

function MainRight({iduser}) {
  const [getHistory, setGetHistory] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.api}/transaction/history/transaction/${iduser}`)
    .then((res)=>{
      const datatransfer = res.data.data
      console.log(datatransfer);
      setGetHistory(datatransfer)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  const handleSeeAll = ()=>{

  }
  return (
    <div>
      <div className={style["history-box"]}>
        <p className="history">Transaction History</p>
        <button 
          className={style["btn-see-all"]}
          type="button"
          onClick={() => handleSeeAll()}
        >
          See all
        </button>
        {getHistory !== undefined ? getHistory.map((item)=>{
          return (
          <>
        <div className="row">
          <div className="col-2">
            {/* <div className={style["target-img"]}></div> */}
            <img className={style["target-img"]} src={item.image} alt="" />
          </div>
          <div className="col-2 ms-lg-3">
            <p className={style["target-name"]}>{item.firstName}</p>
            <p className={style["type-transfer"]}>{item.type}</p>
          </div>
          <div className="col">
            {item.type=='Transfer'? 
            <>
            <p className={style["transaction-amount"]}>Rp{item.amount}</p>
            </>
            :
            <p className={style["transaction-amount-topup"]}>Rp{item.amount}</p>
            }
          </div>
        </div>
        </>
            )
          }) : console.log("try again")} 
      </div>    
    </div>
  )
}

export default MainRight
