import "./CardContent.css";

function CardContent({ elapsedTime, description, createdAt }) {
  return (
    <div className="CardContent">
      <span className="cardContent-elapsed-time">{elapsedTime}</span>
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
}

export default CardContent;
