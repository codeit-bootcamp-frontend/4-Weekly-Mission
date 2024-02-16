import React from 'react';
import defaultImage from '../../assets/Images/non_image.png';
import { upDateStauts } from '../../assets/utils/cardUpdate';

export default function Card({ imageSource, createdAt, description, url }) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = upDateStauts(createdAt);

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <section>
          <div className="card-image">
            <img
              src={imageSource ? imageSource : defaultImage}
              className="card-data-image"
              alt="card-image"
              width="340"
              height="200"
            ></img>
          </div>
          <div className="card-content">
            <p className="card-date-difference">
              {createdAt ? dataStatus : null}
            </p>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
