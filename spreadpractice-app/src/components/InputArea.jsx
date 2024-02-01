import React,{useState} from "react";

function InputArea(props){
    const [notes, setnotes] = useState(" ") //for input state


    function text(event){
        const newvalue = event.target.value
        setnotes(newvalue)
    }
   return(
    <div className="form">
        <input onChange={text} type="text" value={notes} />
        <button onClick={ ()=>{
            props.onclik(notes);
            setnotes(" ")
        }}>
          <span>Add</span>
        </button>
    </div>
   ) 
}

export default InputArea;