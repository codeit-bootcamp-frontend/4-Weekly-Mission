import React from 'react';
import { useFetchCardsData } from '../hooks/CardContainer';
import '../style/cardlist.css';
import searchIcon from '../images/Search.svg';
import noCardImg from '../images/noCardImg.png';

const Cardlist = () => {
  const data = useFetchCardsData();
  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="cardlist">
      <form className="search-bar" onSubmit={handleSearch}>
        <img src={searchIcon} />
        <input type="text" placeholder="링크를 검색해 보세요." />
      </form>
      <div className="cards-container">
        {data.map((cardData) => (
          <a
            key={cardData.id}
            href={cardData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={cardData.imageSource || '/images/defaultimage.png'}
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
