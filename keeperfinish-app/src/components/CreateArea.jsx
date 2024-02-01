import React from "react";
import { useState } from "react";

function CreateArea(props) {
    const [titcon , settc] = useState({
        title: " ",
        content: " "
    })

    function inputtitle(event){
        const {name , value} = event.target;
        settc(prevValue =>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }
    function sumbitNote(event){
        props.onAdd(titcon)
        settc({
          title: "",
          content:""
        })
        event.preventDefault();
        
    }



  return (
    <div>
      <form>
        <input onChange={inputtitle} name="title" placeholder="Title" />
        <textarea onChange={inputtitle} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={sumbitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
