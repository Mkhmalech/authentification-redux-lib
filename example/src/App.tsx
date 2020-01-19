import * as React from "react";
import "./styles.css";
import Auth from 'authentification-redux-lib'
import { connect } from "react-redux";

function App({dispatch} : any) {
  
  const login = new Auth();  

  return (
    <div className="App">
      <h1>authentification using Redux</h1>
      <p>Email : <input type="text" onChange={e=>login.setEmail(e.target.value)}/></p>
      <p>Password : <input type="password" onChange={e=>login.setPassword(e.target.value)}/></p>
      <p><button onClick={e=>login.goIn(dispatch)}>Go In</button></p>
    </div>
  );
}

export default connect()(App);