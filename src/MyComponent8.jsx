import React, { useEffect, useRef} from "react";

function MyComponent8() {

    let counter = useRef(0)

    useEffect(() => {
        console.log("RERENDERED")
    })

    function handleClick() {
        counter.current++
        console.log(`You click ${counter.current} many time`)
    }
    
    return (
        <>
        <button onClick={handleClick}>
            Check console
        </button>
        </>
    )
}

export default MyComponent8