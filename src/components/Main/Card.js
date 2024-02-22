import classNames from 'classnames';
import PropTypes from 'prop-types';

import NoImage from 'assets/images/card-no-image.svg';

import formatDate from 'utils/formatDate';
import timeAgo from 'utils/timeAgo';

import styles from './Card.module.css';

function Card({ createdAt, url, description, imageSource }) {
  const createdTimeAgo = timeAgo(createdAt);
  const createdDate = formatDate(createdAt);

  const backgroundImage = {
    background: `#d9d9d9 url(${imageSource || NoImage}) no-repeat center / cover`,
  };

  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClickByEnter = (e) => {
    if (e.key === 'Enter') {
      handleCardClick();
    }
  };

  const cardClasses = classNames(styles.card);
  const cardImgageClasses = classNames(styles['card-image'], 'width-full');
  const cardTextBoxClasses = classNames(styles['card-text-box']);
  const timeAgoClasses = classNames(styles['time-ago'], 'text-color-text');
  const cardNameClasses = classNames(styles['card-name'], 'multiline-ellipsis');
  const createDateClasses = classNames(styles['create-date']);

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      onKeyDown={handleCardClickByEnter}
      role="button"
      tabIndex="0"
    >
      <div className={cardImgageClasses} style={backgroundImage} />
      <div className={cardTextBoxClasses}>
        <p className={timeAgoClasses}>{createdTimeAgo}</p>
        <p className={cardNameClasses}>{description}</p>
        <p className={createDateClasses}>{createdDate}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  createdAt: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  imageSource: PropTypes.string,
};

Card.defaultProps = {
  createdAt: '',
  url: '',
  description: '',
  imageSource: '',
};

export default Card;
