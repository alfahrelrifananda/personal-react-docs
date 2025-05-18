import React, {useState, useEffect, useRef} from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    let intervalRefId = useRef(null)
    let startTimeRef = useRef(0)

    useEffect(() => {

        if (isRunning) {
            intervalRefId.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }
    
        return () => {
            clearInterval(intervalRefId.current)
        }
    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function display() {

        let jam = Math.floor(elapsedTime / (1000 * 60 * 60) % 60) 
        let menit = Math.floor(elapsedTime / (1000 * 60) % 60) 
        let detik = Math.floor(elapsedTime / (1000) % 60) 
        let milidetik = Math.floor((elapsedTime % 1000) / 10)

        jam = String(jam).padStart(2, "0")
        menit = String(menit).padStart(2, "0")
        detik = String(detik).padStart(2, "0")
        milidetik = String(milidetik).padStart(2, "0")

        return(`${jam}:${menit}:${detik}:${milidetik}`)
    }
    
    return (
        <>
        <div className="stopwatch">
            <div className="stopwatch-display">
                {display()}
            </div>
            <div className="stopwatch-control">
                <button onClick={start} className="stopwatch-start">START</button>
                <button onClick={stop} className="stopwatch-stop">STOP</button>
                <button onClick={reset} className="stopwatch-reset">RESET</button>
            </div>
        </div>
        </>
    )
}

export default Stopwatch