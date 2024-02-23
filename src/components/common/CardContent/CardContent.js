import "./CardContent.css";

function CardContent({ elapsedTime, description, createdAt }) {
  return (
    <div className="CardContent">
      <span className="cardContent-elapsed-time">{elapsedTime}</span>
      <img
        className="kebab"
        src="images/kebab.svg"
        alt="더보기를 나타내는 점 3개"
      />
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
}

export default CardContent;
