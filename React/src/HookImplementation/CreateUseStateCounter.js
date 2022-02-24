import { useEffect, useState } from "react";

export default function CreateUseStateCounter() {
    var [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Hello")
    },[])

    useEffect(() => {
        console.log("Hello...")
    })

    debugger;

    setTimeout(function()  {
            debugger;
        setCounter(counter + 1);
        console.log(counter)
    },1000)


    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
        </div>
    )
}