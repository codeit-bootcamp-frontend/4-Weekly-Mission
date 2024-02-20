import React from "react";
import "../styles/foldercardlist.css";

function FolderCardList({ folderNames }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleFolderClick = (name) => {
    console.log(name + " 폴더 클릭");
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
            <button className="button-folder" onClick={() => handleFolderClick("전체")}>
              전체
            </button>
          </li>
          {folderNames &&
            folderNames.map((name, index) => (
              <li key={index}>
                <button className="button-folder" onClick={() => handleFolderClick(name)}>
                  {name}
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
    </div>
  );
}

export default FolderCardList;
