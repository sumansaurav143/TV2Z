import '../App.css';
import React from 'react'
import Popup from './Popup';
import { useState } from 'react'

export default function Signup(props) {


    const { poper,setPoper, curr_msg, setcurrmsg, SetNewUsers, ValidMail, ValidPass, name, setname, setnewemail, setnewpassword, setnewpassword2, newemail, newpassword, newpassword2, ValidateEmail, ValidatePassword, NewUser, SetNewUser } = props;


    const [mailfocus, SetMailFocus] = useState(false);
    const [passfocus, SetPassFocus] = useState(false);

    const [letter, setletter] = useState(false);
    const [digit, setdigit] = useState(false);
    const [spchar, setspchar] = useState(false);
    const [capital, setcapital] = useState(false);
    const [reqlen, setreqlen] = useState(false);


    function pass_info(curr_pass) {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (curr_pass.match(lowerCaseLetters)) {
            setletter(true)
        } else {
          setletter(false)
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (curr_pass.match(upperCaseLetters)) {
            setcapital(true)
        } else {
            setcapital(false)
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (curr_pass.match(numbers)) {
            setdigit(true)
        } else {
            setdigit(false)
        }

         // Validate Special char
         var schar = /[@$!%*?&]/g;
         if (curr_pass.match(schar)) {
            setspchar(true)
         } else {
             setspchar(false)
         }

        // Validate length
        if (curr_pass.length >= 8) {
           setreqlen(true)
        } else {
            setreqlen(false)
        }
    }

    function EmailChecker(mail) {
        setnewemail(mail)
        ValidateEmail(mail)
    }

    function PasswordChecker(pass) {
        setnewpassword(pass)
        ValidatePassword(pass)
    }

    function ReenterPassword(repass) {
        setnewpassword2(repass);
    }

    function SetUsername(username) {
        setname(username);
    }

    function RegisterNew() {
        //console.log({ "name": name, "email": newemail, "password": newpassword , "repass":  newpassword2});

        if (newpassword === newpassword2) {

            SetNewUsers({ "name": name, "email": newemail, "password": newpassword });
            //console.log("Registered!!")
        }
        else {
            setcurrmsg("Both password didn't match!!");
            setPoper(true);
        }

    }

    return (
        <div className="login_area">
            {
                poper?
                <Popup msg={curr_msg} setPoper={setPoper}/>
                :null
            }
            
            <div className="form_header">
                <h1>SIGN UP</h1>
            </div>

            <div className="message">
                <p>Enter your details to create new account for TV2Z</p>
            </div>

            <div className="Input_area">

                <table>
                    <tr>
                        <input className='Register_input' placeholder="Username" value={name}
                            onChange={(e) => SetUsername(e.target.value)} ></input>
                    </tr>
                    <tr>
                        <input className='Register_input' placeholder="Email Id" value={newemail} id={(mailfocus && ValidMail) ? "valid"
                            : mailfocus ? "invalid"
                                : (!ValidMail && newemail) ? "invalid" : " "} onBlur={() => SetMailFocus(false)}
                            onFocus={() => SetMailFocus(true)}
                            onChange={(e) => {
                                EmailChecker(e.target.value)
                            }}></input>
                    </tr>
                    <tr>
                        <input className='Register_input' type="password" placeholder="password" value={newpassword} id={(passfocus && ValidPass) ? "valid"
                            : passfocus ? "invalid"
                                : (!ValidPass && newpassword) ? "invalid" : " "}
                            onBlur={() => SetPassFocus(false)}
                            onFocus={() => SetPassFocus(true)}
                            onChange={(e) => {
                                PasswordChecker(e.target.value)
                                pass_info(e.target.value)
                            }}></input>
                    </tr>
                    {
                        passfocus ?
                            <tr>
                                <div className='password_info'>
                                    <div id="message">
                                        <h4>Password must contains:</h4>
                                        <p id="number" className={digit ? "correct" : "error"}>A <b>Number (0-9)</b></p>
                                        <p id="letter" className={letter ? "correct" : "error"}>A <b>Lowercase</b> letter (a-z)</p>
                                        <p id="capital" className={capital ? "correct" : "error"}>A <b>Uppercase</b> letter (A-Z)</p>
                                        <p id="spchar" className={spchar ? "correct" : "error"}>A <b>Special characters</b></p>
                                        <p id="length" className={reqlen ? "correct" : "error"}>Minimum <b>8 characters</b></p>
                                    </div>
                                </div>
                            </tr>
                            : null
                    }

                    <tr>
                        <input className='Register_input' type="text" placeholder="Retype password" value={newpassword2}
                            onChange={(e) => ReenterPassword(e.target.value)}></input>
                    </tr>
                </table>

            </div>


            <div className="terms">
                <p>By clicking on 'SignUp' button, you are registered to TV2Z.</p>
            </div>

            <div className="Login_Button">
                <button id="signin_btn" onClick={RegisterNew}>SIGN UP</button>
            </div>

            <div className="newuser_area">
                <p>Already have an account? <span className="new_user" onClick={() => SetNewUser(!NewUser)}>Log In!</span></p>
            </div>

        </div>
    )
}