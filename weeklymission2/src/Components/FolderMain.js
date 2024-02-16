import React, { useState } from "react";
import searchIcon from "../images/search.svg";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { getFolderName } from "../APIs/FolderPageApi";
import { useFiles } from "../useHooks/useFiles";
import { useFolder } from "../useHooks/useFolder";

export function FolderMain({ cards }) {
  const [menu, setMenu] = useState("전체");

  const handleMenuChange = (newMenu) => {
    setMenu(newMenu);
  };

  const folderNames = useFiles();
  const folder = useFolder();
  console.log(folder);

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

        <FolderMenu folderNames={folderNames} onMenuChange={handleMenuChange} />

        <div className="titleBar">
          <div className="title">{menu}</div>
          <HandleFolder />
        </div>

        <div className="cardGrid">
          {folder &&
            folder.map((card) => (
              <FolderCard key={card.id} cardInfo={card}></FolderCard>
            ))}
        </div>
      </div>
    </>
  );
}
