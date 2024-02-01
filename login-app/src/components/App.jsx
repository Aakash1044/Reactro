import React from "react";
import Form

from "./Form";
var Isregister = false;


function App() {
  return (
    <div className="container">{
        //ternary
        // islogged === true ? <h1>Hello</h1> : <Login />
        //AND operator
        //number > 10 && <h1> helo its true or false</h1>
        <Form
         Isregister = {Isregister} 
        />

    }
      
     
    </div>
  );
}

export default App;
