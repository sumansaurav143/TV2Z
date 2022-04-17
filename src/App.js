import './App.css';
import logo from './logo.svg';
import { useEffect, useState } from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import drop from './Assets/Dropdown.svg'
import Search from './Assets/Search.svg'

function App() {

  const [users, Setusers] = useState(JSON.parse(localStorage.getItem("TV2Z")));
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const [ValidMail, SetValidMail] = useState(false);
  const [ValidPass, SetValidPass] = useState(false);

  const [NewUser, SetNewUser] = useState(false);
  const [currData, SetcurrData] = useState([]);
  const [poper, setPoper] = useState(false)
  const [curr_msg, setcurrmsg] = useState();


  const [newemail, setnewemail] = useState();
  const [newpassword, setnewpassword] = useState();
  const [newpassword2, setnewpassword2] = useState();
  const [name, setname] = useState();

  const [Homepage, SetHomepage] = useState(false);
  const [Dropdown, SetDropdown] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("TV2Z") === null) {
      Setusers([]);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("TV2Z", JSON.stringify(users));
  }, [users])

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      SetValidMail(true);
      //console.log("corrct mail")
    }
    else {
      SetValidMail(false);
      //console.log("wrong mail")
    }
  }

  function ValidatePassword(pass) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(pass)) {
      //console.log("corrct passwd")
      SetValidPass(true);
    }
    else {
      //console.log("wrong passwd")
      SetValidPass(false);
    }
  }

  function SetNewUsers(data) {
    if (data.email !== "" && data.name !== "") {
      const old = [...users, data];
      Setusers(old);
      setnewemail("");
      setname("");
      setnewpassword("");
      setnewpassword2("");
      setcurrmsg("User Registered, Log In now!!");
      setPoper(true);
    }
    else {
      setcurrmsg("Fill all fields first!!");
      setPoper(true);
    }
  }

  function Loginuser(data) {
    if(email!=="" && password!=="")
    {
    const userslist = [...users];
    const userdata = userslist.find(d => data.id === d.email)
    if (userdata !== undefined) {
      if (userdata.password === data.pass) {
        SetHomepage(true);
        SetcurrData(userdata);
        SetEmail("");
        SetPassword("");
      }
      else
      setcurrmsg("Wrong Password!!");
      setPoper(true);
    }
    else {
      setcurrmsg("Email not registered, Register first!!");
      setPoper(true);
      SetPassword("");
    }
  }
  else{
    if(email==="" && password==="")
    {
      setcurrmsg("Enter email & password.");
      setPoper(true);
    }
    else if(email==="")
    {
      setcurrmsg("Email not entered!!");
      setPoper(true);
    }
    else{
      setcurrmsg("Password not entered!!");
      setPoper(true);
    }

  } 
  }


  return (
    <div className="App">

      <header className="header_area">
        <div className="logo">
          <img src={logo}></img>
        </div>
        {
          Homepage ?
          <>
              <div className='MenuTab'>
                <p className='menu'><b>Movies</b></p>
                <p className='menu'><b>Series</b></p>
                <p className='menu'><b>Postcards</b></p>
                <p className='menu'><b>Radio</b></p>
              </div>
             
              <div className='user_datas'>
              <img className='search' src={Search}></img>
              <img id="profile_pic" src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"></img>
              <h4>Hi, {currData.name}</h4>
              <div className="dropdown">
                <button onClick={() => SetDropdown(!Dropdown)} className="dropbtn">
                  <img src={drop}></img>
                </button>
               
                  {Dropdown ? 
                  <div className='drop_items'>
                  <div id="myDropdown" className="dropdown-content">
                  <button className='Dlog_out'><b>Movies</b></button>
                  </div>
                  <div id="myDropdown" className="dropdown-content">
                  <button className='Dlog_out'><b>Series</b></button>
                  </div>
                  <div id="myDropdown" className="dropdown-content">
                  <button className='Dlog_out'><b>Postcards</b></button>
                  </div>
                  <div id="myDropdown" className="dropdown-content">
                  <button className='Dlog_out' ><b>Radio</b></button>
                  </div>
              
                   <div className="dropdown-content">
                     <button id='Logout' onClick={() => 
                      {
                        SetHomepage(!Homepage);
                        setPoper(false)
                        setcurrmsg("")
                     }} className='Dlog_out' >Log out</button>
                     </div> 
                     </div>: null}
              </div>
              </div>
              
              </>
            : null
        }

        <div className="login_signup">
          {Homepage ? null : !NewUser ? <button id="login" onClick={() => SetNewUser(!NewUser)}>SIGN UP</button> : <button id="login" onClick={() => SetNewUser(!NewUser)}>LOG IN</button>}
        </div>
      </header>

      {
        Homepage ? <Home />
          :

          !NewUser ?

            <Login
              users={users}
              Loginuser={Loginuser}
              ValidMail={ValidMail}
              ValidPass={ValidPass}
              email={email}
              SetEmail={SetEmail}
              password={password}
              SetPassword={SetPassword}
              ValidateEmail={ValidateEmail}
              ValidatePassword={ValidatePassword}
              NewUser={NewUser}
              SetNewUser={SetNewUser}
              poper={poper}
              curr_msg={curr_msg}
              setPoper={setPoper} />
            :
            <Signup
              users={users}
              SetNewUsers={SetNewUsers}
              poper={poper}
              curr_msg={curr_msg}
              setPoper={setPoper}
              Setusers={Setusers}
              ValidMail={ValidMail}
              ValidPass={ValidPass}
              setname={setname}
              name={name}
              newemail={newemail}
              setnewemail={setnewemail}
              newpassword={newpassword}
              setnewpassword={setnewpassword}
              newpassword2={newpassword2}
              setnewpassword2={setnewpassword2}
              ValidateEmail={ValidateEmail}
              ValidatePassword={ValidatePassword}
              NewUser={NewUser}
              SetNewUser={SetNewUser} />

      }

      <footer className="footer_area">
        <h6>© 2022 WT TV2Z. All rights reserved.</h6>
      </footer>

    </div>
  );
}

export default App;
