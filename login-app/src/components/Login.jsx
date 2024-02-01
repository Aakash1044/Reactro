import React from "react";
import Input from "./Input";

function Login(props){
    return <form className="form">
    <Input
    type = "name"
    placeholder = "Username" 
    />
    <Input
    type = "password"
    placeholder = "Password" 
    />
    <Input
    type="password"
    placeholder="Confirm Password" 
    />
    <button type="submit">
      {props.Isregister ? "login" : "Register"}
    </button>
  </form>

}

export default Login;