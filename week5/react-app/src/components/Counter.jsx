//counter.jsx
import {useState} from "react";


    function Counter(){
        //state
        const [count, setCount]=useState(0);
        //function to modify the state

        const increment=()=>{
        setCount(count+1);
        };
        const decrement=()=>{
        setCount(count-1);
        };
        const reset=(value)=>{
            setCount(value);
        }

        console.log("counter component");
        return(
        <div className="text-center p-4 border">
        <h4 className="text-2xl">Count:{count}</h4>
        <button className="px-4 py-2 bg-green-400" onClick={increment}>+</button>
        <button className="px-4 py-2 bg-red-400" onClick={decrement}>-</button>
        <button className="px-4 py-2 bg-blue-400" onClick={()=>reset(0)}>-</button>
        </div>
    )
}

export default Counter
