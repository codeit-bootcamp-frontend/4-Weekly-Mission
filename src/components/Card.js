import noneCardImg from '../assets/Linkbrary.svg';
import kebab from '../assets/kebab.svg';
import emptyStar from '../assets/icon-empty-star.svg';
import fullStar from '../assets/icon-full-star.svg';
import ElapsedTime from '../utils/ElapsedTime';
import FormatDate from '../utils/FormatDate';
import './Card.css';

const Card = ({ link }) => {
  const { createdAt, description, imageSource } = link;
  const fillStar = false;

  return (
    <div className="card_area">
      <a
        href={link.url}
        className="card_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className={imageSource ? 'img_area' : 'img_area none_img_area'}
          alt="star"
        >
          <img
            src={imageSource || noneCardImg}
            className={imageSource ? 'card_img' : 'none_card_img'}
            alt="card"
          />
          <div className="star_icon_area">
            <img src={fillStar ? fullStar : emptyStar} />
          </div>
        </div>
        <div className="card_contents_area">
          <div className="card_content_info">
            <p className="elapsed_time">{ElapsedTime(createdAt)}</p>
            <img src={kebab} alt="more" />
          </div>
          <p className="description_text">folderInfo{description}</p>
          <p className="created_at">{FormatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
