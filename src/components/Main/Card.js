import PropTypes from 'prop-types';
import './Card.css';
import timeAgo from '../../utils/timeAgo';
import formatDate from '../../utils/formatDate';
import NoImage from '../../assets/images/card-no-image.svg';

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

  return (
    <div className="card" onClick={handleCardClick} onKeyDown={handleCardClickByEnter} role="button" tabIndex="0">
      <div className="card-image width-full" style={backgroundImage} />
      <div className="card-text-box">
        <p className="time-ago text-color-text">{createdTimeAgo}</p>
        <p className="card-name multiline-ellipsis">{description}</p>
        <p className="create-date">{createdDate}</p>
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
