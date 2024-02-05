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
    const timeDiffMinute = (currentTime - time) / (1000 * 60);
    const timeDiffHour = timeDiffMinute / 60;
    const timeDiffDay = timeDiffHour / 24;
    const timeDiffMonth = timeDiffDay / 30;
    const timeDiffyear = timeDiffMonth / 12;
    if (parseInt(timeDiffMinute) < 2) return '1 minute ago';
    if (parseInt(timeDiffMinute) <= 59)
      return `${parseInt(timeDiffMinute)} minutes ago`;
    if (parseInt(timeDiffHour) <= 23)
      return `${parseInt(timeDiffHour)} hours ago`;
    if (parseInt(timeDiffDay) <= 30) return `${parseInt(timeDiffDay)} days ago`;
    if (parseInt(timeDiffMonth) <= 11)
      return `${parseInt(timeDiffMonth)} months ago`;
    return `${parseInt(timeDiffyear)} years ago`;
  };

  const cardMouseOver = () => {
    cardDiv.current.style.border = '2px solid #6D6AFE';
    cardImage.current.style.transform = 'scale(1.3)';
  };

  const cardMouseOut = () => {
    console.log(cardDiv.current);
    cardDiv.current.style.border = '0';
    cardImage.current.style.transform = 'scale(1)';
  };

  const status = link.createdAt ? upDateStauts(createdAt) : null;
  return (
    <div
      className="card"
      ref={cardDiv}
      onMouseOver={cardMouseOver}
      onMouseOut={cardMouseOut}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <section>
          <div className="card-image">
            <img
              src={imageSource ? imageSource : defaultImage}
              className="card-data-image"
              alt="card-image"
              ref={cardImage}
            ></img>
          </div>
          <div className="card-content">
            <p className="card-date-difference">{status}</p>
            <p className="card-description">{description}</p>
            <p className="card-date">{date}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
