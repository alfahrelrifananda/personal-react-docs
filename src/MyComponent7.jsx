import React, {useState, useEffect} from "react";

function MyComponent7() {
    const [count, setCount] = useState(0)


    // ! this will only excute the FUNCTION only when it RE-RENDER
    // useEffect(() => {
    //     document.title = `count : ${count}`
    // })

    // ! this will only excute the FUNCTION only when it RENDER ONCE becase the DEPENDENCIES is MISSING 
    // useEffect(() => {
    //     document.title = `count : ${count}`
    // }, [])

    // ! this will only excute the FUNCTION only when the DEPENDENCIES is CHANGE or MOUNT
    useEffect(() => {
        document.title = `count : ${count}`

        // ? This is to un-mount
        // return () => {
        //     document.title.removeEventListener("event", function)
        // }
        
    }, [count])



    function handleCount() {
        setCount(c => c + 1)
    }
    
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={handleCount}>Count</button>
        </>
    )
}

export default MyComponent7

