import './Card.css';
import cardImg from '../../assets/card_default.png';
import { formatDate, formatRelativeDate } from '../../utils/date';
import IconStar from '../Icon/IconStar';
import { Link } from 'react-router-dom';
import IconKebabMenu from '../Icon/IconKebabMenu';

function Card({
  item = {
    title: '',
    description: '',
    url: '',
    createdAt: '',
    imageSource: '',
  },
}) {
  const handleImgError = (e) => {
    e.target.src = cardImg;
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('TODO: handleBookmarkClick');
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('TODO: handleMenuClick');
  };

  return (
    <Link
      to={item.url}
      className="card"
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
          <button
            type="button"
            className="card__bookmark"
            onClick={handleBookmarkClick}
          >
            <IconStar />
          </button>
        </div>
        <div className="card__info">
          <div className="info">
            <header className="info__header">
              <div className="info__time">
                {formatRelativeDate(item.createdAt)}
              </div>
              <button
                type="button"
                className="info__menu"
                onClick={handleMenuClick}
              >
                <IconKebabMenu />
              </button>
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
    </Link>
  );
}

export default Card;
