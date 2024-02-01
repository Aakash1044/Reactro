import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setne] = useState([]);

    

    function setNote(newtitlecon){
      // console.log(titcon)
      setne(prevtit =>{
        return[
          ...prevtit,newtitlecon
        ];
      })


    }

    function deleteNote(id){
      // console.log("DEleted")
      setne(prevtit =>{
       return prevtit.filter((notes,index)=>{
        return(index !== id)

        })
      })
    }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {setNote}
      />
     {notes.map( (noteitems,index)=>{ return(
      <Note 
      key={index}
      id={index}
      title={noteitems.title}
      content={noteitems.content}
      ondelete= {deleteNote}
      />)
     })}
      <Footer />
    </div>
  );
}

export default App;
