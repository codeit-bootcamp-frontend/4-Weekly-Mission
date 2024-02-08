import React from 'react';

export default function Card({ createdAt, url, title, description, imageURL }) {
  return (
    <article>
      <a href={url}>
        <img src={imageURL || '/undefinedImage.jpeg'} alt={title} />
        <p>{description}</p>
      </a>
    </article>
  );
}
