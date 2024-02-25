import Card from '../Card';
import React from 'react';
import '../styles/card.css';

const CardList = ({ links }) => {
  if (!links) {
    return <div className="main-container-empty">폴더가 비어있습니다.</div>;
  }

  return (
    <div className="main-container">
      {links.map((link) => (
        <Card link={link} key={link.id} />
      ))}
    </div>
  );
};

export default CardList;
