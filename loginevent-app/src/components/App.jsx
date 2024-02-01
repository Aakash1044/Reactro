import React, { useState } from "react";

function App(){
    const [handle,sethand] = useState(" ");
    const [heading , set] = useState("");
    const [ismouseover , setmo] = useState(false);

    function tosubmit(){
        // set("Sumbitted")
        set(handle)
        //event.preventDefault() - // which is used not to refrest the submit button quickly..
        
    }
    function handleinput(event){
        sethand(event.target.value)

    }

    function onmouseover(){
        // console.log("onmouse");
        setmo(true);

    }
    function onmouseout(){
        
        setmo (false);
    }

    return(
        <div className="container">
            <h1>Hello {heading}</h1>
            <form>
            <input onChange={handleinput}type="name" placeholder="What's your name"></input>
            <button type="button"onClick={tosubmit} style={{backgroundColor: ismouseover? "black" : "white"} }
            onMouseOver={onmouseover}
            onMouseOut={onmouseout}
            
            >Submit</button>
            </form>
        </div>
    )
}

export default App;