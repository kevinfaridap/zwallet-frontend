import React from 'react'
import style from '../../../styles/button.module.css'

function Button({buttnname, type, btn, onClick}) {
    return (
        <div>
            <button
                type={type}
                className={style[btn]}
                onClick={onClick}
            >
                {buttnname}
            </button>
        </div>
    )
}

export default Button
