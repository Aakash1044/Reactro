import React from "react";
import ReactDOM from "react-dom";
import pi ,{doublPi,triplePi} from "./math"; //or import * as pi from "./math";=> use as pi.default and pi.doublePi
import add, {sub,multiply,divide} from "./caluculator";


//app.jsx
// ReactDOM.render(
//   <div>
//     <h1>
//       <App />
//     </h1>
//     <h2>
//       <Heading />
//     </h2>
//     <h2>
//       <List />
//     </h2>
//   </div>,
//   document.getElementById("root")
// );



//math.js
// ReactDOM.render(
//   <ul>
//   <li>{pi}</li> 
//   <li>{doublPi()}</li>                  
//   <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// )

//calculator.js
ReactDOM.render(
  <ul>
  <li>{add(1,2)}</li>
  <li>{multiply(2,3)}</li>
  <li>{sub(7,2)}</li>
  <li>{divide(5,2)}</li></ul>,
  document.getElementById("root")
)



// const name = "Angel";//Javascript Expression using {}
// const lucn = 8;
// const lname = "yu";
// const year = new Date().getFullYear();
// ReactDom.render(
// <div>
//     <h1>Hello {name + " " + lname}!</h1>
//     <p> Your lucky number is {lucn}</p>
//     <p>Random for yyour lucky number is {Math.floor(Math.random()*10)}</p>
// </div>,

//current year;
//     <div>
//         <p>Created by {name}</p>
//         <p>Copyright {year}</p>
//     </div>,

//     document.getElementById("root"));

//image styling..
// const img = "https://picsum.photos/200";
// ReactDom.render(
//     <div>
//         <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Food</h1>
//         <div>
//            <img alt="random" src={img + "?grayscale"}></img>

//         </div>
//     </div>,
//     document.getElementById("root")
// )

//inline styling..
// const customstyle = {
//     color: "blue",
//     fontSize: "30px",
//     border: "5px solid black",
// }
// ReactDom.render(
//     <div>
//         <h1 style={{color:"red"}}>Heloo Angle</h1>
//         <p style={customstyle}>Hello</p>
//     </div>,

//     document.getElementById("root")
// )

//Day time style
// const data = new Date();
// const currenttime = data.getHours();
// let gre;
// const customstyle ={
//     customstyle: " ",
// }
// if(currenttime < 12){
//     gre = "Good Morning";
//     customstyle.color = "red";
// } else if(currenttime < 18){
//     gre = "Good Afternoon";
//     customstyle.color = "green";
// } else {
//     gre = "Good Night";
//     customstyle.color = "blue";
// }
// ReactDom.render(
//     <h1 className="heading" style={customstyle}>{gre}</h1>,
//     document.getElementById("root")
// )

//ES6
