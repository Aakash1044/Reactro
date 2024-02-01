import React from "react";

function Note(props) {


  function deleteclick(event){
    props.ondelete(props.id);
    // event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteclick}>DELETE</button>
    </div>
  );
}

export default Note;
