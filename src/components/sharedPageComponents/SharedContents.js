import React from 'react';
import Card from '../common/Card';
import { SearchLink } from '../common/SearchLink';
//

export default function SharedContents({ links }) {
  return (
    <article>
      <SearchLink></SearchLink>
      <div className="content-wrapper">
        {links && links.map((el) => <Card link={el} key={el.id}></Card>)}
      </div>
    </article>
  );
}
