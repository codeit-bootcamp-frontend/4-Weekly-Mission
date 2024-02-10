import React from "react";
import { useCardData } from "./Card/useCardData";
import Search from "./Search/Search";
import "./Cardgrid.css";
import defaultImage from "../../image/no_image.svg";

const CardGrid = () => {
  const { formattedCards } = useCardData();

  return (
    <div className="main">
      <Search />
      <div className="card-grid">
        {formattedCards.map((card) => (
          <div className="card">
            <a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={card.imageSource || defaultImage} alt={card.title} />
              <div>
                <span>{card.timeAgo}</span>
                <p>{card.description}</p>
                <span>{card.formattedCreatedAt}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
