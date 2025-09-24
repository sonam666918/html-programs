/*import React, { useState } from "react";
const App = () => {
    console.log("hello")
    let [count, setState] = useState(0)
    function func() {
        SetState(state + 1)
    }
    return (
             
        <div>               
            <h1>{State}</h1>
            <button onClick={func}>Click Me</button>
        </div>
    )
}*/

import React, { useEffect, useState } from "react";
const Home = () => {
    let [count,SetCount] = useState(0)

    useEffect(()=>{
        console.log("hello")
    },[])
    return(
        <div>
            <h3>{count}</h3>
            <button onClick= {()=>SetCount(count+1)}>click</button>
        </div>
    )
}