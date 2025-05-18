import React, {useState} from "react";

function MyComponent2() {
    const [pelanggan, setPelanggan] = useState("Pelanggan")
    const [kuantitas, setKuantitas] = useState(1)
    const [pembayaran, setPembayaran] = useState()
    const [pengiriman, setPengiriman] = useState("Delivery")
    const [komentar, setKomentar] = useState()

    function handlePelangganChange(e) {
        setPelanggan(e.target.value)
    }
    function handleKuantitasChange(e) {
        setKuantitas(e.target.value)
    }
    function handlePembayaranChange(e) {
        setPembayaran(e.target.value)
    }
    function handlePengirimanChange(e) {
        setPengiriman(e.target.value)
    }
    function handleKomentarChange(e) {
        setKomentar(e.target.value)
    }

    return (
        <>
            <input type="text" value={pelanggan} onChange={handlePelangganChange} />
            <p>Nama : {pelanggan}</p>

            <input type="number" value={kuantitas} onChange={handleKuantitasChange} />
            <p>Jumlah : {kuantitas}</p>

            <select value={pembayaran} onChange={handlePembayaranChange}>
                <option value="">Pilih Opsi</option>
                <option value="Gopay">Gopay</option>
                <option value="Shopeepay">Shopeepay</option>
                <option value="Dana">Dana</option>
            </select>
            <p>Pembayaran : {pembayaran}</p>

            <label>
                <input type="radio" value="Delivery" checked={pengiriman === "Delivery"} onChange={handlePengirimanChange}/>
                Delivery
            </label>
            <br />
            <label>
                <input type="radio" value="Pick Up" checked={pengiriman === "Pick Up"} onChange={handlePengirimanChange}/>
                Pick Up
            </label>
            <p>Pengiriman : {pengiriman}</p>

            <textarea value={komentar} onChange={handleKomentarChange} placeholder="Tinggalkan pesan ..."></textarea>
            <p>Komentar : {komentar}</p>
        </>
    )
}

export default MyComponent2