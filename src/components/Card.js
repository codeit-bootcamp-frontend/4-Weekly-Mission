import noneCardImg from '../assets/none-card-img.png';
import './Card.css';

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const elapsedTime = (createdAt) => {
  const milliSeconds = new Date() - new Date(createdAt);
  const seconds = milliSeconds / 1000;

  const diffNum = (value) => Math.floor(value);

  if (seconds < 120) return `1 minute ago`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${diffNum(minutes)} minutes ago`;

  const hours = minutes / 60;
  if (hours < 24) return `${diffNum(hours)} hour ago`;

  const days = hours / 24;
  if (days < 30) return `${diffNum(days)} day ago`;

  const months = days / 30;
  if (months < 12) return `${diffNum(months)} months ago`;

  const years = days / 365;
  return `${diffNum(years)} years ago`;
};

const Card = ({ link }) => {
  const { createdAt, description, imageSource } = link;
  return (
    <div className="card_area">
      <a
        href={link.url}
        className="card_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="img_area">
          {imageSource ? (
            <img src={imageSource} className="card_img" alt="cardImage" />
          ) : (
            <img src={noneCardImg} className="none_card_img" alt="cardImage" />
          )}
        </div>
        <div className="card_contents_area">
          <p className="elapsed_time">{elapsedTime(createdAt)}</p>
          <p className="description_text">{description}</p>
          <p className="created_at">{formatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
