import React, { useState } from "react";
import searchIcon from "../Assets/image/Search.png";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { useFolderName } from "../Hooks/useFolderName";
import { useFolder } from "../Hooks/useFolder";
import FolderTools from "./FolderTools";
import "../Styles/FolderMain.css";

export function FolderMain() {
  const [menu, setMenu] = useState("전체");

  const handleMenuChange = (newMenu, id) => {
    setMenu(newMenu);
    fetchFolder(id);
  };

  const folderNames = useFolderName();
  const { folder, fetchFolder } = useFolder();

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

      <FolderMenu folderNames={folderNames} onMenuChange={handleMenuChange} />

      <div className="titleContainer">
        <div className="title">{menu}</div>
        {menu !== "전체" && <FolderTools />}
      </div>

      {folder && folder.length ? (
        <div className="cardContainer">
          {folder.map((card) => (
            <FolderCard key={card.id} cardInfo={card}></FolderCard>
          ))}
        </div>
      ) : (
        <div className="noLink">저장된 링크가 없습니다.</div>
      )}
    </>
  );
}
