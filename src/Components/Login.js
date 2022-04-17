import '../App.css';
import React from 'react'
import { useState } from 'react'
import Eyeon from '../Assets/Eye-on.svg';
import Eyeoff from '../Assets/Eye-off.svg';
import Popup from './Popup';

export default function Login(props) {

    const {poper, setPoper, curr_msg, Loginuser, ValidMail, SetEmail, ValidPass, SetPassword, email, password, ValidateEmail, ValidatePassword, NewUser, SetNewUser } = props;
    const [view_pass, Setview_pass] = useState(false);
    const [mailfocus, SetMailFocus] = useState(false);
    const [passfocus, SetPassFocus] = useState(false);

    function EmailChecker(mail){
        SetEmail(mail)
        ValidateEmail(mail)
    }

    function PasswordChecker(pass){
        SetPassword(pass)
        ValidatePassword(pass)
    }
    
    function Signin_user(){
        Loginuser({"id":email,"pass":password});
    }

    return (
        <div className="login_area">
            {
                poper?
                <Popup msg={curr_msg} setPoper={setPoper}/>
                :null
            }
            <div className="form_header">
                <h1>LOG IN</h1>
            </div>

            <div className="message">
                <p>Enter your credentials to log in to TV2Z</p>
            </div>

            <div className="Input_area">

                <div className="Email" id={(mailfocus && ValidMail) ? "valid"
                    : mailfocus ? "invalid"
                        : (!ValidMail && email) ? "invalid" : " "}>
                    <input value={email}
                        placeholder="Email"
                        onBlur={() => SetMailFocus(false)}
                        onFocus={() => SetMailFocus(true)}
                        onChange={(e) => {
                           EmailChecker(e.target.value)
                        }}></input>
                </div>

                <div className="Password"
                    id={(passfocus && ValidPass) ? "valid"
                        : passfocus ? "invalid"
                            : (!ValidPass && password) ? "invalid" : " "}>
                    <input
                        id="pass"
                        type={view_pass ? "text" : "password"}
                        value={password}
                        placeholder="Password"
                        onBlur={() => SetPassFocus(false)}
                        onFocus={() => SetPassFocus(true)}
                        onChange={(e) => {
                           PasswordChecker(e.target.value)
                        }}></input>
                    <button id="EyeBTN" onClick={() => Setview_pass(!view_pass)}>
                        <img id="eye_icon" src={view_pass ? Eyeon : Eyeoff}></img>
                    </button>
                </div>

            </div>

            <div className="forget_area">
                <p>Forgot Password? <span className="forget_btn">Click here!</span></p>
            </div>

            <div className="terms">
                <p>By clicking on 'Login' button, you are hearby agreeging to our <span>Privacy Policy</span> and <span>Terms & Conditions.</span></p>
            </div>

            <div className="Login_Button">
                <button id="signin_btn" onClick={Signin_user}>LOG IN</button>
            </div>

            <div className="newuser_area">
                <p>Don't have an account? <span className="new_user" onClick={()=>SetNewUser(!NewUser)}>Sign up!</span></p>
            </div>

        </div>
    )
}
