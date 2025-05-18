import React, {useState} from "react"

function MyComponent5() {
    const [ponsel, setPonsel] = useState([])
    const [ponselMerk, setPonselMerk] = useState("")
    const [ponselModel, setPonselModel] = useState("")
    const [ponselTahun, setPonselTahun] = useState(new Date().getFullYear())

    function handleAddPonsel() {
        const newPonsel = {
            merk: ponselMerk,
            model: ponselModel,
            tahun: ponselTahun
        }

        setPonsel(p => [...p, newPonsel])
    }

    function handleRemovePonsel(i) {
        setPonsel(ponsel.filter((_, index) => index !== i))
    }

    function handleAddPonselMerk(e) {
        setPonselMerk(e.target.value)
    }
    function handleAddPonselModel(e) {
        setPonselModel(e.target.value)
    }
    function handleAddPonselTahun(e) {
        setPonselTahun(e.target.value)
    }

    return (
        <>
            <h3>List Ponsel :</h3>
            {ponsel.length > 0 ? ponsel.map((element, index) => 
            <li className="listPonsel" key={index} onClick={() => handleRemovePonsel(index)}>{element.merk} {element.model} {element.tahun}</li>
            ) : <p>Tidak ada ponsel tolong tambahkan</p>}
            <h3>Tambah Ponsel :</h3>
            <input type="text" value={ponselMerk} placeholder="Merk Ponsel..." onChange={handleAddPonselMerk} /><br />
            <input type="text" value={ponselModel} placeholder="Model Ponsel..." onChange={handleAddPonselModel} /><br />
            <input type="text" value={ponselTahun} placeholder="Tahun Rilis ..." onChange={handleAddPonselTahun} /><br />

            <button onClick={handleAddPonsel}>Tambah</button>
        </>

    )
}
export default MyComponent5