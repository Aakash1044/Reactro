import React from "react";

function Day() {
    const data = new Date();
    const currenttime = data.getHours();
let gre;
const customstyle ={
    customstyle: " ",
}
if(currenttime < 12){
    gre = "Good Morning";
    customstyle.color = "red";
} else if(currenttime < 18){
    gre = "Good Afternoon";
    customstyle.color = "green";
} else {
    gre = "Good Night";
    customstyle.color = "blue";
}
return(<h1 className="heading" style={customstyle}>{gre}</h1>)


}

export default Day;