
import "./Style.css"
import { useState } from "react";

export default function Counter(){
let [count,setCount]=useState(0);


const inCount=()=>{
    setCount(count+1);
}
const decCount= ()=>{
    setCount(count-1);
}

const reset=()=>{
    setCount(0);
}


return <div className="dive">
<h1 className="count">FANCY 
    <br/> 
    COUNTER={count}</h1>

<button className="plus" onClick={inCount}>+</button>
<button className="ngatv" onClick={decCount}>-</button>
<button className="minus" onClick={reset}>Reset</button>


</div>


}