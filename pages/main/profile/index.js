import React from 'react'
import Navbar from '../../../components/module/Navbar'
import Footer from '../../../components/module/Footer'
import Sidemenu from '../../../components/module/SideMenu'
import ProfileCard from '../../../parts/Profile'
import UserContext from '../../../components/base/UserContext'
import {useContext} from 'react'

function Profile() {
  const [context, setContext] = useContext(UserContext);
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
              <ProfileCard 
                userFullName={`${context.firstName} ${context.lastName}`}
                phoneNumber={context.phoneNumber}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
