import { Fragment } from "react";
import { getElapsedTime } from "../../utils/getElapsedTime";
import "./Card.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

const Card = ({ item }) => {
  const { title, createdAt, url, description, imageSource } = item;
  return (
    <Fragment>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="card-image" src={imageSource} alt="" />
        <div className="card-text">
          <p className="card-text-time-ago">{getElapsedTime(createdAt)}</p>
          <p className="card-text-description">{description}</p>
          <p className="card-text-date">{formatDate(createdAt)}</p>
        </div>
      </a>
    </Fragment>
  );
};

export default Card;
