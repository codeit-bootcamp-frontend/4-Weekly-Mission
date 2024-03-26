import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./FolderDetail.css";
import add from "../images/add.svg";
import FloatingActionButton from "./FloatingActionButton";
import share from "../images/share.svg";
import pen from "../images/pen.svg";
import remove from "../images/remove.svg";
import useFetchData from "../hooks/useFetchData";
import CardList from "./CardList";
import NoLink from "./NoLink";
export const UserContext = React.createContext();

function FolderDetail({ folderListData, toggleModal, handleFolderName }) {
  const [selectedFolder, setSelectedFolder] = useState({});
  const selectedFolderData =
    useFetchData("selectedFolderDataFetch", 4, selectedFolder) || [];

  const handleFolderListClick = (data) => {
    setSelectedFolder(data);
  };

  return (
    <div className="Folder-All">
      <SearchBar />

      <div className="Folder-List-Container">
        <div className="Folder-List">
          <div
            onClick={() => handleFolderListClick({})}
            className={`folderName ${
              String(selectedFolder.id) === "undefined" ? "selected" : ""
            }`}
          >
            전체
          </div>

          {folderListData?.map((data) => (
            <div
              key={data.id}
              onClick={() => handleFolderListClick(data)}
              className={`folderName ${
                selectedFolder.id === data.id ? "selected" : ""
              }`}
            >
              {data.name}
            </div>
          ))}
        </div>

        <div onClick={() => toggleModal(1)} className="addButton">
          <p>폴더 추가</p>
          <img src={add} alt="더하기" />
        </div>
        <FloatingActionButton />
      </div>
      <div className="buttonClick-Container">
        <p>{selectedFolder.name || "전체"}</p>
        {String(selectedFolder.id) !== "undefined" ? (
          <div className="buttonClick">
            <div className="share" onClick={() => toggleModal(5)}>
              <img src={share} alt="공유" />
              <span>공유</span>
            </div>
            <div className="pen" onClick={() => toggleModal(2)}>
              <img src={pen} alt="이름변경" />
              <span>이름변경</span>
            </div>
            <div
              className="remove"
              onClick={() => {
                toggleModal(3);
                handleFolderName(selectedFolder.name);
              }}
            >
              <img src={remove} alt="삭제" />
              <span>삭제</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {String(selectedFolder.id) === "undefined" ? (
        <UserContext.Provider value={toggleModal}>
          <CardList selectedFolderData={selectedFolderData} />
        </UserContext.Provider>
      ) : (
        <NoLink />
      )}
    </div>
  );
}

export default FolderDetail;
