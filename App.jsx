
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