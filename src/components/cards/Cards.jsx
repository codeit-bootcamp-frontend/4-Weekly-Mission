import "./Cards.css";
import noCardImg from "../../assets/basic-card.png";
import kebabIcon from "../../assets/kebab-icon.svg";
import elapsedTime from "../../utils/elapsedTime";
import { useState } from "react";
import CardPopover from "../CardPopover/CardPopover";

function Cards({ cards, changeLinkDeleteSelect, changeFolderAddSelect }) {
  const [showPopover, setShowPopover] = useState(false);

  const handleKebabClick = (e) => {
    e.preventDefault();
    setShowPopover(!showPopover);
  };

  return (
    <div className="Cards">
      <div className="container">
        {cards ? (
          cards.map((card) => (
            <a
              href={card.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card"
              key={card.id}
            >
              <div className="card_image_container">
                <img
                  className="card_image"
                  src={(card.imageSource || card["image_source"]) ?? noCardImg}
                  alt={
                    card.imageSource || card["image_source"]
                      ? "card image"
                      : "no card image"
                  }
                />
              </div>
              <div className="card_information">
                <div className="card_menu_container">
                  <div className="createdAt">{elapsedTime(card)}</div>
                  <div className="kebab_container">
                    <img src={kebabIcon} onClick={handleKebabClick} />
                    {showPopover && (
                      <div className="popover_container">
                        <CardPopover
                          changeLinkDeleteSelect={changeLinkDeleteSelect}
                          changeFolderAddSelect={changeFolderAddSelect}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="description">{card.description}</div>
                <div className="createdAt">
                  {new Date(
                    card.createdAt || card.created_at
                  ).toLocaleDateString()}
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="no_link_msg">저장된 링크가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
