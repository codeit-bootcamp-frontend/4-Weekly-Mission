import React, { useRef } from 'react';
import defaultImage from '../../assets/Images/non_image.png';

export default function Card({ link }) {
  const { imageSource, createdAt, description, url } = link;
  const date = new Date(createdAt).toLocaleDateString();
  const cardDiv = useRef(null);
  const cardImage = useRef(null);

  const upDateStauts = (createdDate) => {
    const currentTime = new Date().getTime();
    const time = new Date(createdDate).getTime();
    const timeDiffMinute = parseInt((currentTime - time) / (1000 * 60));
    const timeDiffHour = parseInt(timeDiffMinute / 60);
    const timeDiffDay = parseInt(timeDiffHour / 24);
    const timeDiffMonth = parseInt(timeDiffDay / 30);
    const timeDiffyear = parseInt(timeDiffMonth / 12);

    if (timeDiffMinute < 2) {
      return '1 minute ago';
    }
    if (timeDiffMinute <= 59) {
      return `${timeDiffMinute} minutes ago`;
    }
    if (timeDiffHour <= 23) {
      return `${timeDiffHour} hour${timeDiffHour > 1 ? 's' : ''} ago`;
    }
    if (timeDiffDay <= 30) {
      return `${timeDiffDay} day${timeDiffDay > 1 ? 's' : ''} ago`;
    }
    if (timeDiffMonth <= 11) {
      return `${timeDiffMonth} month${timeDiffMonth > 1 ? 's' : ''} ago`;
    }

    return `${timeDiffyear} year${timeDiffyear > 1 ? 's' : ''} ago`;
  };

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
              {link.createdAt ? upDateStauts(createdAt) : null}
            </p>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
