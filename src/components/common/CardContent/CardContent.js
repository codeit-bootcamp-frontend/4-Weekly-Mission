import "./CardContent.css";

function CardContent({ elapsedTime, description, createdAt }) {
  return (
    <div className="CardContent">
      <span className="CardContent-elapsed-time">{elapsedTime}</span>
      <button className="CardContent-kebab-button">
        <img
          className="kebab"
          src="images/kebab.svg"
          alt="더보기를 나타내는 점 3개"
        />
      </button>
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
}

export default CardContent;
