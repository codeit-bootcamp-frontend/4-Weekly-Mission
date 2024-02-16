import React from 'react';
import Card from '../common/Card';
import { SearchLink } from '../common/SearchLink';
//

export default function SharedContents({ links }) {
  return (
    <article>
      <SearchLink></SearchLink>
      <div className="content-wrapper">
        {links &&
          links.map((link) => (
            <Card
              imageSource={link.imageSource}
              createdAt={link.createdAt}
              description={link.description}
              url={link.url}
              key={link.id}
            ></Card>
          ))}
      </div>
    </article>
  );
}
