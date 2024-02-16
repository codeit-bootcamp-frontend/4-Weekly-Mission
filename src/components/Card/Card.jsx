import './Card.css';
import cardImg from '../../assets/card_default.png';
import { formatDate, formatRelativeDate } from '../../utils/date';

function Card({ item = {} }) {
  const handleImgError = (e) => {
    e.target.src = cardImg;
  };

  return (
    <a
      className="card"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card__inner">
        <div className="card__image__container">
          <img
            className="card__image"
            src={item.imageSource || ''}
            alt={item.title}
            onError={handleImgError}
          />
        </div>
        <div className="card__info">
          <div className="info">
            <header className="info__header">
              <div className="info__time">
                {formatRelativeDate(item.createdAt)}
              </div>
            </header>
            <div className="info__content">
              <div className="info__description">{item.description}</div>
            </div>
            <footer className="info__footer">
              {formatDate(item.createdAt)}
            </footer>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
