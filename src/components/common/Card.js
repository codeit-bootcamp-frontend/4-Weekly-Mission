import React from 'react';
import defaultImage from '../../assets/Images/non_image.png';
import star from '../../assets/Images/star.svg';
import { upDateStauts } from '../../assets/utils/cardUpdate';
import { Kebab } from './Kebab';

export default function Card({
  imageSource,
  createdAt,
  description,
  url,
  folder,
  clickPoint,
}) {
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
            {folder && (
              <img
                className="card-star-button"
                src={star}
                alt="star"
                width={34}
                height={34}
              ></img>
            )}
          </div>
          <div className="card-content">
            <div className="card-top-wrapper">
              <p className="card-date-difference">
                {createdAt ? dataStatus : null}
              </p>
              {folder && <Kebab clickPoint={clickPoint}></Kebab>}
            </div>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
