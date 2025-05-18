import React, {useState} from "react"
import style from "./CounterUF.module.css"

function CounterUF() {
    
    const [counter, setCounter] = useState(0)

    function Increment() {
        // Recomended to naming parameter as the first leter of the variabel
        setCounter(c => c + 1)
        setCounter(c => c + 1)
        setCounter(c => c + 1)
    }
    function Decrement() {
        setCounter(c => c - 1)
        setCounter(c => c - 1)
        setCounter(c => c - 1)
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

export default CounterUF