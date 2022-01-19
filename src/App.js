import './App.css';
import React, {useState} from 'react';

function App() {
  
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")

      
    const [firstNameErr, setFirstNameErr] = useState("")
    const [lastNameErr, setLastNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [confirmPassErr, setconfirmPassErr] = useState("")

    const changeEmail = (e) => {
      setEmail(e.target.value)

      if(email.length < 5){
        setEmailErr("Email must have at least 5 chars");
      }else{
        setEmailErr("")
      }
    }

    const changeFirstName = (e) => {
      setFirstName(e.target.value)

      if(firstName.length < 2){
        setFirstNameErr("First Name must be more than 2 chars")
      }else{
        setFirstNameErr("")
      }
    }
    const changeLastName = (e) => {
      setLastName(e.target.value)

      if(lastName.length < 2){
        setLastNameErr("Last Name must be more than 2 chars")
      }else{
        setLastNameErr("")
      }
    }
    const changePass = (e) => {
      setPassword(e.target.value)

      if(password.length < 8){
        setPasswordErr("Password must be more than 8 chars")
      }else{
        setPasswordErr("")
      }
    }
    const changeConfirmPass = (e) => {
      setconfirmPass(e.target.value)

      if(confirmPass !== password){
        setconfirmPassErr("Passwords do not match")
      }else{
        setconfirmPassErr("")
      }
    }

  return (
    <div className="App">
      <form>
        <p>
          <label> First Name:</label>
          <input type="text" onChange={changeFirstName} value={firstName}/> <br/>
          {firstNameErr ? <p style={{color: "red"}}> {firstNameErr} </p> : ""}
        </p>
        <p>
          <label> Last Name:</label>
          <input type="text" onChange= {changeLastName} value={lastName}/> <br/>
          {lastNameErr ? <p style={{color: "red"}}> {lastNameErr} </p> : ""}
        </p>
        <p>
          <label> Email:</label>
          <input type="text" value={email} onChange={changeEmail}/> <br/>
          {emailErr ? <p style={{color: "red"}}> {emailErr} </p> : ""}
        </p>
        <p>
          <label>Password:</label>
          <input type="password" onChange={changePass} value={password}/> <br/>
          {passwordErr ? <p style={{color: "red"}}> {passwordErr} </p> : ""}
        </p>
        <p>
          <label>Confirm Password:</label>
          <input type="password" onChange = {changeConfirmPass} value={confirmPass}/> <br/>
          {confirmPassErr ? <p style={{color: "red"}}> {confirmPassErr} </p> : ""}
        </p>
      </form>
      <hr />
      Your Form Data <br/>
      First Name: {firstName} <br/>
      Last Name: {lastName} <br/>
      Email: {email} <br/>
      Password: {password} <br/>
      Confirm Password: {confirmPass} <br/>
    </div>
  );
}

export default App;
