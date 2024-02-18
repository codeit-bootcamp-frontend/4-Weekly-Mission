import React from "react";
import searchIcon from "../Assets/image/Search.png";
import { SharedCard } from "./SharedCard";
import "../Styles/Main.css";

export function SharedMain({ cards }) {
  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <div className="searchIcon">
            <img src={searchIcon} className="searchImg" alt="검색 아이콘"></img>
          </div>
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
