import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import NoImage from 'assets/images/card-no-image.svg';

import KebabButton from 'components/Common/KebabButton';
import SelectMenu from 'components/Common/SelectMenu';
import StarButton from 'components/Common/StarButton';
import styles from 'components/Main/Card.module.css';

import formatDate from 'utils/formatDate';
import timeAgo from 'utils/timeAgo';

function Card({ linkData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { created_at: createdAt, url, description, image_source: imageSource } = linkData;

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
      e.preventDefault();
      handleCardClick();
    }
  };

  const handleCardMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleStarButtonClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleKebabButtonClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const cardClasses = classNames(styles.card, 'position-relative');
  const hiddenSelectMenuClasses = classNames('display-none');
  const starButtonClasses = classNames(styles['star-button'], 'position-absolute');
  const cardImgageClasses = classNames(styles['card-image'], 'width-full');
  const cardTextBoxClasses = classNames(styles['card-text-box'], 'flex-col');
  const topElementContainerClasses = classNames(
    styles['top-element-container'],
    'flex-row',
    'align-center',
    'justify-space-between',
    'width-full'
  );
  const timeAgoClasses = classNames(styles['time-ago'], 'text-color-text');
  const cardNameClasses = classNames(styles['card-name'], 'multiline-ellipsis');
  const createDateClasses = classNames(styles['create-date']);
  const selectMenuClasses = classNames(styles['select-menu'], 'position-absolute', 'z-top-force');

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      onMouseLeave={handleCardMouseLeave}
      onKeyDown={handleCardClickByEnter}
      role="button"
      tabIndex={0}
    >
      <div className={cardImgageClasses} style={backgroundImage} />
      <StarButton className={starButtonClasses} onClick={handleStarButtonClick} isFavorite={isFavorite} />
      <div className={cardTextBoxClasses}>
        <div className={topElementContainerClasses}>
          <p className={timeAgoClasses}>{createdTimeAgo}</p>
          <KebabButton className="" onClick={handleKebabButtonClick} />
        </div>
        <p className={cardNameClasses}>{description}</p>
        <p className={createDateClasses}>{createdDate}</p>
      </div>
      <SelectMenu className={`${selectMenuClasses} ${!isMenuOpen && hiddenSelectMenuClasses}`} link={linkData} />
    </div>
  );
}

Card.propTypes = {
  linkData: PropTypes.shape({
    created_at: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    image_source: PropTypes.string,
  }),
};

Card.defaultProps = {
  linkData: {
    created_at: '',
    url: '',
    description: '',
    image_source: '',
  },
};

export default Card;
