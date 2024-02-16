import React, { useState } from "react";
import searchIcon from "../images/search.svg";
import { Card } from "./Card";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";

export function FolderMain({ cards }) {
  const [menu, setMenu] = useState("전체");

  const handleMenuChange = (newMenu) => {
    setMenu(newMenu);
  };

  return (
    <>
      <div className="mainArea">
        <div className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <div className="searchIcon">
            <img src={searchIcon} alt="search" className="searchImg"></img>
          </div>
        </div>

        <FolderMenu onMenuChange={handleMenuChange} />

        <div className="titleBar">
          <div className="title">{menu}</div>
          <HandleFolder />
        </div>

        <div className="cardGrid">
          {cards &&
            cards.map((card) => <Card key={card.id} cardInfo={card}></Card>)}
        </div>
      </div>
    </>
  );
}
