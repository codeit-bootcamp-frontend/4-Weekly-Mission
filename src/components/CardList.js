import React from "react";
import { useCardsData } from "./Card";
import "../styles/cardlist.css";

const defaultCardImg = "img/card_default.png";

function handleImageError(event) {
  event.target.src = defaultCardImg;
}

function CardList() {
  const data = useCardsData();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="cardlist">
      <form className="search" onSubmit={handleSubmit}>
        <img src="img/Search.svg" alt="Search" />
        <input className="search-input" type="text" placeholder="링크를 검색해보세요." />
      </form>
      <div className="card-container">
        {data.map((cardData) => (
          <a className="card" key={cardData.id} href={cardData.url} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img className="card-image" src={cardData.imageSource || defaultCardImg} alt={cardData.title} onError={handleImageError} />
            </div>
            <div className="text-container">
              <span className="text-time">{cardData.timePassed}</span>
              <p className="text-description">{cardData.title}</p>
              <p className="text-date">{cardData.getDate}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardList;
