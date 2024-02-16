import "./Card.css";

const DEFAULT_IMAGE = "images/card-default.png";

function Card({ imageSource, alt, elapsedTime, description, createdAt }) {
  return (
    <div className="Card">
      <div
        style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
        className="CardImage"
        alt={alt}
      />
      <div className="CardContent">
        <span className="cardContent-elapsed-time">{elapsedTime}</span>
        <p className="CardContent-description">{description}</p>
        <span className="CardContent-created-at">{createdAt}</span>
      </div>
    </div>
  );
}

export default Card;
