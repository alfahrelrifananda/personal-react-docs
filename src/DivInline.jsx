function DivInline() {

    const style = {
        backgroundColor: "darkgreen",
        border: "1px solid white",
        padding: "30px",
        textAlign: "center",
        marginBottom: "10px",
        maxHeight: "300px",
        fontWeight: "900",
        maxWidth: "300px"
    }
    return (
        <div style={style}>This div is using inline/internal css</div>
    )
}

export default DivInline