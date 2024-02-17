import React from "react";
import searchIcon from "../Assets/image/Search.png";
import { FolderCard } from "./FolderCard";
import "../Styles/Main.css";

export function FolderMain({ cards }) {
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
            <FolderCard cardInfo={card} key={card.id}></FolderCard>
          ))}
      </div>
    </>
  );
}
