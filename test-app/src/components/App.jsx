// import React from "react";

// var isDone = false;

// function strike() {
// //   isDone = true;
//   document.getElementById("root").style.textDecorationa = "line-through";
// }

// function unStrike() {
// //   isDone = false;
//   document.getElementById("root").style.textDecorationa = null;
// }

// function App() {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </div>
//   );
// }

// export default App;


//Hook
// import React, {useState} from "react";



// function App(){
//     const [count , set] = useState(0);


//     function increase(){
        
//         set(count + 1);
        
    
//     }
//     function decrease(){
//         set(count -1);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={decrease}>-</button>
//             <button onClick={increase}>+</button>
//         </div>
//     )
// }

//hooks practice
import React, { useState } from "react";

function App() {
    
  setInterval(updateatline, 1000);
  
  const now = new Date().toLocaleTimeString();
  const [time,setTime] = useState(now);
  function updateatline(){
    const d = new Date().toLocaleTimeString();
    setTime(d); 


  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateatline}>Get Time</button>
    </div>
  );
}


export default App;


