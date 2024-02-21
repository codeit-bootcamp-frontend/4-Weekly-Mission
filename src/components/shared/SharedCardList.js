import Card from './Card';
import React from 'react';
import '../styles/card.css';

const CardList = ({ links }) => {
  return (
    <>
      {links ? (
        <div className="main-container">
          {links.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      ) : (
        <div className="main-container-empty">폴더가 비어있습니다.</div>
      )}
    </>
  );
};

export default CardList;
