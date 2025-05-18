function Identitas(props) {
    return (
        <>
            <p>------------------------------------</p>
            <div>
                <p>Nama : {props.nama}</p>
                <p>Umur : {props.umur}</p>
                <p>Pelajar : {props.isStudent ? "Iya" : "Bukan"}</p>
            </div>
            <p>------------------------------------</p>
        </>
    )
}

Identitas.defaultProps = {

}
export default Identitas