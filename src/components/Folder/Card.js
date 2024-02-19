import React from 'react';
import defaultImg from '../../images/non_image.svg';
import starImg from '../../images/star.svg';
import kebabImg from '../../images/kebab.svg';
import { upDateStauts } from './cardUpdate';

export default function Card({
  imageSource,
  createdAt,
  description,
  url,
  folder,
}) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = upDateStauts(createdAt);

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <section>
          <div className="card-image">
            <img
              src={imageSource ? imageSource : defaultImg}
              className="card-data-image"
              alt="card"
              width="340"
              height="200"
            ></img>
            {folder && (
              <img
                className="card-star-button"
                src={starImg}
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
              {folder && (
                <img src={kebabImg} alt="star" width={21} height={17}></img>
              )}
            </div>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
