function List(props) {

    // const buahBuahan = [
    //     {
    //         id: 1,
    //         nama: "Mangga",
    //         kalori: 50
    //     },
    //     {
    //         id: 2,
    //         nama: "Apel",
    //         kalori: 32
    //     },
    //     {
    //         id: 3,
    //         nama: "Semangka",
    //         kalori: 46
    //     }
    // ]


    // ? SORT BERDASARKAN ALFABET
    // const sortAlfabetBuah = buahBuahan.sort((a, b) => a.nama.localeCompare(b.nama))
    // ? SORT BERDASARKAN ALFABET REVERSE
    // const sortReverseAlfabetBuah = buahBuahan.sort((a, b) => b.nama.localeCompare(a.nama))
    // ? SORT BERDASARKAN ANGKA
    // const sortKaloriBuah = buahBuahan.sort((a, b) => a.kalori - b.kalori)
    // ? SORT BERDASARKAN ANGKA REVERSE 
    // const sortKaloriBuahReverse = buahBuahan.sort((a, b) => b.kalori - a.kalori)

    // ? FILTER BERDASARKAN ANGKA
    // const buahKaloriRendah = buahBuahan.filter(el => {
    //     return el.kalori < 35
    // })

    // ? MEMBUAT AGAR REUSEABLE
    const buahBuahan = props.nama

    const buah = buahBuahan.map(buah =>
        <li key={buah.id}>{buah.nama} : <b>{buah.kalori}</b></li>
        )


    return (
        <>
            <h2>{props.kategori}</h2>
            <ol>
            {buah}
            </ol>
        </>
    )
}

export default List