import React, {useState} from "react"

function ColorPicker() {

    const [color, setColor] = useState("#000000")

    function setColorPicker(e) {
        setColor(e.target.value)
    }

    return (
        <>
            {/* Jika ingin set Syle selalu gunakan object */}
            <div className="color-picker-container" style={{backgroundColor: color}}>
                <p>Selected Color : {color}</p>
            </div>
            <input className="color-picker-input"  type="color" value={color} onChange={setColorPicker} />
        </>
    )
}

export default ColorPicker