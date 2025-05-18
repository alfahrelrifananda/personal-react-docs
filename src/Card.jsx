import cardImage from "./assets/walls.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={cardImage} alt="Image Card"/>
            <h2>Title of the card</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quae, nihil nobis modi in numquam.</p>
        </div>
    )
}
export default Card