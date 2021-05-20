import React from 'react'
import style from '../../../styles/searchreceiver.module.css'
import Router from 'next/router'
import {useState, useEffect} from 'react'
import axiosApiInstance from '../../../helper/axios'

function SearchReceiver() {
  const [getUser, setGetAllUser] = useState([])

  const [page, setPage] = useState(1);
  const [by, setBy] = useState('firstName');
  const [order, setOrder] = useState("ASC");
  const [title, setTitle] = useState({
    name: ''
  });

  useEffect(()=>{
    // axiosApiInstance.get('${process.env.api}/users')
    axiosApiInstance.get(`${process.env.api}/users?page=${page}&limit=4&by=${by}&order=${order}&firstname=${title.name}`)
    .then((res)=>{
      const dataUser = res.data
      setGetAllUser(dataUser)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [page, order, title.name])

  const getUserMap = getUser.data
  
  // ${process.env.api}/users?page=1&limit=5&by=id&order=DESC&firstname=use

  const userPerPage = getUser.MaxperPage
  const totalPage = getUser.totalPage
  const nowPage = getUser.currentPage
  const totalUsers = getUser.totalUsers

  const handleFormSearch = (e) =>{
    setTitle({
      ...title,
      [e.target.name]: e.target.value
    })
  }

  // console.log(getUser);
  return (
    <div>
        <div className={style["search-receiver-box"]}>
          <p className={style["title"]}>Search Receiver</p>
          <br/>
          <form className="form">
            <input 
              className={[["form-control"], ["mr-sm-2"], style["form-search"]].join(' ')} 
              type="search" 
              placeholder="Search receiver here" 
              name="name"
              id="name"
              value={title.name}
              onChange={(e)=>handleFormSearch(e)}
            />
          </form>

          {/* <p>{JSON.stringify(totalUsers)}</p>   */}

          {getUserMap !== undefined ? getUserMap.map((item)=>{
            return (
            <>
              <button 
                className={style["receiver-box"]}
                type="button"
                onClick={() => Router.push(`/main/transfer/${item.id}`)}
              >
                <div className="row">
                  <div className="col-lg-2">
                    {/* <div className={style["img-target"]}></div> */}
                    <img src={item.image} alt="" className={style["img-target"]}/>
                  </div>
                  <div className="col">
                        <p className="target-name">{item.firstName}</p>
                        <p className="target-number">{item.phoneNumber}</p>
                </div>
                </div>
              </button>
              </>
              )
            }) : console.log("try again")} 

          <br/>
          <button className={style['btn-asc']} onClick={()=>setOrder("ASC")} >
            <img className={style['up']} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/sort-up-512.png" alt="" />
          </button>
          <button className={style['btn-asc']} onClick={()=>setOrder("DESC")} >
            <img className={style['down']} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/sort-up-512.png" alt="" />
          </button>

           {/* AWAL BUTTON */}
          <div className="row display-flex justify-content-center mt-5">
            {Array.from(Array(totalPage).keys()).map(item=>
              <>
                <div className="col-1 display-flex justify-content-center">
                  <button className={style['btn-pagination']} onClick={()=>setPage(item+1)} >{item+1}</button>  
                </div>
              </>
            )}
          </div>
          {/* Akhir button */}
        </div>
    </div>
  )
}

export default SearchReceiver
