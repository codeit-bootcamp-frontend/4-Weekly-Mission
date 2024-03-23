import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import { UserCard } from "../../pages/FolderPage";

interface Props {
  cards: UserCard[];
  changeLinkDeleteSelect?: () => void;
  changeFolderAddSelect?: () => void;
}

function Cards({
  cards,
  changeLinkDeleteSelect,
  changeFolderAddSelect,
}: Props) {
  return (
    <div className="Cards">
      <div className="container">
        {cards ? (
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              changeLinkDeleteSelect={changeLinkDeleteSelect}
              changeFolderAddSelect={changeFolderAddSelect}
            />
          ))
        ) : (
          <p className="no_link_msg">저장된 링크가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
