import React, { useState } from "react";
// import GoogleLogin from "react-google-login";

function Login(){

    const [details,setdetails] = useState({
        usern:" ",
        pass:" "
    });
    
    function handledetails(event){
        const [value,name] = event.target;
        setdetails(prevalue=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })
    }
    
    
    return(
        <div className="container">
            <h2>Login</h2>
           
           <form>
           <input type="name" name="usern" value={details.usern} onChange={handledetails} placeholder="Your username"></input>
           <input type="password" name="pass" value={details.pass} onChange={handledetails} placeholder="Your password"></input>
          
            <button type="submit">Login</button>
            </form>
        
        </div>
    )
}

export default Login;