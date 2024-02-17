import React, { useState } from "react";
import searchIcon from "../images/search.svg";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { useFiles } from "../useHooks/useFiles";
import { useFolder } from "../useHooks/useFolder";

export function FolderMain() {
  const [menu, setMenu] = useState("전체");

  const handleMenuChange = (newMenu, id) => {
    setMenu(newMenu);
    fetchFolder(id);
  };

  const folderNames = useFiles();
  const { folder, fetchFolder } = useFolder();

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
          {menu !== "전체" && <HandleFolder />}
        </div>

        {folder && folder.length ? (
          <div className="cardGrid">
            {folder.map((card) => (
              <FolderCard key={card.id} cardInfo={card}></FolderCard>
            ))}
          </div>
        ) : (
          <div className="noLink">저장된 링크가 없습니다.</div>
        )}
      </div>
    </>
  );
}
