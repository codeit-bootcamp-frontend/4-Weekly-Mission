import React, { useState, useEffect } from "react";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import "./FolderToolBar.css";

const FolderToolBar = () => {
  const [buttons, setButtons] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1/folders")
      .then((response) => response.json())
      .then((data) => {
        setButtons(data.data);
        onFolderSelect(null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onFolderSelect = (folderId) => {
    const baseUrl = "https://bootcamp-api.codeit.kr/api/users/1/links";
    const url = folderId ? `${baseUrl}?folderId=${folderId}` : baseUrl;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.data);
      })
      .catch((error) => console.error("Error fetching links:", error));
  };

  return (
    <div className="wrap">
      <div className="container">
        <div className="button-container">
          <FolderButton buttons={buttons} onFolderSelect={onFolderSelect} />
          <div className="add-button-container">
            <button className="add-button">
              <span>폴더 추가 +</span>
            </button>
          </div>
        </div>
      </div>
      <FolderCardList links={links} />
    </div>
  );
};

export default FolderToolBar;
