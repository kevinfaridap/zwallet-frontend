import React from 'react'
import Navbar from '../../../components/module/Navbar'
import Footer from '../../../components/module/Footer'
import Sidemenu from '../../../components/module/SideMenu'
import SearchReceiver from '../../../parts/Transfer/SearchReceiver'
import InputAmount from '../../../parts/Transfer/InputAmount'

function Transfer() {
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
              <InputAmount />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Transfer
