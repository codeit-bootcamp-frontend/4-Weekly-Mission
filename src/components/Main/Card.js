import "./Card.css";

function Card({ createdAt = "", url = "", title = "", description = "", imageSource = "" }) {
  return (
    <div className="card">
      <img className="card-image width-full" src={imageSource} alt={title} />
      <div className="card-text-box">
        <p className="time-ago text-color-text">10 minutes ago</p>
        <p className="card-name multiline-ellipsis">{description}</p>
        <p className="create-date">2023. 3. 15</p>
      </div>
    </div>
  );
}

export default Card;
