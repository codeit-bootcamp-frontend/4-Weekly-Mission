import noneCardImg from '../assets/none-card-img.svg';
import kebab from '../assets/kebab.svg';
import emptyStar from '../assets/icon-empty-star.svg';
import fullStar from '../assets/icon-full-star.svg';
import elapsedTime from '../utils/ElapsedTime';
import formatDate from '../utils/FormatDate';
import './Card.css';

const Card = ({ link }) => {
  const { created_at, createdAt, description, image_source, url } = link;
  // TODO: 별 체크 기능 추가 예정
  const fillStar = false;

  return (
    <div className="card_area">
      <a
        href={url}
        className="card_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className={`img_area${image_source && ' none_img_area'}`}>
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
            <p className="elapsed_time">
              {elapsedTime(created_at || createdAt)}
            </p>
            <img src={kebab} alt="more" />
          </div>
          <p className="description_text">{description}</p>
          <p className="created_at">{formatDate(created_at || createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
