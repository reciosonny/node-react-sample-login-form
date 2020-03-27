import React, { Component, useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";


const FormLogin = ({ onSignIn }) => {

  const [txtUsername, setTxtUsername] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  return (
    <form className="col s12"
      onSubmit={(e) => {
        e.preventDefault();

        onSignIn(txtUsername, txtPassword);
      }}  
    >
      <h3>Login</h3>
      <div className="row">
        <div className="input-field col s12">
          <input id="username" type="text" className="validate" onChange={(e) => setTxtUsername(e.target.value)} />
          <label for="username">Username</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" onChange={(e) => setTxtPassword(e.target.value)} />
          <label for="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <button className="waves-effect waves-light btn">login</button>
        </div>
      </div>

    </form>
  );
};

const LoginSuccess = ({ username, hash }) => {

  return (
    <div>

      <h2>Login Successful!</h2>

      <h3>Your credentials:</h3>
      
      <h3>Username: {username}</h3>
    </div>    
  )
}


function App() {

  const [isLoginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [hash, setHash] = useState("");



  useEffect(() => {


  }, []);


  function onSignIn(username, password) {
    axios
      .post("/api/login", { username, password })
      .then(res => {

        const { username, hash } = res.data;

        console.log(username, hash);

        setUsername(username);
        setLoginSuccess(true);
      });
  }

  return (
    <div className="form-field">
      {!isLoginSuccess && <FormLogin onSignIn={onSignIn} />}
      {isLoginSuccess && <LoginSuccess username={username} />}
    </div>
  );
}

export default hot(module)(App);
