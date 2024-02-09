import "./Card.css";

function Card({ src = "", alt = "" }) {
  return (
    <div className="card">
      <img className="card-image width-full" src={src} alt={alt} />
      <div className="card-text-box">
        <p className="time-ago text-color-text">10 minutes ago</p>
        <p className="card-name multiline-ellipsis">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd
        </p>
        <p className="create-date">2023. 3. 15</p>
      </div>
    </div>
  );
}

export default Card;
