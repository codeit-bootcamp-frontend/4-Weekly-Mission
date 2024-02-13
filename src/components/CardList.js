import "./CardList.css";
import noImage from "../assets/noImage.svg";
import formatDate from "../utils/formatDate.js";
import formatTimeDifference from "../utils/formatTimeDifference.js";

function CardListItem({ item }) {
  const { title, createdAt, url, description, imageSource } = item;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {imageSource ? (
        <img src={imageSource} className="card-box-img" alt="" />
      ) : (
        <img src={noImage} className="card-box-img" alt="" />
      )}
      <div className="text-container">
        <p className="time-difference">{formatTimeDifference(createdAt)}</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="date"> {formatDate(createdAt)}</p>
      </div>
    </a>
  );
}

function CardList({ items }) {
  return (
    <div className="card-container-center">
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card-box">
            <CardListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
