import React from 'react'
import Navbar from '../../../components/module/Navbar'
import Footer from '../../../components/module/Footer'
import Sidemenu from '../../../components/module/SideMenu'

import ChangePasswordCard from '../../../parts/Profile/ChangePassword'

function ChangePassword() {
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
              <ChangePasswordCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ChangePassword
