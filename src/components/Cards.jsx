import React from 'react';
import Card from './Card';

export default function Cards({ links }) {
  return (
    <section className='grid grid-cols-3 gap-5'>
      {links.map(link => {
        const { createdAt, url, title, description, imageSource } = link;
        return (
          <Card
            key={link.id}
            createdAt={createdAt}
            url={url}
            title={title}
            description={description}
            imageURL={imageSource}
          />
        );
      })}
    </section>
  );
}
