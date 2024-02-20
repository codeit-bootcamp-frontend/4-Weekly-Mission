import { useState } from "react";
import SearchBar from "./SearchBar";
import "./FolderDetail.css";
import add from "../images/add.svg";
import FloatingActionButton from "./FloatingActionButton";
import share from "../images/share.svg";
import pen from "../images/pen.svg";
import remove from "../images/remove.svg";
import useFetchData from "../hooks/useFetchData";
import CardList from "./CardList";

function FolderDetail({ folderListData }) {
  const windowWidth = window.innerWidth;
  const [selectedFolder, setSelectedFolder] = useState({});
  const selectedFolderData =
    useFetchData("selectedFolderDataFetch", selectedFolder) || [];

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

        {windowWidth >= 767 ? (
          <div className="addButton">
            <p>폴더 추가</p>
            <img src={add} alt="더하기" />
          </div>
        ) : (
          <FloatingActionButton />
        )}
      </div>
      <div className="buttonClick-Container">
        <p>{selectedFolder.name || "전체"}</p>
        {String(selectedFolder.id) !== "undefined" ? (
          <div className="buttonClick">
            <div className="share">
              <img src={share} alt="공유" />
              <span>공유</span>
            </div>
            <div className="pen">
              <img src={pen} alt="이름변경" />
              <span>이름변경</span>
            </div>
            <div className="remove">
              <img src={remove} alt="삭제" />
              <span>삭제</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <CardList selectedFolderData={selectedFolderData} />
    </div>
  );
}

export default FolderDetail;
