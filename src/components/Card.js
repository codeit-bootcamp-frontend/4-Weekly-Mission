import '../styles/Card.css';
import iconKebab from '../assets/logo/kebab.svg';
import noneProfile from '../assets/logo/noneProfile.svg';
import iconStar from '../assets/logo/star-off.svg';

const createDate = value => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const intervalDate = value => {
  const createdDate = new Date(value);
  const currentDate = new Date();

  const diffMinute = Math.floor((currentDate - createdDate) / 1000 / 60);
  const diffHour = Math.floor(diffMinute / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffMonth / 12);

  if (diffMinute < 2) {
    return '1 minute ago';
  }
  if (diffMinute <= 59) {
    return `${diffMinute} minutes ago`;
  }
  if (diffHour <= 23) {
    return `${diffHour} hour${diffHour < 2 ? '' : 's'} ago`;
  }
  if (diffDay <= 30) {
    return `${diffDay} day${diffDay < 2 ? '' : 's'} ago`;
  }
  if (diffMonth <= 11) {
    return `${diffMonth} month${diffMonth < 2 ? '' : 's'} ago`;
  } else {
    return `${diffYear} year${diffYear < 2 ? '' : 's'} ago`;
  }
};

const Card = ({ card, isIconVisible = true }) => {
  const { url, title, imageSource, description, createdAt } = card;
  const cardImage = imageSource ? imageSource : noneProfile;
  const altCardImage = title + '로 이동';

  return (
    <div className='card'>
      {isIconVisible && (
        <>
          <img className='star-icon' src={iconStar} />
          <img className='kebab-icon' src={iconKebab} />
        </>
      )}
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='card-image-content'>
          <img className='card-image' src={cardImage} alt={altCardImage} />
        </div>
        <div className='card-content'>
          <div className='card-interval-date'>{intervalDate(createdAt)}</div>
          <div className='card-description'>{description}</div>
          <div className='card-create-date'>{createDate(createdAt)}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
