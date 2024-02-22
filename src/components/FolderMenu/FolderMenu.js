import { useState, useEffect } from "react";
import { getData } from "../../data/getData";
import { CardListFolder } from "../CardList/CardListFolder";
import "./FolderMenu.css";

export const FolderMenu = () => {
  const [folders, setFolders] = useState(null);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState("전체");
  const [links, setLinks] = useState(null);

  const handleFolderClick = (e) => {
    setFolderId(e.target.value);
    setFolderName(e.target.innerHTML);
  };

  useEffect(() => {
    getData("folders")
      .then((response) => {
        const { data } = response;
        return data;
      })
      .then(setFolders);
    getData("links", folderId)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .then(setLinks);
  }, [folderId]);

  return (
    <div>
      <div className="FolderMenu">
        <button value={""} onClick={handleFolderClick}>
          전체
        </button>
        {folders?.map((list) => (
          <button value={list.id} key={list.id} onClick={handleFolderClick}>
            {list.name}
          </button>
        ))}
        <button className="addFolder">폴더 추가 +</button>
      </div>
      <div className="FolderList">
        <div className="FolderFunction">
          <div className="FolderName">{folderName}</div>
          <div className="FolderButton">
            <button>공유</button>
            <button>이름 변경</button>
            <button>삭제</button>
          </div>
        </div>
        <div className="FolderLink">
          {links && links.length >= 1 ? (
            links?.map((link) => <CardListFolder key={link.id} {...link} />)
          ) : (
            <p className="noLink">저장된 링크가 없습니다</p>
          )}
        </div>
      </div>
    </div>
  );
};
