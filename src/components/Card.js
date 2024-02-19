import React from 'react';
import './styles/card.css';
import noImage from '../images/no-image.png';
import { formatDate, getTimeAgo } from '../utils/utils';

const Card = ({ link }) => {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="card-image">
          <img className="card-image-item" src={imageSource ? imageSource : noImage} alt={title} />
        </div>
        <div className="card-contents">
          <div className="card-difference-time">{getTimeAgo(createdAt)}</div>
          <div className="card-description">{description}</div>
          <div className="card-created-time">{formatDate(createdAt)}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
