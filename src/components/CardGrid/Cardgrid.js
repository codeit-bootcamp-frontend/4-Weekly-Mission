import React from "react";
import "./Cardgrid.scss";
import defaultImage from "../../image/no_image.svg";
import defaultStar from "../../image/state=Default.svg";
import kebab from "../../image/kebab.svg";

const CardGrid = ({ formattedCards }) => {
  return (
    <div className="main">
      <div className="card-grid">
        {formattedCards.map((card) => (
          <div className="card" key={card.id}>
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <div className="star-image">
                <img src={defaultStar} alt="별" />
              </div>
              <div className="img">
                <img
                  src={card.imageSource || card.image_source || defaultImage}
                  alt={card.title}
                />
              </div>
              <div className="text-and-menu">
                <div className="text-area">
                  <span className="timeAgo">{card.timeAgo}</span>
                  <p>{card.description}</p>
                  <span className="createdAt">{card.formattedCreatedAt}</span>
                </div>
              </div>
            </a>
            <button className="kebab-menu-icon">
              <img src={kebab} alt="메뉴" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
