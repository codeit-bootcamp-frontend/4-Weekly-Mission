import './Card.css';
import timeAgo from '../../utils/timeAgo';
import formatDate from '../../utils/formatDate';
import NoImage from '../../assets/images/card-no-image.svg';

function Card({ createdAt = '', url = '', title = '', description = '', imageSource = '' }) {
  const createdTimeAgo = timeAgo(createdAt);
  const createdDate = formatDate(createdAt);

  const backgroundImage = {
    background: `#d9d9d9 url(${imageSource || NoImage}) no-repeat center / cover`,
  };

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex="0">
      <div className="card-image width-full" style={backgroundImage} />
      <div className="card-text-box">
        <p className="time-ago text-color-text">{createdTimeAgo}</p>
        <p className="card-name multiline-ellipsis">{description}</p>
        <p className="create-date">{createdDate}</p>
      </div>
    </div>
  );
}

export default Card;
