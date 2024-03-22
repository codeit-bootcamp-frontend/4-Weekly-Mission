import React, { useState, useEffect } from "react";
import { timeCalculate, getDateText } from "../utils/timeCalc";
import "../styles/foldercardlist.css";

const defaultCardImg = "img/card_default.png";

function handleImageError(event) {
  event.target.src = defaultCardImg;
}

function FolderCardList({ folders }) {
  const [linkData, setLinkData] = useState([]);
  const [selectFolderName, setSelectFolderName] = useState("전체");

  async function fetchData(url, folderName = "전체") {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const data = await response.json();
      const processedData = data.data.map((link) => ({
        ...link,
        timePassed: timeCalculate(link.created_at),
        getDate: getDateText(new Date(link.created_at)),
      }));
      setLinkData(processedData);
      setSelectFolderName(folderName);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(`https://bootcamp-api.codeit.kr/api/users/1/links`, "전체");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleFolderClick = (folderId, folderName) => {
    const url = folderId ? `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}` : `https://bootcamp-api.codeit.kr/api/users/1/links`;
    fetchData(url, folderName);
  };

  return (
    <div className="cardlist">
      <form className="search" onSubmit={handleSubmit}>
        <img src="img/Search.svg" alt="Search" />
        <input className="search-input" type="text" placeholder="링크를 검색해보세요." />
      </form>
      <div className="folder-container">
        <ul className="folderlist">
          <li>
            <button className="button-folder" onClick={() => handleFolderClick(null, "전체")}>
              전체
            </button>
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <button className="button-folder" onClick={() => handleFolderClick(folder.id, folder.name)}>
                {folder.name}
              </button>
            </li>
          ))}
        </ul>
        <button className="button-folderadd">
          폴더추가
          <img src="img/add.svg" alt="addbutton" />
        </button>
        <button className="button-folderadd-mobile">
          폴더추가
          <img src="img/add_mobile.svg" alt="addbutton-mobile" />
        </button>
      </div>
      <div className="folder-name">{selectFolderName && <p>{selectFolderName}</p>}</div>
      <div className="card-container">
        {linkData.map((card) => (
          <a className="card" key={card.id} href={card.url} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img className="card-image" src={card.image_source || defaultCardImg} alt={card.title} onError={handleImageError} />
            </div>
            <div className="text-container">
              <span className="text-time">{card.timePassed}</span>
              <p className="text-description">{card.title}</p>
              <p className="text-date">{card.getDate}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FolderCardList;
