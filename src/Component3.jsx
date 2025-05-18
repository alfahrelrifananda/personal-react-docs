import React, {useContext} from "react"
import {userContext} from "./Component1.jsx"


function Component3() {

    const user = useContext(userContext)
    return (
        <div className="box">
            <h3>Component 3</h3>
            <p>{`Hai ${user}`}</p>
        </div>
    )
}

export default Component3