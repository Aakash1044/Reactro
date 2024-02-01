import React from "react";

function Todoitems(props){
    // const [isline,setline] = useState(false)

    // function lineth(){
    //     setline(preValue =>{
    //         return (!preValue)
    //     })

    // }

    return(
        <div onClick={()=>{
            props.onchecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    )//style={{textDecoration : isline? "line-through" : null }}
}

export default Todoitems;