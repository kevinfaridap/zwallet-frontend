// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Footer from '../components/module/Footer'
import Navbar from '../components/module/Navbar'
import SideMenu from '../components/module/SideMenu'
import MainTop from '../parts/Home/MainTop'
import MainLeft from '../parts/Home/MainLeft'
import MainRight from '../parts/Home/MainRight'
// import {useState, useEffect} from 'react'
// import axios from 'axios'
import {useContext,useEffect, useState} from 'react'
import UserContext from '../components/base/UserContext'
import Router from 'next/router'
import axiosApiInstance from '../helper/axios'

export default function Home({user}) {
  // const [user, setUser] = useState([])
  // useEffect(()=>{
  //   axios.get('${process.env.api}/users/10')
  //   .then((res)=>{
  //     const dataUser = res.data.data
  //     setUser(dataUser)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }, [])
  

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

 

  return (
    <>  
      <Navbar 
      />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  {/* <h1>{JSON.stringify(context)}asdasdasdas</h1>  */}
                    <MainTop 
                      price={context?.saldo}
                      phonenum={context?.phoneNumber}
                    />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <MainLeft 
                    amountincome="2.121.210"
                    amountoutcome="121.210"
                  />
                </div>
                <div className="col">
                  <MainRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


// <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>