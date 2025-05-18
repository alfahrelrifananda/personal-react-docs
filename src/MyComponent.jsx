import React, {useState} from "react";


function MyComponent() {

    const [nama, setNama] = useState("Guest")
    const [umur, setUmur] = useState(0)
    const [bekerja, setBekerja] = useState(false)

    function setNamaFunc() {
        setNama("Fahrel")
    }
    function setUmurFunc() {
        setUmur(umur + 1)
    }
    function setBekerjaFunc() {
        setBekerja(!bekerja)
    }
    return(
        <>
            <p>Name : {nama}</p>
            <button onClick={setNamaFunc}>Set Nama</button>
            <br />
            <p>Umur : {umur}</p>
            <button onClick={setUmurFunc}>Tambah Umur</button>
            <br />
            <p>Status : {bekerja ? "Pekerja" : "Pengangguran"}</p>
            <button onClick={setBekerjaFunc}>Ganti Status</button>
            <br />
        </>
    )

}

export default MyComponent