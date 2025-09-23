
import React, { useState } from "react";
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
}
