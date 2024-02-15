import React from 'react';
import { useFetchCardsData } from '../hooks/CardContainer';
import '../style/cardlist.css';
import searchIcon from '../images/Search.svg';
import noCardImg from '../images/noCardImg.png';

const Cardlist = () => {
  const cardList = useFetchCardsData();
  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cardlist">
      <form className="search-bar" onSubmit={handleSearch}>
        <img src={searchIcon} />
        <input type="text" placeholder="링크를 검색해 보세요." />
      </form>
      <div className="cards-container">
        {cardList.map((cardData) => (
          <a
            key={cardData.id}
            href={cardData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={cardData.imageSource || noCardImg}
              alt={cardData.title}
              className="card-image"
              onError={handleImageError}
            />
            <p className="text-container">
              <span>{cardData.timePassed}</span>
              <p>{cardData.description}</p>
              <p className="date-number">{cardData.formattedDate}</p>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cardlist;
