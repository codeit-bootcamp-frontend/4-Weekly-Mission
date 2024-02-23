import React, { useState } from "react";
import searchIcon from "../images/search.svg";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { useFolder } from "../useHooks/useFolder";
import { useLinks } from "../useHooks/useLinks";

export function FolderMain() {
  const { currentMenu, setCurrentMenu } = useFolder();
  const { handleLinks, links } = useLinks();
  const [folderCurrentId, setFolderCurrentId] = useState("");

  const handleMenuChange = (newMenu, id) => {
    setCurrentMenu(newMenu);
    handleLinks(id);
    setFolderCurrentId(id);
  };

  return (
    <>
      <main className="mainArea">
        <form className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <img src={searchIcon} alt="search" className="searchImg"></img>
        </form>

        <FolderMenu onMenuChange={handleMenuChange} />

        <div className="titleBar">
          <div className="title">{currentMenu}</div>
          {currentMenu !== "전체" && <HandleFolder id={folderCurrentId} />}
        </div>

        {links && links.length ? (
          <div className="cardGrid">
            {links.map((card) => (
              <FolderCard key={card.id} cardInfo={card}></FolderCard>
            ))}
          </div>
        ) : (
          <div className="noLink">저장된 링크가 없습니다.</div>
        )}
      </main>
    </>
  );
}
