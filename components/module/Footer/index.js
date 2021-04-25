import React from 'react'
import style from '../.././../styles/footer.module.css'

function Footer() {
  return (
    <div>
      <div className={[style['footer-style']]}>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className={style["copy-right"]}>2020 Zwallet. All right reserved.</p>
            </div>
            <div className="col-lg-3">
              <p className={style["service-numb"]}>+62 5637 8882 9901</p>
            </div>
            <div className="col-lg-2">
              <p className={style["servie-email"]}>contact@zwallet.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
