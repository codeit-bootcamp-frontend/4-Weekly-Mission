import React from 'react';

export default function Card({ createdAt, url, title, description, imageURL }) {
  return (
    <article className='bg-gray-300 rounded-xl shadow-lg'>
      <a className='flex flex-col items-center py-2' href={url}>
        <img className='h-24' src={imageURL || '/undefinedImage.jpeg'} alt={title} />
        <p>{description}</p>
      </a>
    </article>
  );
}
