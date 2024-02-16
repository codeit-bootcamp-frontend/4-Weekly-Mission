import { getFormattedDate, getTimeAgo } from '../../utils/date.js';
import noImage from '../../images/noImage.svg';
import kebab from '../../images/kebab.svg';
import emptyStar from '../../images/emptyStar.svg';
import './Card.css';

export default function Card({ data }) {
  const defaultImageSource = noImage;
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="cardBox">
      <div className="cardThumbnailContainer">
        <img
          className="cardThumbnail"
          src={data.imageSource || data.image_source || defaultImageSource}
          alt="카드썸네일"
        />
      </div>
      <img className="cardStar" src={emptyStar} alt="빈 별" />
      <div className="cardDataArea">
        <div className="cardTimeAgo">
          <p>{data.createAt ? getTimeAgo(data.createdAt) : getTimeAgo(data.created_at)}</p>
          <img src={kebab} alt="케밥" />
        </div>
        <div className="cardDesc">{data.description || 'No Description'}</div>
        <div className="cardCreatedAt">
          {data.createdAt ? getFormattedDate(data.createdAt) : getFormattedDate(data.created_at)}
        </div>
      </div>
    </a>
  );
}
