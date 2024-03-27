import React, { useState } from "react";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { useFolderName } from "../Hooks/useFolderName";
import { useLinks } from "../Hooks/useLinks";
import FolderTools from "./FolderTools";
import search from "../Assets/image/Search.svg";
import "../Styles/FolderMain.css";

export function FolderMain() {
  const [currentMenu, setCurrentMenu] = useState("전체");
  const [folderCurrentId, setFolderCurrentId] = useState("");
  const { link, fetchLinks } = useLinks();
  const folderNames = useFolderName();

  const handleMenuChange = (newMenu: string | null, id: string): void => {
    setCurrentMenu(newMenu ?? "전체");
    fetchLinks(id);
    setFolderCurrentId(id);
  };

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

      <FolderMenu folderNames={folderNames} onMenuChange={handleMenuChange} />

      <div className="titleContainer">
        <div className="title">{currentMenu}</div>
        {currentMenu !== "전체" && <FolderTools id={folderCurrentId} />}
      </div>

      {link && link.length ? (
        <div className="cardContainer">
          {link.map((card) => (
            <FolderCard key={card.id} cardInfo={card}></FolderCard>
          ))}
        </div>
      ) : (
        <div className="noLink">저장된 링크가 없습니다.</div>
      )}
    </>
  );
}
