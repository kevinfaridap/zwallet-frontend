import React from 'react'
import Navbar from '../../../components/module/Navbar'
import Footer from '../../../components/module/Footer'
import Sidemenu from '../../../components/module/SideMenu'

import ChangePinCard from '../../../parts/Profile/ChangePin'

function ChangePin() {
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
              <ChangePinCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ChangePin
