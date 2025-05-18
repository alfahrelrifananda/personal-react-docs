function Button() {

    let counter = 0

    function click() {
        console.log("STOP!")
    }

    function click2() {
        console.log("STOP IT!")
    }

    function click3(name) {
        counter++
        console.log(`${name}, STOP! You click me ${counter} times already`)
    }

    function click4(e) {
        e.target.textContent = "STOP IT DUDE!"
    }

    return (
        <>
            <i>SIMPE USAGE (CHECK THE console)</i>
            <br />
            <button onClick={click}>Click Me</button>
            <br />

            {/* If the function have a parameter */}
            <br />
            <i>Using OnDoubleClick (CHECK THE console)</i>
            <br />
            <button onDoubleClick={click2}>Click Me</button>
            <br />

            <br />
            <i>If the function have parameter(CHECK THE console)</i>
            {/* If the function have a parameter */}
            <br />
            <button onClick={() => click3("FAHREL")}>Click Me!!!</button>
            <br />

            <br />
            <i>If it was event listener(CHECK THE console)</i>
            {/* If it was event listener */}
            <br />
            <button onClick={click4}>CLICK ME BROTHER</button>
        </>
    )
}

export default Button