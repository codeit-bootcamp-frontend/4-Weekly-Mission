import React from "react";
import "./Cardgrid.css";
import defaultImage from "../../image/no_image.svg";

const CardGrid = ({ formattedCards }) => {
  return (
    <div className="main">
      <div className="card-grid">
        {formattedCards.map((card) => (
          <div className="card" key={card.id}>
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <div className="img">
                <img
                  src={card.imageSource || card.image_source || defaultImage}
                  alt={card.title}
                />
              </div>
              <div className="text-area">
                <span className="timeAgo">{card.timeAgo}</span>
                <p>{card.description}</p>
                <span className="createdAt">{card.formattedCreatedAt}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
