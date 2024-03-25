import React from "react";
import { SharedCard } from "./SharedCard";
import search from "../Assets/image/Search.svg";
import "../Styles/Main.css";

export interface Card {
  id: string;
  imageSource: string;
  createdAt: string;
  description: string;
  url: string;
}
interface SharedMainProps {
  cards: Card[];
}

export function SharedMain({ cards }: SharedMainProps) {
  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <img src={search} className="searchImg" alt="검색 아이콘"></img>
        </div>
      </div>

      <div className="cardContainer">
        {cards &&
          cards.map((card) => (
            <SharedCard cardInfo={card} key={card.id}></SharedCard>
          ))}
      </div>
    </>
  );
}
