import React from "react";
import { useState } from "react";
import Todoitems from "./Todoitems";
import InputArea from "./InputArea";
function App() {

   
    const [items, setitems] = useState([]) //for li state


    
    function additems (notes){
      setitems(prevalue =>{
        return[...prevalue,notes];
      })
      
    }
    function ondelete(id){
      // console.log(id);
      setitems(prevalue =>{
        return prevalue.filter((items,index)=>{
          return (index !== id)
        })
      })

    }

   






  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onclik = {additems}
      />
        
        <ul>
         {items.map((item,index) => (<Todoitems
         key={index}
         id={index}
         text={item} 
         onchecked = {ondelete}
         />))} 
        </ul>
      </div>
    
  );
}

export default App;






 //my own function ccalls.....
    // function text(event){ //input calling function
    //     setnotes(event.target.value) //input state calling function 
    // }
    // function click(){ //button calling function
    //     setclick(notes) //button state calling function
    // }

