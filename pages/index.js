import Footer from '../components/module/Footer'
import Navbar from '../components/module/Navbar'
import Router from 'next/router'
import style from '../styles/homepage.module.css'

export default function Homepage({user}) {

  // const [context, setContext] = useContext(UserContext);
  // useEffect(()=>{
  //   axiosApiInstance.get(`${process.env.api}/users/profile`)
  //   .then((res)=>{
  //     const dataUser = res.data.data[0]
  //     setContext(dataUser)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }, [])

 
  return (
    <>  
      <Navbar 
      />
      <div className={[["jumbotron"], ["jumbotron-fluid"], style["homepage-bg"]].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col mt-3">
              <h5 className={style["title"]}>Awesome App <br /> For Saving Time.</h5>
              <br />
              <h5 className={style["detail-app"]}>We bring you a mobile app for banking problems that <br /> oftenly wasting much of your times.</h5>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-2 ">
              <button
                type="button"
                className={[["btn"], style["btn-signup"]].join(" ")}
                onClick={() => Router.push('/auth/')}
              >
                Sign Up
              </button>
            </div>
            <div className="col-2 ">
              <button
                type="button"
                className={[["btn"], style["btn-signin"]].join(" ")}
                onClick={() => Router.push('/auth/signin')}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



