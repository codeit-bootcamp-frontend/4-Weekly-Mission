import { getFormattedDate, getTimeAgo } from '../../utils/date.js';
import noImage from '../../images/noImage.svg';
import kebab from '../../images/kebab.svg';
import emptyStar from '../../images/emptyStar.svg';
import './Card.css';

export default function Card({ cardData, selectedCardId, setSelectedCardId }) {
  const handlePopOver = e => {
    e.preventDefault();
    setSelectedCardId(cardData.id);
  };
  return (
    <a href={cardData.url} target="_blank" rel="noopener noreferrer" className="cardBox">
      <div className="cardThumbnailContainer">
        <img
          className="cardThumbnail"
          src={cardData.imageSource || cardData.image_source || noImage}
          alt="카드썸네일"
        />
      </div>
      <img className="cardStar" src={emptyStar} alt="빈 별" />
      <div className="cardDataArea">
        <div className="cardTimeAgo">
          <p>{getTimeAgo(cardData.createdAt || cardData.created_at)}</p>
          <button onClick={handlePopOver}>
            <img src={kebab} alt="케밥" />
          </button>
          {selectedCardId === cardData.id && (
            <div className="popOver">
              <div>삭제하기</div>
              <div>폴더에 추가</div>
            </div>
          )}
        </div>
        <div className="cardDesc">{cardData.description || 'No Description'}</div>
        <div className="cardCreatedAt">{getFormattedDate(cardData.createdAt || cardData.created_at)}</div>
      </div>
    </a>
  );
}
