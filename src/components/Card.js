import noneCardImg from '../assets/none-card-img.png';
import ElapsedTime from '../utils/ElapsedTime';
import FormatDate from '../utils/FormatDate';
import './Card.css';

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
          <p className="elapsed_time">{ElapsedTime(createdAt)}</p>
          <p className="description_text">{description}</p>
          <p className="created_at">{FormatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
