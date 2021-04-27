import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState, useEffect} from 'react'
import axiosApiInstance from '../helper/axios'
import UserContext from '../components/base/UserContext'

function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState({})
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


  return (
    <>
    <UserContext.Provider 
      value={[context, setContext]} 
    >

      <Component {...pageProps} />
    </UserContext.Provider>
    </>
  )
}

export default MyApp


// {/* <h4>{JSON.stringify(user)} </h4> */}

   // value={{ 
      //   id: user.id,
      //   firstname: user.firstName, 
      //   phone: user.phoneNumber, 
      //   email: user.email, 
      //   saldo: user.saldo,
      //   image: user.image,
      //   lastname: user.lastName,
      // }}>