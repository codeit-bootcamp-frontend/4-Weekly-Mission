import React from 'react';

export default function Card({ link }) {
  const { imageSource, createdAt, description, url } = link;
  return (
    <div className="card">
      <a href={url}>
        <section>
          <img src={imageSource} className="card-image"></img>
          <div className="card-content">
            <p className="card-date-difference">10 minutes ago</p>
            <p className="card-description">{description}</p>
            <p className="card-date">{createdAt}</p>
          </div>
        </section>
      </a>
    </div>
  );
}
