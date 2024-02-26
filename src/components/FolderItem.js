import { useState, useEffect } from "react";
import { getUsersLink } from "./Api";
import Cards from "./Cards";
import shareIcon from "../assets/share.svg";
import penIcon from "../assets/pen.svg";
import deleteIcon from "../assets/delete.svg";
import addIcon from "../assets/add.svg";
import "./styles/FolderItem.css";

function FolderItem({ usersFolderData }) {
  const folderList = [{ id: 1, name: "전체" }, ...usersFolderData];

  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: "전체" });

  const handleFolderClick = (data) => {
    setSelectedFolder(data);
  };

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const card = await getUsersLink(
          selectedFolder.name === "전체" ? "" : `?folderId=${selectedFolder.id}`
        );
        setCardList(card.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, [selectedFolder]);

  return (
    <div className="FolderItem">
      <div className="folderItemContainer">
        <div className="folderListBar">
          <div className="folderList">
            {folderList.map((data) => (
              <button
                key={data.id}
                onClick={() => handleFolderClick(data)}
                className={
                  selectedFolder.name === data.name
                    ? "selectedFolder"
                    : "folderButton"
                }
              >
                {data.name}
              </button>
            ))}
          </div>
          <button className="addFolder">
            <p>폴더 추가</p>
            <img src={addIcon}></img>
          </button>
        </div>
        <div className="optionBar">
          <h1 className="folderTitle">{selectedFolder.name}</h1>
          {selectedFolder.name === "전체" ? (
            ""
          ) : (
            <div className="optionList">
              <button className="option">
                <img src={shareIcon} />
                <span>공유</span>
              </button>
              <button className="option">
                <img src={penIcon} />
                <span>이름 변경</span>
              </button>
              <button className="option">
                <img src={deleteIcon} />
                <span>삭제</span>
              </button>
            </div>
          )}
        </div>
        <Cards cardList={cardList} showStarKebab={true} />
      </div>
    </div>
  );
}

export default FolderItem;
