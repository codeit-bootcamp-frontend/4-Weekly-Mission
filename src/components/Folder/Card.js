import React from 'react';
import defaultImg from '../../images/non_image.svg';
import starImg from '../../images/star.svg';
import kebabImg from '../../images/kebab.svg';
import { updateStatus } from './cardUpdate';
import { Link } from 'react-router-dom';

export default function Card({
  imageSource,
  createdAt,
  description,
  url,
  folder,
}) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = updateStatus(createdAt);

  return (
    <div className="card">
      <Link to={url}>
        <section>
          <div className="card-image">
            <img
              src={imageSource ? imageSource : defaultImg}
              className="card-data-image"
              alt="card"
              width="340"
              height="200"
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
          </div>
          <div className="card-content">
            <div className="card-top-wrapper">
              <p className="card-date-difference">
                {createdAt ? dataStatus : null}
              </p>
              {folder && (
                <img src={kebabImg} alt="star" width={21} height={17} />
              )}
            </div>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </Link>
    </div>
  );
}
