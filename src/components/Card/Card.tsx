import React from "react";
import { useState } from "react";
import "./Card.css";
import noCardImg from "../../assets/basic-card.png";
import kebabIcon from "../../assets/kebab-icon.svg";
import elapsedTime from "../../utils/elapsedTime";
import CardPopover from "../CardPopover/CardPopover";
import { UserCard } from "../../pages/FolderPage";

interface Props {
  card: UserCard;
  changeLinkDeleteSelect: () => void;
  changeFolderAddSelect: () => void;
}

function Card({ card, changeLinkDeleteSelect, changeFolderAddSelect }: Props) {
  const [showPopover, setShowPopover] = useState(false);

  const handleKebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopover(!showPopover);
  };

  return (
    <div className="Card">
      <a
        href={card.url}
        target="_blank"
        rel="noreferrer noopener"
        className="card"
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
              card.createdAt || card.created_at || 1 // 처리할 방법을 모르겠어서 기본값 지정..
            ).toLocaleDateString()}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
