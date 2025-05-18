import React, {useState} from "react"

function MyComponent3() {
    const [hp, setHp] = useState(
        {
            merk: "Pixel",
            model: "6A",
            tahun: 2022
        }
    )

    function handleMerkHpChange(e) {
        // setHp({...hp, merk: "Redmi"})
        // ? DENGAN MENGGUNAKAN SPREAD OPERATOR ... MAKA IA AKAN TERLIHAT SEPERTI INI :
        // setHp({merk: "Pixel", model: "6A", tahun: 2022, merk: "Redmi"})
        // ? JS AKAN MENIMPA NILAI TERBARU KARENA JS TIDAK MEMBOLEHKAN DUPLICATE

        // ! DISINI DIREKOMENDASIKAN MENGGUNAKAN UPDATER FUNCTION
        setHp(h => ({...h, merk: e.target.value}))

    }

    function handleModelHpChange(e) {
        setHp(h => ({...h, model: e.target.value}))
    }
    function handleTahunHpChange(e) {
        setHp(h => ({...h, tahun: e.target.value}))
    }

    return (
        <>
            <h3>Ponsel Favorit kamu adalah : {hp.merk} {hp.model} keluaran {hp.tahun}</h3>
            <input type="text" value={hp.merk} onChange={handleMerkHpChange}/><br />
            <input type="text" value={hp.model} onChange={handleModelHpChange}/><br />
            <input type="number" value={hp.tahun} onChange={handleTahunHpChange}/><br />
        </>
    )
}
export default MyComponent3