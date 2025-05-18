import React, {useState} from "react"

function MyComponent4() {
    const [makanan, setMakanan] = useState(["Apel","Geprek","Siomay"]) 

    function handleNewMakanan() {
        const newMakanan = document.getElementById("newMakanan").value
        document.getElementById("newMakanan").value = ""
        setMakanan([...makanan, newMakanan])
    }

    function handleDeleteMakanan(index) {
        // ! Underscore (_) berati ignore
        setMakanan(makanan.filter((_, i) => i !== index))
    }

    return (
        <>
            <h3>List Makanan :</h3>
            {makanan.map(((m, index) => 
            <li className="makanan" key={index} onClick={() => handleDeleteMakanan(index)}>{m}</li>) )}
            <h3>Tambah Makanan :</h3>
            <input type="text" id="newMakanan" placeholder="Tulis Makanan..." />
            <button onClick={handleNewMakanan}>Tambah</button>
        </>
    )
}
export default MyComponent4