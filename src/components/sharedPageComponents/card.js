import React from 'react';

export default function Card({ link }) {
  const { imageSource, createdAt, description, url } = link;
  const date = new Date(createdAt).toLocaleDateString();

  const upDateStauts = (date) => {
    const currentTime = new Date().getTime();
    const time = new Date(date).getTime();
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
  const status = link.createdAt ? upDateStauts(createdAt) : null;
  return (
    <div className="card">
      <a href={url}>
        <section>
          <img src={imageSource} className="card-image"></img>
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
