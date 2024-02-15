import React, { useRef } from 'react';
import defaultImage from '../../assets/Images/non_image.png';
import { upDateStauts } from '../../assets/utils/cardUpdate';

export default function SharedCard({ link }) {
  const { imageSource, createdAt, description, url } = link;
  const date = new Date(createdAt).toLocaleDateString();
  const cardDiv = useRef(null);
  const cardImage = useRef(null);

  const dataStatus = upDateStauts(createdAt);

  const handleCardMouseOver = () => {
    cardDiv.current.style.border = '2px solid #6D6AFE';
    cardImage.current.style.transform = 'scale(1.3)';
  };

  const handleCardMouseOut = () => {
    cardDiv.current.style.border = '0';
    cardImage.current.style.transform = 'scale(1)';
  };

  return (
    <div
      className="card"
      ref={cardDiv}
      onMouseOver={handleCardMouseOver}
      onMouseOut={handleCardMouseOut}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <section>
          <div className="card-image">
            <img
              src={imageSource ? imageSource : defaultImage}
              className="card-data-image"
              alt="card-image"
              ref={cardImage}
              width="340"
              height="200"
            ></img>
          </div>
          <div className="card-content">
            <p className="card-date-difference">
              {link.createdAt ? dataStatus : null}
            </p>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
