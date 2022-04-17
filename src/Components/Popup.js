import React from 'react'
import '../App.css';

export default function (props) {

    function closerpoper(){
        props.setPoper(false)
    }
    return (
        <div className="Pop_Up">
            <div className="Popup">
                <p><b>{props.msg}</b></p>
                <button id='okBtn' onClick={closerpoper}><b>OK</b></button>
            </div>
        </div>
    )
}