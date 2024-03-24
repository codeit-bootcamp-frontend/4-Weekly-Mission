import './Card.css';
import cardImg from '../../assets/card_default.png';
import { formatDate, formatRelativeDate } from '../../utils/date';
import { Link } from 'react-router-dom';
import { IconKebabMenu, IconStar } from '../Icon';
import { MouseEvent, SyntheticEvent } from 'react';

export interface CardItem {
  id: number;
  title: string;
  description: string;
  url: string;
  createdAt: string;
  imageSource: string;
}

interface CardProps {
  item: CardItem;
}

function Card({ item }: CardProps) {
  const { title, description, url, createdAt, imageSource } = item;

  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = cardImg;
  };

  /**
   *
   * @todo 북마크 눌렀을 때 동작 추가
   */
  const handleBookmarkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  /**
   *
   * @todo 메뉴 눌렀을 때 동작 추가
   */
  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link to={url} className="card" target="_blank" rel="noopener noreferrer">
      <div className="card__inner">
        <div className="card__image__container">
          <img
            className="card__image"
            src={imageSource || ''}
            alt={title}
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
                {formatRelativeDate(new Date(createdAt))}
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
              <div className="info__description">{description}</div>
            </div>
            <footer className="info__footer">
              {formatDate(new Date(createdAt))}
            </footer>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
