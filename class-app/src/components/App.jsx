// import React, { useState } from "react";




// function App() {
    
//     const [fullname,setfullname] = useState({
//         fName : " ",
//         lName : " "
//     })
//     function handle(event){
//         // const newvalue = event.target.value;
//         // const inputname = event.target.name;
//         const {newvalue , inputname} = event.target;

//         setfullname(prevalue =>{
//             if (inputname === "fName"){
//                return{
//                 fName : newvalue,
//                 lName : prevalue.lName
//                }
//             } else if (inputname === "lName"){
//                 return {
//                     fName : prevalue.fName,
//                     lName : newvalue
//                 }
//             }
//         })
//     }
    
    



//   return (
//     <div className="container">
//       <h1>Hello {fullname.fName} {fullname.lName}</h1>
//       <form>
//         <input onChange={handle} name="fName" placeholder="First Name" value={fullname.fName}/>
//         <input onChange={handle} name="lName" placeholder="Last Name" value={fullname.lName}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;






//complex practice
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  //for button
  const[ismouseover , setmouse] = useState(true)
  function mouseover(){
    setmouse(false)
  }
  function mouseout(){
    setmouse(true)
  }

  function handle(event){
    const {value,name} = event.target
    //using es6 spread operator
    setContact(prevalue =>{
      return{
        ...prevalue,
        [name] : value  
      }
    })

    // setContact(prevalue =>{
    //     if(name === "fName"){
    //         return{
    //             fName : value,
    //             lName : prevalue.lName,
    //             email : prevalue.email
    //         }
    //     } else if(name === "lName"){
    //         return{
    //             fName : prevalue.fName,
    //             lName : value,
    //             email : prevalue.email
    //         }
    //     } else if(name === "email"){
    //         return {
    //             fName : prevalue.fName,
    //             lName : prevalue.lName,
    //             email : value
    //         }
    //     }
    // })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handle} name="fName" placeholder="First Name" value={contact.fName} />
        <input  onChange={handle} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input  onChange={handle} name="email" placeholder="Email" value={contact.email}/>
        <button style={{backgroundColor : ismouseover? "white" : "black"}} onMouseOver={mouseover} onMouseOut={mouseout}>Submit</button>
      </form>
    </div>
  );
}

export default App;

