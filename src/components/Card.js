import React from 'react';
import './styles/card.css';
import noImage from '../images/no-image.png';

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const differenceTime = (value) => {
  const createdDate = new Date(value);
  const currentDate = new Date();

  const differenceMinute = Math.floor((currentDate - createdDate) / 1000 / 60);
  const differenceHour = Math.floor(differenceMinute / 60);
  const differenceDay = Math.floor(differenceHour / 24);
  const differenceMonth = Math.floor(differenceDay / 30);
  const differenceYear = Math.floor(differenceMonth / 12);

  if (differenceMinute < 2) {
    return '1 minute ago';
  } else if (differenceMinute <= 59) {
    return `${differenceMinute} minutes ago`;
  } else if (differenceHour <= 23) {
    return `${differenceHour} hour${differenceHour < 2 ? '' : 's'} ago`;
  } else if (differenceDay <= 30) {
    return `${differenceDay} day${differenceDay < 2 ? '' : 's'} ago`;
  } else if (differenceMonth <= 11) {
    return `${differenceMonth} month${differenceMonth < 2 ? '' : 's'} ago`;
  } else {
    return `${differenceYear} year${differenceYear < 2 ? '' : 's'} ago`;
  }
};

const CardItem = ({ link }) => {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <div className="card-item">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="card-item-image" src={imageSource ? imageSource : noImage} alt={title} />
        <div className="card-item-contents">
          <div className="card-difference-time">{differenceTime(createdAt)}</div>
          <div className="card-description">{description}</div>
          <div className="card-created-time">{formatDate(createdAt)}</div>
        </div>
      </a>
    </div>
  );
};

const Card = ({ links }) => {
  return (
    <main>
      {links ? (
        <div className="main-container">
          {links.map((link) => (
            <CardItem link={link} key={link.id} />
          ))}
        </div>
      ) : (
        <div>폴더가 비어있습니다.</div>
      )}
    </main>
  );
};

export default Card;
