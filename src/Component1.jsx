import React, { useState, createContext } from "react"
import Component2 from "./Component2"

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext()

function Component1() {

    const [user, _] = useState("Fahrel")
    return (

        <userContext.Provider value={user}>
            <div className="box">
                <h3>Component 1</h3>
                <p>{`Hai ${user}`}</p>
                <Component2 />
            </div>
        </userContext.Provider>

    )
}

export default Component1