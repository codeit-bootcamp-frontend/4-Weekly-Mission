import styles from './Card.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { createDate, intervalDate } from '../../utils/Date';

import noneData from '../../assets/images/none-data.png';
import iconStar from '../../assets/icons/star-off.svg';
import iconKebab from '../../assets/icons/kebab.svg';

import CardPopover from '../FolderPage/CardPopover';

const Card = ({ card, isIconVisible = true }) => {
  const { url, title, description, createdAt, imageSource } = card;
  const cardImage = imageSource ? imageSource : noneData;

  return (
    <div className={cn('card-container')}>
      <CardPopover />
      <div className={cn('card')}>
        {isIconVisible && (
          <>
            <img className={cn('star-icon')} src={iconStar} />
            <img className={cn('kebab-icon')} src={iconKebab} />
          </>
        )}
        <a href={url} target="_blank" rel="noreferrer">
          <div className={cn('card-image-content')}>
            <img className={cn('card-image')} src={cardImage} alt={title + '로 이동하기.'} />
          </div>
          <div className={cn('card-content')}>
            <div className={cn('card-interval-date')}>{intervalDate(createdAt)}</div>
            <div className={cn('card-description')}>{description}</div>
            <div className={cn('card-create-date')}>{createDate(createdAt)}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;