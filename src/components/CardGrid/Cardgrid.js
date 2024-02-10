import React from "react";
import { useCardData } from "./Card/useCardData";
import Search from "./Search/Search";

const CardGrid = () => {
  const { formattedCards } = useCardData();

  return (
    <div className="main">
      <Search />
      <div className="card-grid">
        {formattedCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <div>
              <span>{card.timeAgo}</span>
              <p>{card.link}</p>
              <span>{card.formattedCreatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
