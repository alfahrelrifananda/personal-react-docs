import React, {useState} from "react"
import style from "./Counter.module.css"

function Counter() {
    
    const [counter, setCounter] = useState(0)

    function Increment() {
        setCounter(counter + 1)
    }
    function Decrement() {
        setCounter(counter - 1)
    }
    function Reset() {
        setCounter(0)
    }

    return (
        <>
            <h1 className={style.myH1}>{counter}</h1>
            <div className={style.myDiv} >
                <button className={style.myButton} onClick={Decrement} >Decrement</button>
                <button className={style.myButton} onClick={Reset} >Reset</button>
                <button className={style.myButton} onClick={Increment} >Increment</button>
            </div>
        </>
    )
}

export default Counter