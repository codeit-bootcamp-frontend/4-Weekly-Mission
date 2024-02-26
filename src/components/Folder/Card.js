import React from 'react';
import defaultImg from '../../images/no-image.svg';
import starImg from '../../images/star.svg';
import kebabImg from '../../images/kebab.svg';
import { updateStatus } from './cardUpdate';

export default function Card({ imageSource, createdAt, description, folder }) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = updateStatus(createdAt);

  return (
    <div className="card">
      <img
        src={imageSource ? imageSource : defaultImg}
        className="card-image"
        alt="card"
      />
      {folder && (
        <img
          className="card-star-button"
          src={starImg}
          alt="star"
          width={34}
          height={34}
        />
      )}
      <div className="text-container">
        <span>{createdAt ? dataStatus : null}</span>
        <p>{description}</p>
        <p className="date-number">{date}</p>
        {folder && <img src={kebabImg} alt="star" width={21} height={17} />}
      </div>
    </div>
  );
}
