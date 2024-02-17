import React, { useState } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../SearchBar/SearchBar";
import "./Folder.css";

function Folder() {
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  let renderedButtons;

  if (dataArray && Array.isArray(dataArray)) {
    renderedButtons = dataArray.map((item) => (
      <button
        key={item.id}
        className={activeButton === item.name ? "active" : ""}
        onClick={() => handleButtonClick(item.name)}
      >
        {item.name}
      </button>
    ));
  }

  return (
    <div className="Folder">
      <div className="Folder-items">
        <SearchBar />
        <div className="Folder-lists-container">
          <div className="Folder-lists">
            <button
              className={activeButton === "전체" ? "active" : ""}
              onClick={() => handleButtonClick("전체")}
            >
              전체
            </button>
            {renderedButtons}
          </div>
          <div className="Folder-add">
            <span className="Folder-add-text">폴더 추가</span>
            <img
              className="Folder-add-image"
              src="images/add.svg"
              alt="폴더 추가 이미지"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
