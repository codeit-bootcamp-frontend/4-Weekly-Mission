import "./CardContent.css";

function CardContent({ elapsedTime, description, createdAt, isHovered }) {
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";
  return (
    <div className={className}>
      <span className="cardContent-elapsed-time">{elapsedTime}</span>
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
}

export default CardContent;
