import noneCardImg from '../assets/none-card-img.svg';
import kebab from '../assets/kebab.svg';
import emptyStar from '../assets/icon-empty-star.svg';
import fullStar from '../assets/icon-full-star.svg';
import ElapsedTime from '../utils/ElapsedTime';
import FormatDate from '../utils/FormatDate';
import './Card.css';

const Card = ({ link }) => {
  const { created_at, description, image_source, url } = link;
  const fillStar = false;

  return (
    <div className="card_area">
      <a
        href={url}
        className="card_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className={image_source ? 'img_area' : 'img_area none_img_area'}
          alt="star"
        >
          <img
            src={image_source || noneCardImg}
            className="card_img"
            alt="card"
            onError={(e) => {
              e.target.src = noneCardImg;
            }}
          />
          <div className="star_icon_area">
            <img src={fillStar ? fullStar : emptyStar} />
          </div>
        </div>
        <div className="card_contents_area">
          <div className="card_content_info">
            <p className="elapsed_time">{ElapsedTime(created_at)}</p>
            <img src={kebab} alt="more" />
          </div>
          <p className="description_text">{description}</p>
          <p className="created_at">{FormatDate(created_at)}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
